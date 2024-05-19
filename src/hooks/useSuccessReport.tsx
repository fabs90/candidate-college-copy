import { StoreApi, UseBoundStore, create } from "zustand";

type typeIsActive = {
  isActive: boolean;
  setIsActive: () => any;
};

const useSuccessReport: UseBoundStore<StoreApi<typeIsActive>> = create(
  (set) => ({
    isActive: false,
    setIsActive: () =>
      set((state: { isActive: boolean }) => ({ isActive: !state.isActive })),
  })
);

export default useSuccessReport;
