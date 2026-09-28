import { Icon } from "@/components/ui/Icon";
import { siteConfig } from "@/data/site";

export function MapCard({ className = "" }: { className?: string }) {
  return (
    <a
      className={`map-card ${className}`}
      href={siteConfig.mapsUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Get directions to Jagati, Bhaktapur"
    >
      <div className="map-grid" />
      <div className="map-roads road-one" />
      <div className="map-roads road-two" />
      <div className="map-marker">
        <span>
          <Icon name="pin" size={24} />
        </span>
        <strong>
          Movies Sanitary
          <br />
          &amp; Tiles Trade Link
        </strong>
        <small>Jagati, Bhaktapur</small>
      </div>
      <div className="map-direction">
        Open in Google Maps <Icon name="arrow" size={17} />
      </div>
    </a>
  );
}
