import api from "../api";

export async function SummaryRequest() {
  const res = await api.get("/financial/summary");
  return res.data;
}

export async function WorkingCapitalRequest() {
  const res = await api.get("/financial/working-capital");
  return res.data;
}

export async function WalletRequest() {
  const res = await api.get("/financial/wallet");
  return res.data;
}

export async function RecentTransactionsRequest(limit ) {
  const res = await api.get(`/financial/transactions/recent`, {
    params: { limit } 
  });
  return res.data;
}

export async function ScheduledTransfersRequest() {
  const res = await api.get("/financial/transfers/scheduled");
  return res.data;
}