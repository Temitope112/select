"use client";

export default function Map() {
  return (
    <section className="bg-white pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] shadow-xl">
          <iframe
            title="Business Location"
            src="YOUR_GOOGLE_MAP_EMBED_URL"
            className="h-[450px] w-full border-0"
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}