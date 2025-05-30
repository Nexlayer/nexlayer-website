"use client"
import DeploymentPanel from "@/components/deployment-panel"
import { useNotifications } from "@/components/launch-notifications"

export default function NotificationsView() {
  const { isPanelOpen, setIsPanelOpen, notifications } = useNotifications()

  return (
    <DeploymentPanel
      isOpen={isPanelOpen}
      onClose={() => setIsPanelOpen(false)}
      deployments={notifications}
    />
  )
}
