import AnnouncementSection from "@/components/layout/announcement-section";
import SiteFooter from "@/components/layout/site-footer";
import SiteHeader from "@/components/layout/site-header";
import { socialConfig } from "@/config/social";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AnnouncementSection/>
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <SiteFooter items={socialConfig} />
    </div>
  );
}
