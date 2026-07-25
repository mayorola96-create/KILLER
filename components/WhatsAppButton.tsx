import { siWhatsapp } from "simple-icons/icons";
import { BrandIcon } from "@/components/BrandIcon";

export function WhatsAppButton() {
  return (
    <a href="https://wa.link/cubji5" target="_blank" rel="noreferrer" className="whatsapp-float" aria-label="Message Sage Partners on WhatsApp">
      <BrandIcon icon={siWhatsapp} className="h-6 w-6" /><span>WhatsApp</span>
    </a>
  );
}
