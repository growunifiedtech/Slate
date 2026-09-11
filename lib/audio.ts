// Monochromatic Web Audio API procedural sound engine for Slate Apparels Factory Tour

class FactorySoundEngine {
  private ctx: AudioContext | null = null;
  private isMutedState: boolean = true;
  private isInitialized: boolean = false;

  // Audio nodes
  private masterGain: GainNode | null = null;
  private droneGain: GainNode | null = null;
  private mechanicalGain: GainNode | null = null;
  private showroomGain: GainNode | null = null;

  // Filter nodes
  private lowpassFilter: BiquadFilterNode | null = null;
  private analyser: AnalyserNode | null = null;

  // Periodic intervals / nodes
  private pulseInterval: any = null;

  public init() {
    if (this.isInitialized || typeof window === 'undefined') return;

    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;

      this.ctx = new AudioCtx();

      // Master Gain
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0, this.ctx.currentTime);

      // Analyser for UI HUD frequency bars
      this.analyser = this.ctx.createAnalyser();
      this.analyser.fftSize = 64;
      this.masterGain.connect(this.analyser);
      this.analyser.connect(this.ctx.destination);

      // Master Lowpass Filter (Factory acoustics vs Showroom acoustics)
      this.lowpassFilter = this.ctx.createBiquadFilter();
      this.lowpassFilter.type = 'lowpass';
      this.lowpassFilter.frequency.setValueAtTime(450, this.ctx.currentTime);
      this.lowpassFilter.Q.setValueAtTime(2.0, this.ctx.currentTime);
      this.lowpassFilter.connect(this.masterGain);

      // 1. Industrial Low-Frequency Drone (Deep factory vibration)
      this.createDroneEngine();

      // 2. Mechanical Rhythmic Texture (Sewing machine & pneumatic movement)
      this.createMechanicalRhythm();

      // 3. Showroom Chime Resonance
      this.createShowroomAtmosphere();

      this.isInitialized = true;
    } catch (e) {
      console.warn('Web Audio API not supported or blocked:', e);
    }
  }

  private createDroneEngine() {
    if (!this.ctx || !this.lowpassFilter) return;

    // Dual sub-oscillators for industrial hum
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(55, this.ctx.currentTime); // A1 note
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(58, this.ctx.currentTime); // Slight detune for phasing

    // Brown noise generator for air circulation / exhaust
    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let lastOut = 0.0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      output[i] = (lastOut + 0.02 * white) / 1.02;
      lastOut = output[i];
      output[i] *= 3.5;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    const noiseFilter = this.ctx.createBiquadFilter();
    noiseFilter.type = 'lowpass';
    noiseFilter.frequency.setValueAtTime(180, this.ctx.currentTime);

    this.droneGain = this.ctx.createGain();
    this.droneGain.gain.setValueAtTime(0.08, this.ctx.currentTime);

    osc1.connect(this.droneGain);
    osc2.connect(this.droneGain);
    whiteNoise.connect(noiseFilter);
    noiseFilter.connect(this.droneGain);

    this.droneGain.connect(this.lowpassFilter);

    osc1.start();
    osc2.start();
    whiteNoise.start();
  }

  private createMechanicalRhythm() {
    if (!this.ctx || !this.lowpassFilter) return;

    this.mechanicalGain = this.ctx.createGain();
    this.mechanicalGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
    this.mechanicalGain.connect(this.lowpassFilter);

    // Periodic subtle stitching click rhythm
    this.pulseInterval = setInterval(() => {
      if (!this.ctx || this.isMutedState || !this.mechanicalGain) return;
      try {
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const clickGain = this.ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(320 + Math.random() * 80, now);
        osc.frequency.exponentialRampToValueAtTime(60, now + 0.04);

        clickGain.gain.setValueAtTime(0.06, now);
        clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(clickGain);
        clickGain.connect(this.mechanicalGain);

        osc.start(now);
        osc.stop(now + 0.05);
      } catch (err) {
        // Ignore audio node cleanup
      }
    }, 400); // 150 BPM industrial stitching tempo
  }

  private createShowroomAtmosphere() {
    if (!this.ctx || !this.masterGain) return;

    this.showroomGain = this.ctx.createGain();
    this.showroomGain.gain.setValueAtTime(0, this.ctx.currentTime);

    // Ethereal chord for luxury showroom (sine pads)
    const chordFreqs = [220, 277.18, 329.63, 440]; // A major 7th / modern luxury chord
    chordFreqs.forEach((freq) => {
      if (!this.ctx || !this.showroomGain) return;
      const osc = this.ctx.createOscillator();
      const panner = this.ctx.createStereoPanner ? this.ctx.createStereoPanner() : null;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(800, this.ctx.currentTime);

      osc.connect(filter);
      if (panner) {
        panner.pan.setValueAtTime((Math.random() - 0.5) * 0.8, this.ctx.currentTime);
        filter.connect(panner);
        panner.connect(this.showroomGain);
      } else {
        filter.connect(this.showroomGain);
      }
      osc.start();
    });

    this.showroomGain.connect(this.masterGain);
  }

  // Update acoustics based on user journey (0: Entrance, 1-7: Factory floor, 8+: Luxury Showroom)
  public updateStage(stageIndex: number) {
    if (!this.ctx || !this.isInitialized) return;
    const now = this.ctx.currentTime;

    if (stageIndex >= 8) {
      // Inside Luxury Showroom: Fade out heavy industrial rumble, fade in pristine showroom ambiance
      if (this.droneGain) this.droneGain.gain.setTargetAtTime(0.02, now, 1.2);
      if (this.mechanicalGain) this.mechanicalGain.gain.setTargetAtTime(0.005, now, 1.0);
      if (this.showroomGain) this.showroomGain.gain.setTargetAtTime(0.07, now, 1.5);
      if (this.lowpassFilter) this.lowpassFilter.frequency.setTargetAtTime(1400, now, 1.2);
    } else {
      // In Industrial Factory: Heavy machine presence, subtle steam & needle rhythms
      if (this.droneGain) this.droneGain.gain.setTargetAtTime(0.09, now, 1.0);
      if (this.mechanicalGain) this.mechanicalGain.gain.setTargetAtTime(0.05, now, 1.0);
      if (this.showroomGain) this.showroomGain.gain.setTargetAtTime(0.0, now, 0.8);
      if (this.lowpassFilter) this.lowpassFilter.frequency.setTargetAtTime(500, now, 1.0);
    }
  }

  public toggleMute(): boolean {
    if (!this.isInitialized) {
      this.init();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.setMuted(!this.isMutedState);
    return this.isMutedState;
  }

  public setMuted(muted: boolean) {
    this.isMutedState = muted;
    if (!this.ctx || !this.masterGain) return;

    const now = this.ctx.currentTime;
    if (muted) {
      this.masterGain.gain.setTargetAtTime(0, now, 0.2);
    } else {
      this.masterGain.gain.setTargetAtTime(0.7, now, 0.5);
    }
  }

  public getAudioLevels(): number {
    if (!this.analyser || this.isMutedState) return 0;
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(dataArray);
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    return sum / (dataArray.length * 255);
  }

  public isMuted(): boolean {
    return this.isMutedState;
  }
}

export const soundEngine = typeof window !== 'undefined' ? new FactorySoundEngine() : null;
