export function formatTime(time: number) {
    const minutes = Math.floor(time / 60000); // 밀리초를 분으로 변환
    const seconds = ((time % 60000) / 1000).toFixed(0); // 밀리초를 초로 변환
    
    return `${minutes}:${seconds}`;
  }