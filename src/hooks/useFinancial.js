import { useQuery } from '@tanstack/react-query';
import { RecentTransactionsRequest, ScheduledTransfersRequest, SummaryRequest,WorkingCapitalRequest,WalletRequest  } from '../services/financial/financialService';

export const useSummaryRequest = () => {
  return useQuery({
    queryKey: ['summary'],
    queryFn: SummaryRequest,
    staleTime: 1000 * 60 * 5, // 5 dakika boyunca veriyi taze say
  });
};

export const useWorkingCapitalRequest = () => {
    return useQuery({
        queryKey: ['workingCapital'],
        queryFn: WorkingCapitalRequest,
        staleTime: 1000 * 60 * 5,
    });
};

export const useWallet = () => {
    return useQuery({
        queryKey: ['wallet'],
        queryFn: WalletRequest,
        staleTime: 1000 * 60 * 5, 
    });
};

export const useRecentTransactions = (limit) => {
  return useQuery({
    queryKey: ['recentTransactions', limit],
    queryFn: () => RecentTransactionsRequest(limit),
    staleTime: 1000 * 60 * 5, 
  });
};

// Planlanmış transferleri getiren hook
export const useScheduledTransfers = () => {
  return useQuery({
    queryKey: ['scheduledTransfers'],
    queryFn: ScheduledTransfersRequest,
    staleTime: 1000 * 60 * 5, 
  });
};