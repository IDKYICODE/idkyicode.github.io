// Simple 8-bit sound synthesizer using Web Audio API
// This avoids the need for external audio files and ensures instant playback

let audioContext: AudioContext | null = null;

const initAudio = () => {
  if (!audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (audioContext.state === 'suspended') {
    audioContext.resume();
  }
  return audioContext;
};

export const playHoverSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  // High pitched short blip
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(800, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

  gainNode.gain.setValueAtTime(0.02, ctx.currentTime); // Low volume
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.05);
};

export const playClickSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  // "Select" style sound
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(400, ctx.currentTime);
  oscillator.frequency.linearRampToValueAtTime(600, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.001, ctx.currentTime + 0.2);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.2);
};

export const playTypeSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  // Very short tick
  oscillator.type = 'triangle';
  oscillator.frequency.setValueAtTime(800, ctx.currentTime);
  
  gainNode.gain.setValueAtTime(0.02, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.03);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.03);
};

export const playPowerUpSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  // Ascending arpeggio
  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(440, ctx.currentTime); // A4
  oscillator.frequency.setValueAtTime(554, ctx.currentTime + 0.1); // C#5
  oscillator.frequency.setValueAtTime(659, ctx.currentTime + 0.2); // E5
  oscillator.frequency.linearRampToValueAtTime(880, ctx.currentTime + 0.4); // A5

  gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.3);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.6);
};

export const playCoinSound = () => {
  const ctx = initAudio();
  if (!ctx) return;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  // Two tone "Bling-Bling"
  oscillator.type = 'sine'; // Sine wave for smoother coin sound
  oscillator.frequency.setValueAtTime(988, ctx.currentTime); // B5
  oscillator.frequency.setValueAtTime(1319, ctx.currentTime + 0.1); // E6

  gainNode.gain.setValueAtTime(0.05, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.5);
};