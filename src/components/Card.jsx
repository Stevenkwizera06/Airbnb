import star from "../images/star.png";

export default function Card({ item }) {
  let badgeText =
    item.openSpots === 0
      ? "SOLD OUT"
      : item.location === "Online"
      ? "ONLINE"
      : null;
  return (
    <>
      <div className="text-xl flex flex-col gap-3 relative">
        {badgeText && (
          <div className="absolute top-2 left-2 bg-white p-2 text-sm rounded-md">
            {badgeText}
          </div>
        )}
        <img src={item.coverImg} alt="pic" className="w-60 rounded-md" />
        <div className="flex gap-2 text-xl">
          <img src={star} alt="star" />
          <span>{item.stats.rating}</span>
          <span className="text-[#918E9B]">({item.stats.reviewCount})</span>
          <span className="text-[#918E9B]">.{item.location}</span>
        </div>
        <p>{item.title}</p>
        <p>
          <span className="font-bold">From ${item.price}</span> / person
        </p>
      </div>
    </>
  );
}
