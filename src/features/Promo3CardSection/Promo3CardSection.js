import React from "react";
import PromoCard from "@/common/components/PromoCard";

const Promo3CardSection = () => {
  return (
    <div className="grid grid-cols-3 gap-6 py-4 container  bg-green-500 ">
      {" "}
      <PromoCard
        title="İNDİRİM GÜNÜ"
        description="Extra %25 indirim Şimdi 10$"
        buttonText="Şimdi Al"
        bgColor="bg-gray-200"
        height="h-48" // Yüksekliği belirtiyoruz
      />
      <PromoCard
        title="ÜRÜN ADI"
        description="Şimdi %30 İndirimli!"
        buttonText="Özel İndirim"
        bgColor="bg-gray-300"
        height="h-48" // Yüksekliği belirtiyoruz
      />
      <PromoCard
        title="ÜRÜN ADI BUGÜNE ÖZEL"
        description="YENİ GELENLER SADECE 10$"
        buttonText="Satın Al"
        bgColor="bg-gray-400"
        height="h-48" // Yüksekliği belirtiyoruz
      />
    </div>
  );
};

export default Promo3CardSection;
