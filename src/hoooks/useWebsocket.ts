// src/hooks/useWebSocket.ts
import { useEffect, useRef } from "react";

export function useWebSocket(url: string, onMessage: (data: any) => void) {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("[WebSocket] Connected");
    };

    ws.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        onMessage(data);
      } catch (err) {
        console.error("Invalid WS message", event.data);
      }
    };

    ws.onclose = () => {
      console.log("[WebSocket] Disconnected");
    };

    return () => {
      ws.close();
    };
  }, [url, onMessage]);
}
