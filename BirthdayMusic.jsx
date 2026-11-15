import { useRef, useState } from "react";

export default function BirthdayMusic() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = async () => {
    if (!playing) {
      try {
        await audioRef.current.play();
        setPlaying(true);
      } catch (error) {
        console.log("Music playback failed", error);
      }
    } else {
      audioRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/birthday-music.mp3"
        loop
      />

      <button onClick={toggleMusic}>
        {playing ? "🎵 Pause Music" : "🎀 Play Music"}
      </button>
    </>
  );
}
