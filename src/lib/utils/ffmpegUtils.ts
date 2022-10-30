import { useAppStore } from "~/context/use-app-store";

export const addLog = (message: string) => {
  const logs = useAppStore.getState().logs;
  useAppStore.setState({ logs: logs + "\n" + message });
};
