// src/UseWebSocket.tsx
import { useState, useEffect } from "react";
import { useWebSocket } from "./hoooks/useWebsocket";

type Transaction = {
  id: number;
  customerId: number | null;
  amount: number;
  totalPrice: number;
  status: string;
};

export default function TestNotif() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  // Minta izin notifikasi di browser
  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  // Listen WebSocket
  useWebSocket("ws://localhost:4000", (data) => {
    if (data.type === "transaction:new") {
      const payload = Array.isArray(data.payload)
        ? data.payload
        : [data.payload];

      setTransactions((prev) => [...payload, ...prev]);

      // Notifikasi browser
      if (Notification.permission === "granted") {
        new Notification("💸 Transaksi Baru", {
          body: `Jumlah transaksi: ${payload.length}`,
        });
      }
    }

    if (data.type === "transaction:status") {
      const updated = data.payload as Transaction;
      setTransactions((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );

      if (Notification.permission === "granted") {
        new Notification("🔄 Status Transaksi", {
          body: `Transaksi #${updated.id} sekarang ${updated.status}`,
        });
      }
    }
  });

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Daftar Transaksi</h1>
      <ul>
        {transactions.map((t) => (
          <li key={t.id} className="border p-2 my-1 rounded">
            <strong>ID:</strong> {t.id} |{" "}
            <strong>Status:</strong> {t.status} |{" "}
            <strong>Total:</strong> Rp {t.totalPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

