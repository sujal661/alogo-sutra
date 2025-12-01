import ScrollAnimate from "@/components/animations/ScrollAnimate";

export default function ImageGrid() {
  return (
    <div className="w-full  mx-auto px-4 space-y-6">
      {/* ---------------- TOP ROW ---------------- */}
      <ScrollAnimate delay={0.5} type="fade-right">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* LEFT BIG IMAGE */}

          <div className="w-full sm:w-[70%]">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/img1.jpg"
                className="w-full h-60 md:h-[360px] object-cover"
                alt=""
              />
            </div>
          </div>

          {/* RIGHT MEDIUM IMAGE */}
          <div className="w-full sm:flex-1">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/img2.jpg"
                className="w-full h-60 md:h-[360px] object-cover"
                alt=""
              />
            </div>
          </div>

          {/* BLUE BAR */}
          <div className="hidden sm:block w-4 lg:w-8 bg-[#1A73E8] rounded-3xl"></div>
        </div>
      </ScrollAnimate>

      {/* ---------------- BOTTOM ROW ---------------- */}
      <ScrollAnimate type="fade-left">
        <div className="flex flex-col sm:flex-row gap-6">
          {/* SMALL IMG LEFT 1 */}
          <div className="w-full sm:w-[25%]">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/img3.jpg"
                className="w-full h-60 md:h-[360px] object-cover"
                alt=""
              />
            </div>
          </div>

          {/* SMALL IMG LEFT 2 */}
          <div className="w-full sm:w-[25%]">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/img4.jpg"
                className="w-full h-60 md:h-[360px] object-cover"
                alt=""
              />
            </div>
          </div>

          {/* BLUE BAR (MIDDLE) */}
          <div className="hidden sm:block w-4 lg:w-8 bg-[#1A73E8] rounded-3xl"></div>

          {/* LARGE IMG RIGHT */}
          <div className="w-full sm:flex-1">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <img
                src="/img/img5.jpg"
                className="w-full h-60 md:h-[360px] object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </ScrollAnimate>
    </div>
  );
}
