// components/partners.js

function PartnerCardItem({ partner }) {
  return (
    <div>
         <div className="p-4 border rounded-xl hover:shadow-md transition">
      <a href={partner.link} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center text-center space-y-2">
          <img src={partner.logo} alt={partner.name} className="h-[250px] w-[450px]" />
        </div>
      </a>
    </div>
    <span className="flex flex-col items-center text-center space-y-2 font-bold">{partner.name}</span>
    </div>
   
  );
}

export default PartnerCardItem;
