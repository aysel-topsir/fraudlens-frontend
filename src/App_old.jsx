import { useState } from "react";
import "./App.css";

const fraudOptions = {
  fraud1: {
    label: "Birinci Hile",
    fullName: "Satışların Maliyeti / Stok Hilesi",
    modelName: "Hybrid model_fraud1",
    description:
      "Brüt kârlılığı artırmak amacıyla satışların maliyetinin düşük gösterilmesi ve aynı tutarın stoklara ilave edilmesi.",
    modelExplanation:
      "Bu hile türü seçildiğinde sistem, satışların maliyeti ve stoklara ilişkin finansal rasyolar üzerinden çalışan hibrit modeli otomatik olarak atar.",
  },

  fraud2: {
    label: "İkinci Hile",
    fullName: "Amortisman Giderleri Hilesi",
    modelName: "Hybrid model_fraud2",
    description:
      "Dönem kârını artırmak amacıyla amortisman giderlerinin olması gerekenden eksik ayrılması.",
    modelExplanation:
      "Bu hile türü seçildiğinde sistem, amortisman giderleri ve dönem kârı ilişkisini dikkate alan hibrit modeli otomatik olarak atar.",
  },
};

const inputFields = {
  fraud1: [
    "Nakit ve Nakit Benzerleri",
    "Ticari Alacaklar",
    "İlişkili Taraflardan Ticari Alacaklar",
    "Stoklar",
    "Toplam Dönen Varlıklar",
    "Maddi Duran Varlıklar",
    "Toplam Varlıklar",
    "Ticari Borçlar",
    "İlişkili Taraflara Ticari Borçlar",
    "Toplam Kısa Vadeli Yükümlülükler",
    "Toplam Yükümlülükler",
    "Toplam Özkaynaklar",
    "Toplam Kaynaklar",
    "Hasılat",
    "Satışların Maliyeti",
    "Brüt Kar/Zarar",
    "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı",
    "Finansman Giderleri",
    "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı",
    "Dönem Karı/Zararı",
    "Faiz Giderleri (Ek Rapor)",
  ],

  fraud2: [
    "Nakit ve Nakit Benzerleri",
    "Ticari Alacaklar",
    "İlişkili Taraflardan Ticari Alacaklar",
    "Stoklar",
    "Toplam Dönen Varlıklar",
    "Maddi Duran Varlıklar",
    "Önceki Maddi Duran Varlıklar",
    "Toplam Duran Varlıklar",
    "Toplam Varlıklar",
    "Ticari Borçlar",
    "İlişkili Taraflara Ticari Borçlar",
    "Toplam Kısa Vadeli Yükümlülükler",
    "Toplam Yükümlülükler",
    "Net Dönem Karı/Zararı",
    "Önceki Dönem Net Dönem Karı/Zararı",
    "Toplam Özkaynaklar",
    "Toplam Kaynaklar",
    "Hasılat",
    "Esas Faaliyetlerden Diğer Giderler",
    "Esas Faaliyet Karı",
    "FAVÖK",
    "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı",
    "Sürdürülen Faaliyetler Dönem Karı",
    "Dönem Karı/Zararı",
  ],
};

function getNumber(values, fieldName) {
  const value = values[fieldName];

  if (value === "" || value === undefined || value === null) {
    return 0;
  }

  const numberValue = Number(value);

  if (Number.isNaN(numberValue)) {
    return 0;
  }

  return numberValue;
}

function safeDivide(numerator, denominator) {
  if (denominator === 0 || denominator === null || denominator === undefined) {
    return 0;
  }

  const result = numerator / denominator;

  if (!Number.isFinite(result)) {
    return 0;
  }

  return result;
}

function formatRatio(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue) || !Number.isFinite(numberValue)) {
    return "0.0000";
  }

  return numberValue.toFixed(4);
}

function formatPercent(value) {
  const numberValue = Number(value);

  if (Number.isNaN(numberValue) || !Number.isFinite(numberValue)) {
    return "--";
  }

  return `${(numberValue * 100).toFixed(2)}%`;
}

function calculateFraud1Ratios(values) {
  const nakit = getNumber(values, "Nakit ve Nakit Benzerleri");
  const ticariAlacaklar = getNumber(values, "Ticari Alacaklar");
  const iliskiliAlacaklar = getNumber(
    values,
    "İlişkili Taraflardan Ticari Alacaklar"
  );
  const stoklar = getNumber(values, "Stoklar");
  const toplamDonenVarliklar = getNumber(values, "Toplam Dönen Varlıklar");
  const maddiDuranVarliklar = getNumber(values, "Maddi Duran Varlıklar");
  const toplamVarliklar = getNumber(values, "Toplam Varlıklar");
  const ticariBorclar = getNumber(values, "Ticari Borçlar");
  const iliskiliBorclar = getNumber(
    values,
    "İlişkili Taraflara Ticari Borçlar"
  );
  const toplamKisaVadeliYukumlulukler = getNumber(
    values,
    "Toplam Kısa Vadeli Yükümlülükler"
  );
  const toplamYukumlulukler = getNumber(values, "Toplam Yükümlülükler");
  const toplamOzkaynaklar = getNumber(values, "Toplam Özkaynaklar");
  const toplamKaynaklar = getNumber(values, "Toplam Kaynaklar");
  const hasilat = getNumber(values, "Hasılat");
  const satislarinMaliyeti = getNumber(values, "Satışların Maliyeti");
  const brutKarZarar = getNumber(values, "Brüt Kar/Zarar");
  const faaliyetKari = getNumber(
    values,
    "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı"
  );
  const finansmanGiderleri = getNumber(values, "Finansman Giderleri");
  const vergiOncesiKar = getNumber(
    values,
    "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı"
  );
  const donemKari = getNumber(values, "Dönem Karı/Zararı");
  const faizGiderleri = getNumber(values, "Faiz Giderleri (Ek Rapor)");

  return [
    {
      code: "TB / Ö",
      formula: "Toplam Yükümlülükler / Toplam Özkaynaklar",
      value: safeDivide(toplamYukumlulukler, toplamOzkaynaklar),
    },
    {
      code: "NFB / Ö",
      formula: "(Toplam Yükümlülükler - Nakit) / Toplam Özkaynaklar",
      value: safeDivide(toplamYukumlulukler - nakit, toplamOzkaynaklar),
    },
    {
      code: "TK / Ö",
      formula: "Toplam Varlıklar / Toplam Özkaynaklar",
      value: safeDivide(toplamVarliklar, toplamOzkaynaklar),
    },
    {
      code: "FAVÖK / İDAFG",
      formula:
        "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı / Faiz Giderleri",
      value: safeDivide(faaliyetKari, faizGiderleri),
    },
    {
      code: "KVB / Ö",
      formula: "Toplam Kısa Vadeli Yükümlülükler / Toplam Özkaynaklar",
      value: safeDivide(toplamKisaVadeliYukumlulukler, toplamOzkaynaklar),
    },
    {
      code: "Cari Oran",
      formula: "Toplam Dönen Varlıklar / Toplam Kısa Vadeli Yükümlülükler",
      value: safeDivide(toplamDonenVarliklar, toplamKisaVadeliYukumlulukler),
    },
    {
      code: "Asit Test Oran",
      formula:
        "(Toplam Dönen Varlıklar - Stoklar) / Toplam Kısa Vadeli Yükümlülükler",
      value: safeDivide(
        toplamDonenVarliklar - stoklar,
        toplamKisaVadeliYukumlulukler
      ),
    },
    {
      code: "N / KVB",
      formula: "Nakit ve Nakit Benzerleri / Toplam Kısa Vadeli Yükümlülükler",
      value: safeDivide(nakit, toplamKisaVadeliYukumlulukler),
    },
    {
      code: "FAVÖK Marjı",
      formula:
        "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı / Hasılat",
      value: safeDivide(faaliyetKari, hasilat),
    },
    {
      code: "BK / H",
      formula: "Brüt Kar/Zarar / Hasılat",
      value: safeDivide(brutKarZarar, hasilat),
    },
    {
      code: "VÖK / H",
      formula: "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı / Hasılat",
      value: safeDivide(vergiOncesiKar, hasilat),
    },
    {
      code: "NDK / Ö",
      formula: "Dönem Karı/Zararı / Toplam Özkaynaklar",
      value: safeDivide(donemKari, toplamOzkaynaklar),
    },
    {
      code: "NDK / TK",
      formula: "Dönem Karı/Zararı / Toplam Kaynaklar",
      value: safeDivide(donemKari, toplamKaynaklar),
    },
    {
      code: "VÖK / Fgid",
      formula:
        "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı / Finansman Giderleri",
      value: safeDivide(vergiOncesiKar, finansmanGiderleri),
    },
    {
      code: "İTTA / TTA",
      formula: "İlişkili Taraflardan Ticari Alacaklar / Ticari Alacaklar",
      value: safeDivide(iliskiliAlacaklar, ticariAlacaklar),
    },
    {
      code: "İTTB / TTB",
      formula: "İlişkili Taraflara Ticari Borçlar / Ticari Borçlar",
      value: safeDivide(iliskiliBorclar, ticariBorclar),
    },
    {
      code: "MDV / Ö",
      formula: "Maddi Duran Varlıklar / Toplam Özkaynaklar",
      value: safeDivide(maddiDuranVarliklar, toplamOzkaynaklar),
    },
    {
      code: "SM / Stok",
      formula: "Satışların Maliyeti / Stoklar",
      value: safeDivide(satislarinMaliyeti, stoklar),
    },
    {
      code: "H / TA",
      formula: "Hasılat / Ticari Alacaklar",
      value: safeDivide(hasilat, ticariAlacaklar),
    },
    {
      code: "H / TV",
      formula: "Hasılat / Toplam Varlıklar",
      value: safeDivide(hasilat, toplamVarliklar),
    },
    {
      code: "H / Ö",
      formula: "Hasılat / Toplam Özkaynaklar",
      value: safeDivide(hasilat, toplamOzkaynaklar),
    },
    {
      code: "H / MDV",
      formula: "Hasılat / Maddi Duran Varlıklar",
      value: safeDivide(hasilat, maddiDuranVarliklar),
    },
  ];
}

function calculateFraud2Ratios(values) {
  const nakit = getNumber(values, "Nakit ve Nakit Benzerleri");
  const ticariAlacaklar = getNumber(values, "Ticari Alacaklar");
  const iliskiliAlacaklar = getNumber(
    values,
    "İlişkili Taraflardan Ticari Alacaklar"
  );
  const stoklar = getNumber(values, "Stoklar");
  const toplamDonenVarliklar = getNumber(values, "Toplam Dönen Varlıklar");
  const maddiDuranVarliklar = getNumber(values, "Maddi Duran Varlıklar");
  const oncekiMaddiDuranVarliklar = getNumber(
    values,
    "Önceki Maddi Duran Varlıklar"
  );
  const toplamDuranVarliklar = getNumber(values, "Toplam Duran Varlıklar");
  const toplamVarliklar = getNumber(values, "Toplam Varlıklar");
  const ticariBorclar = getNumber(values, "Ticari Borçlar");
  const iliskiliBorclar = getNumber(
    values,
    "İlişkili Taraflara Ticari Borçlar"
  );
  const toplamKisaVadeliYukumlulukler = getNumber(
    values,
    "Toplam Kısa Vadeli Yükümlülükler"
  );
  const toplamYukumlulukler = getNumber(values, "Toplam Yükümlülükler");
  const netDonemKari = getNumber(values, "Net Dönem Karı/Zararı");
  const oncekiNetDonemKari = getNumber(
    values,
    "Önceki Dönem Net Dönem Karı/Zararı"
  );
  const toplamOzkaynaklar = getNumber(values, "Toplam Özkaynaklar");
  const toplamKaynaklar = getNumber(values, "Toplam Kaynaklar");
  const hasilat = getNumber(values, "Hasılat");
  const esasFaaliyetlerdenDigerGiderler = getNumber(
    values,
    "Esas Faaliyetlerden Diğer Giderler"
  );
  const esasFaaliyetKari = getNumber(values, "Esas Faaliyet Karı");
  const favok = getNumber(values, "FAVÖK");
  const vergiOncesiKar = getNumber(
    values,
    "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı"
  );
  const surdurulenDonemKari = getNumber(
    values,
    "Sürdürülen Faaliyetler Dönem Karı"
  );
  const donemKari = getNumber(values, "Dönem Karı/Zararı");

  return [
    {
      code: "TY / TÖ",
      formula: "Toplam Yükümlülükler / Toplam Özkaynaklar",
      value: safeDivide(toplamYukumlulukler, toplamOzkaynaklar),
    },
    {
      code: "NFB / TÖ",
      formula: "(Toplam Yükümlülükler - Nakit) / Toplam Özkaynaklar",
      value: safeDivide(toplamYukumlulukler - nakit, toplamOzkaynaklar),
    },
    {
      code: "TKVY / TÖ",
      formula: "Toplam Kısa Vadeli Yükümlülükler / Toplam Özkaynaklar",
      value: safeDivide(toplamKisaVadeliYukumlulukler, toplamOzkaynaklar),
    },
    {
      code: "T.DÖN.V / TKVY",
      formula: "Toplam Dönen Varlıklar / Toplam Kısa Vadeli Yükümlülükler",
      value: safeDivide(toplamDonenVarliklar, toplamKisaVadeliYukumlulukler),
    },
    {
      code: "T.DÖN.V-Stok / TKVY",
      formula:
        "(Toplam Dönen Varlıklar - Stoklar) / Toplam Kısa Vadeli Yükümlülükler",
      value: safeDivide(
        toplamDonenVarliklar - stoklar,
        toplamKisaVadeliYukumlulukler
      ),
    },
    {
      code: "NAKİT / TKVY",
      formula: "Nakit ve Nakit Benzerleri / Toplam Kısa Vadeli Yükümlülükler",
      value: safeDivide(nakit, toplamKisaVadeliYukumlulukler),
    },
    {
      code: "DK(Z) / TÖ",
      formula: "Dönem Karı/Zararı / Toplam Özkaynaklar",
      value: safeDivide(donemKari, toplamOzkaynaklar),
    },
    {
      code: "İTTA / TA",
      formula: "İlişkili Taraflardan Ticari Alacaklar / Ticari Alacaklar",
      value: safeDivide(iliskiliAlacaklar, ticariAlacaklar),
    },
    {
      code: "İTTB / TB",
      formula: "İlişkili Taraflara Ticari Borçlar / Ticari Borçlar",
      value: safeDivide(iliskiliBorclar, ticariBorclar),
    },
    {
      code: "MDV / TÖ",
      formula: "Maddi Duran Varlıklar / Toplam Özkaynaklar",
      value: safeDivide(maddiDuranVarliklar, toplamOzkaynaklar),
    },
    {
      code: "H / TA",
      formula: "Hasılat / Ticari Alacaklar",
      value: safeDivide(hasilat, ticariAlacaklar),
    },
    {
      code: "H / MDV",
      formula: "Hasılat / Maddi Duran Varlıklar",
      value: safeDivide(hasilat, maddiDuranVarliklar),
    },
    {
      code: "SFVÖK-EFK / MDV",
      formula:
        "(Vergi Öncesi Kar - Esas Faaliyet Karı) / Maddi Duran Varlıklar",
      value: safeDivide(vergiOncesiKar - esasFaaliyetKari, maddiDuranVarliklar),
    },
    {
      code: "SFVÖK-EFK / TV",
      formula: "(Vergi Öncesi Kar - Esas Faaliyet Karı) / Toplam Varlıklar",
      value: safeDivide(vergiOncesiKar - esasFaaliyetKari, toplamVarliklar),
    },
    {
      code: "DK(Z) / MDV",
      formula: "Dönem Karı/Zararı / Maddi Duran Varlıklar",
      value: safeDivide(donemKari, maddiDuranVarliklar),
    },
    {
      code: "EFK / H",
      formula: "Esas Faaliyet Karı / Hasılat",
      value: safeDivide(esasFaaliyetKari, hasilat),
    },
    {
      code: "EFDG / H",
      formula: "Esas Faaliyetlerden Diğer Giderler / Hasılat",
      value: safeDivide(esasFaaliyetlerdenDigerGiderler, hasilat),
    },
    {
      code: "SFVÖK / EFK",
      formula: "Vergi Öncesi Kar / Esas Faaliyet Karı",
      value: safeDivide(vergiOncesiKar, esasFaaliyetKari),
    },
    {
      code: "EFK / TV",
      formula: "Esas Faaliyet Karı / Toplam Varlıklar",
      value: safeDivide(esasFaaliyetKari, toplamVarliklar),
    },
    {
      code: "DK(Z) / TK",
      formula: "Dönem Karı/Zararı / Toplam Kaynaklar",
      value: safeDivide(donemKari, toplamKaynaklar),
    },
    {
      code: "NetDönKar* / MDV*",
      formula: "Net Dönem Kârı değişimi / Maddi Duran Varlık değişimi",
      value: safeDivide(
        safeDivide(netDonemKari - oncekiNetDonemKari, oncekiNetDonemKari),
        safeDivide(
          maddiDuranVarliklar - oncekiMaddiDuranVarliklar,
          oncekiMaddiDuranVarliklar
        )
      ),
    },
    {
      code: "SFDK(Z) / TÖ",
      formula: "Sürdürülen Faaliyetler Dönem Karı / Toplam Özkaynaklar",
      value: safeDivide(surdurulenDonemKari, toplamOzkaynaklar),
    },
    {
      code: "FAVÖK / T.DuranV",
      formula: "FAVÖK / Toplam Duran Varlıklar",
      value: safeDivide(favok, toplamDuranVarliklar),
    },
  ];
}

function App() {
  const [fraudType, setFraudType] = useState("fraud1");
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [calculatedRatios, setCalculatedRatios] = useState([]);
  const [backendResult, setBackendResult] = useState(null);
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendError, setBackendError] = useState("");

  const selectedFraud = fraudOptions[fraudType];
  const selectedFields = inputFields[fraudType];

  function handleFraudTypeChange(newFraudType) {
    setFraudType(newFraudType);
    setFormValues({});
    setCalculatedRatios([]);
    setBackendResult(null);
    setBackendError("");
    setCurrentStep(1);
  }

  function handleInputChange(fieldName, value) {
    setFormValues((previousValues) => ({
      ...previousValues,
      [fieldName]: value,
    }));
  }

  function handleInputBlur(fieldName) {
    if (formValues[fieldName] === "" || formValues[fieldName] === undefined) {
      handleInputChange(fieldName, "0");
    }
  }

  function goToDataEntry() {
    setCurrentStep(2);
  }

  function goBackToModelSelection() {
    setCurrentStep(1);
  }

  function goBackToDataEntry() {
    setCurrentStep(2);
  }

  function calculateRatios() {
    const ratios =
      fraudType === "fraud1"
        ? calculateFraud1Ratios(formValues)
        : calculateFraud2Ratios(formValues);

    setCalculatedRatios(ratios);
    setBackendResult(null);
    setBackendError("");
    setCurrentStep(3);
  }

  async function goToFinalResult() {
    setBackendLoading(true);
    setBackendError("");
    setBackendResult(null);

    const payload = {
      fraudType: fraudType,
      ratios: calculatedRatios.map((ratio) => ({
        code: ratio.code,
        value: Number(formatRatio(ratio.value)),
      })),
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Backend yanıt vermedi.");
      }

      const data = await response.json();

      if (data.status !== "success") {
        throw new Error(data.message || "Model tahmini üretilemedi.");
      }

      setBackendResult(data);
    } catch (error) {
      setBackendError(
        "Backend bağlantısı kurulamadı veya model tahmini üretilemedi. Python backend ve frontend aynı anda açık olmalı."
      );
    } finally {
      setBackendLoading(false);
      setCurrentStep(4);
    }
  }

  function downloadCsvReport() {
    const rows = [];

    rows.push(["Bölüm", "Alan", "Değer"]);
    rows.push([
      "Genel Bilgi",
      "Hile Türü",
      `${selectedFraud.label}: ${selectedFraud.fullName}`,
    ]);
    rows.push(["Genel Bilgi", "Model", selectedFraud.modelName]);
    rows.push(["Genel Bilgi", "Durum", "Rasyolar başarıyla hesaplandı"]);

    if (backendResult) {
      rows.push([
        "Tekil Şirket Tahmini",
        "Tahmin Sonucu",
        backendResult.predictionLabel ?? "",
      ]);
      rows.push([
        "Tekil Şirket Tahmini",
        "Risk Seviyesi",
        backendResult.riskLevel ?? "",
      ]);
      rows.push([
        "Tekil Şirket Tahmini",
        "Hile Olasılığı",
        backendResult.fraudProbability ?? "",
      ]);
      rows.push([
        "Tekil Şirket Tahmini",
        "Güven Skoru",
        backendResult.confidenceScore ?? "",
      ]);
      rows.push([
        "Modelin Test Veri Seti Performansı",
        "Accuracy",
        backendResult.metrics?.accuracy ?? "",
      ]);
      rows.push([
        "Modelin Test Veri Seti Performansı",
        "Precision",
        backendResult.metrics?.precision ?? "",
      ]);
      rows.push([
        "Modelin Test Veri Seti Performansı",
        "Recall",
        backendResult.metrics?.recall ?? "",
      ]);
      rows.push([
        "Modelin Test Veri Seti Performansı",
        "F1-Score",
        backendResult.metrics?.f1_score ?? "",
      ]);
      rows.push([
        "Modelin Test Veri Seti Performansı",
        "AppGear",
        backendResult.metrics?.appgear ?? "",
      ]);
    }

    rows.push([]);
    rows.push(["Girilen Finansal Tablo Kalemleri", "Kalem", "Değer"]);

    selectedFields.forEach((fieldName) => {
      rows.push([
        "Girilen Finansal Tablo Kalemleri",
        fieldName,
        formValues[fieldName] ?? "0",
      ]);
    });

    rows.push([]);
    rows.push(["Hesaplanan Rasyolar", "Rasyo", "Formül", "Sonuç"]);

    calculatedRatios.forEach((ratio) => {
      rows.push([
        "Hesaplanan Rasyolar",
        ratio.code,
        ratio.formula,
        formatRatio(ratio.value),
      ]);
    });

    const csvContent = rows
      .map((row) =>
        row
          .map((cell) => {
            const cellText = String(cell ?? "");
            return `"${cellText.replaceAll('"', '""')}"`;
          })
          .join(";")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    const fileName =
      fraudType === "fraud1"
        ? "fraud1_model_sonuc_raporu.csv"
        : "fraud2_model_sonuc_raporu.csv";

    link.href = url;
    link.download = fileName;
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">🛡️</div>

          <div>
            <h2>FRAUD ANALYTICS</h2>
            <p>DECISION PLATFORM</p>
          </div>
        </div>

        <div className="welcome-card">
          <h3>👋 Hoş Geldiniz!</h3>
          <p>
            Bu modül, finansal verilerde hile tespiti için makine öğrenmesi
            modellerini kullanır ve olası riskleri analiz ederek karar
            süreçlerini destekler.
          </p>
        </div>

        <div className="side-menu">
          <button className="side-button active">
            ☑ FRAUD DETECTION SYSTEM
          </button>

          <button className="side-button">
            ⚙ SEMI-AGENTIC FRAUD DETECTION SUPPORT SYSTEM
          </button>
        </div>

        <div className="small-info-card">
          <h4>ⓘ Bilgi</h4>
          <p>
            Bu platform, kullanıcı tarafından girilen finansal tablo kalemleri
            üzerinden rasyoları hesaplamak, hibrit makine öğrenmesi modelini
            çalıştırmak ve hile riskini değerlendirmek amacıyla tasarlanmıştır.
          </p>
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <h1>FRAUD DETECTION SYSTEM</h1>
        </header>

        <section className="stepper four-stepper">
          <div
            className={`step ${
              currentStep === 1 ? "active" : currentStep > 1 ? "completed" : ""
            }`}
          >
            <span>{currentStep > 1 ? "✓" : "1"}</span>
            <p>Model Seçimi</p>
          </div>

          <div className="step-separator">›</div>

          <div
            className={`step ${
              currentStep === 2 ? "active" : currentStep > 2 ? "completed" : ""
            }`}
          >
            <span>{currentStep > 2 ? "✓" : "2"}</span>
            <p>Veri Girişi</p>
          </div>

          <div className="step-separator">›</div>

          <div
            className={`step ${
              currentStep === 3 ? "active" : currentStep > 3 ? "completed" : ""
            }`}
          >
            <span>{currentStep > 3 ? "✓" : "3"}</span>
            <p>Rasyo Hesaplama</p>
          </div>

          <div className="step-separator">›</div>

          <div className={`step ${currentStep === 4 ? "active" : ""}`}>
            <span>4</span>
            <p>Sonuç Ekranı</p>
          </div>
        </section>

        {currentStep === 1 && (
          <section className="full-page-section">
            <div className="top-info-grid horizontal-info-grid">
              <div className="mini-info-card">
                <div className="mini-icon">📌</div>
                <div className="mini-info-text">
                  <h4>Hile Türü Açıklaması</h4>
                  <p>{selectedFraud.description}</p>
                </div>
              </div>

              <div className="mini-info-card">
                <div className="mini-icon">⚙</div>
                <div className="mini-info-text">
                  <h4>Otomatik Model Ataması</h4>
                  <p>{selectedFraud.modelExplanation}</p>
                </div>
              </div>

              <div className="mini-info-card">
                <div className="mini-icon">✅</div>
                <div className="mini-info-text">
                  <h4>Sonraki Adım</h4>
                  <p>
                    Seçim tamamlandıktan sonra kullanıcı “VERİLERİ GİR” butonu
                    ile finansal tablo kalemlerini gireceği ekrana geçer.
                  </p>
                </div>
              </div>
            </div>

            <div className="card full-width-card">
              <h2>Model Seçimi</h2>

              <p className="description">
                Hile türünü seçin. İlgili hibrit model otomatik olarak atanır.
              </p>

              <div className="fraud-choice-area">
                <h3>Hile Türü</h3>

                <div className="fraud-choice-grid">
                  {Object.entries(fraudOptions).map(([key, option]) => (
                    <button
                      key={key}
                      type="button"
                      className={`fraud-choice-card ${
                        fraudType === key ? "selected" : ""
                      }`}
                      onClick={() => handleFraudTypeChange(key)}
                    >
                      <div className="fraud-choice-main">
                        <span className="fraud-choice-check">
                          {fraudType === key ? "✓" : ""}
                        </span>

                        <div>
                          <strong>{option.label}</strong>
                          <p>{option.fullName}</p>
                        </div>
                      </div>

                      <div className="fraud-choice-model">
                        <span>Atanan Model</span>
                        <b>{option.modelName}</b>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="selected-model-box">
                <span>Otomatik Model Seçimi</span>
                <strong>{selectedFraud.modelName}</strong>
              </div>

              <button className="primary-button" onClick={goToDataEntry}>
                VERİLERİ GİR <span>→</span>
              </button>
            </div>
          </section>
        )}

        {currentStep === 2 && (
          <section className="full-page-section">
            <div className="top-info-grid horizontal-info-grid">
              <div className="mini-info-card">
                <div className="mini-icon">📝</div>
                <div className="mini-info-text">
                  <h4>Finansal Veri Girişi</h4>
                  <p>
                    Seçilen hile türüne ait finansal tablo kalemlerinin
                    değerleri ilgili alanlara girilir.
                  </p>
                </div>
              </div>

              <div className="mini-info-card">
                <div className="mini-icon">123</div>
                <div className="mini-info-text">
                  <h4>Sayısal Format</h4>
                  <p>
                    Tüm değerler sayısal olmalıdır. Ondalık ayracı
                    kullanılmamalıdır.
                  </p>
                </div>
              </div>

              <div className="mini-info-card">
                <div className="mini-icon">🎯</div>
                <div className="mini-info-text">
                  <h4>Rasyo Hesaplama</h4>
                  <p>
                    “RASYOLARI HESAPLA” butonu ile değerler ilgili rasyolara
                    dönüştürülür.
                  </p>
                </div>
              </div>
            </div>

            <div className="card full-width-card">
              <div className="data-card-header">
                <div>
                  <h2>Veri Girişi</h2>
                  <p className="description">
                    Seçilen hile türüne göre gerekli finansal tablo kalemlerini
                    aşağıdaki alanlara girin.
                  </p>
                </div>

                <button
                  className="secondary-button"
                  onClick={goBackToModelSelection}
                >
                  ← GERİ DÖN
                </button>
              </div>

              <div className="selection-banner">
                <div>
                  <strong>Hile Türü</strong>
                  <span>
                    {selectedFraud.label}: {selectedFraud.fullName}
                  </span>
                </div>

                <div>
                  <strong>Model</strong>
                  <span>{selectedFraud.modelName}</span>
                </div>
              </div>

              <div className="field-list-expanded">
                {selectedFields.map((fieldName) => (
                  <div className="field-row-expanded" key={fieldName}>
                    <label>{fieldName}</label>

                    <input
                      type="number"
                      placeholder="0"
                      value={formValues[fieldName] ?? "0"}
                      onChange={(event) =>
                        handleInputChange(fieldName, event.target.value)
                      }
                      onBlur={() => handleInputBlur(fieldName)}
                    />
                  </div>
                ))}
              </div>

              <button
                className="primary-button calculate-button"
                onClick={calculateRatios}
              >
                RASYOLARI HESAPLA <span>→</span>
              </button>
            </div>
          </section>
        )}

        {currentStep === 3 && (
          <section className="full-page-section">
            <div className="top-info-grid horizontal-info-grid">
              <div className="mini-info-card">
                <div className="mini-icon">📊</div>
                <div className="mini-info-text">
                  <h4>Hesaplanan Rasyolar</h4>
                  <p>
                    Finansal tablo kalemlerinden elde edilen rasyolar tablo
                    halinde gösterilir.
                  </p>
                </div>
              </div>

              <div className="mini-info-card">
                <div className="mini-icon">0.0</div>
                <div className="mini-info-text">
                  <h4>Sıfıra Bölme Kontrolü</h4>
                  <p>
                    Payda değeri sıfır olan rasyolarda sonuç otomatik olarak
                    0.0000 gösterilir.
                  </p>
                </div>
              </div>

              <div className="mini-info-card">
                <div className="mini-icon">✅</div>
                <div className="mini-info-text">
                  <h4>Model Girdisi</h4>
                  <p>
                    Hesaplanan rasyolar hibrit makine öğrenmesi modeline giriş
                    değişkeni olarak gönderilecektir.
                  </p>
                </div>
              </div>
            </div>

            <div className="card full-width-card">
              <div className="data-card-header">
                <div>
                  <h2>Rasyo Hesaplama</h2>
                  <p className="description">
                    Girilen finansal tablo kalemlerine göre hesaplanan rasyolar
                    aşağıda listelenmiştir.
                  </p>
                </div>

                <button className="secondary-button" onClick={goBackToDataEntry}>
                  ← VERİ GİRİŞİNE DÖN
                </button>
              </div>

              <div className="selection-banner">
                <div>
                  <strong>Hile Türü</strong>
                  <span>
                    {selectedFraud.label}: {selectedFraud.fullName}
                  </span>
                </div>

                <div>
                  <strong>Model</strong>
                  <span>{selectedFraud.modelName}</span>
                </div>
              </div>

              <div className="ratio-table">
                <div className="ratio-table-header">
                  <span>Rasyo</span>
                  <span>Formül</span>
                  <span>Sonuç</span>
                </div>

                {calculatedRatios.map((ratio) => (
                  <div className="ratio-table-row" key={ratio.code}>
                    <span className="ratio-code">{ratio.code}</span>
                    <span>{ratio.formula}</span>
                    <span className="ratio-value">
                      {formatRatio(ratio.value)}
                    </span>
                  </div>
                ))}
              </div>

              <button
                className="primary-button calculate-button"
                onClick={goToFinalResult}
              >
                SONUÇ EKRANINA GEÇ <span>→</span>
              </button>
            </div>
          </section>
        )}

        {currentStep === 4 && (
          <section className="full-page-section">
            <div className="result-report-header">
              <div>
                <span className="report-eyebrow">ANALYSIS REPORT</span>
                <h2>Sonuç Ekranı</h2>
                <p>
                  Bu ekran, girilen tekil şirket verileri üzerinden hesaplanan
                  finansal rasyoları, hibrit model tahminini ve seçilen modelin
                  test veri seti performansını rapor formatında sunar.
                </p>
              </div>

              <button className="secondary-button" onClick={goBackToDataEntry}>
                ← VERİ GİRİŞİNE DÖN
              </button>
            </div>

            <div className="executive-summary-grid">
              <div className="executive-summary-card">
                <span>Hile Türü</span>
                <strong>
                  {selectedFraud.label}: {selectedFraud.fullName}
                </strong>
              </div>

              <div className="executive-summary-card">
                <span>Kullanılan Model</span>
                <strong>{selectedFraud.modelName}</strong>
              </div>

              <div className="executive-summary-card">
                <span>Hesaplanan Rasyo Sayısı</span>
                <strong>{calculatedRatios.length}</strong>
              </div>

              <div className="executive-summary-card">
                <span>Analiz Durumu</span>
                <strong>
                  {backendLoading
                    ? "Tahmin hesaplanıyor"
                    : backendResult
                    ? "Model tahmini üretildi"
                    : "Beklemede"}
                </strong>
              </div>
            </div>

            <div className="result-two-column-layout">
              <div className="institutional-panel prediction-panel">
                <div className="panel-heading">
                  <div>
                    <span className="section-kicker">
                      INDIVIDUAL COMPANY OUTPUT
                    </span>
                    <h3>Tekil Şirket Tahmini</h3>
                  </div>

                  <div
                    className={`risk-badge ${
                      backendResult?.prediction === 1 ? "risk-high" : "risk-low"
                    }`}
                  >
                    {backendResult?.riskLevel ?? "Beklemede"}
                  </div>
                </div>

                <div className="main-prediction-box">
                  <span>Tahmin Sonucu</span>
                  <strong>
                    {backendLoading
                      ? "Hesaplanıyor..."
                      : backendResult?.predictionLabel ?? "Beklemede"}
                  </strong>
                  <p>
                    {backendResult
                      ? "Bu sonuç yalnızca kullanıcı tarafından girilen tekil şirket verisine aittir."
                      : "Sonuç ekranına geçildiğinde Python FastAPI backend üzerinden seçilen hibrit model çalıştırılır."}
                  </p>
                </div>

                <div className="prediction-metrics-grid">
                  <div>
                    <span>Hile Olasılığı</span>
                    <strong>
                      {backendResult?.fraudProbability !== null &&
                      backendResult?.fraudProbability !== undefined
                        ? formatPercent(backendResult.fraudProbability)
                        : "--"}
                    </strong>
                  </div>

                  <div>
                    <span>Güven Skoru</span>
                    <strong>
                      {backendResult?.confidenceScore !== null &&
                      backendResult?.confidenceScore !== undefined
                        ? formatPercent(backendResult.confidenceScore)
                        : "--"}
                    </strong>
                  </div>
                </div>

                {backendError && (
                  <div className="professional-alert error-alert">
                    {backendError}
                  </div>
                )}

                {backendResult && (
                  <div className="professional-alert success-alert">
                    <strong>Backend bağlantısı başarılı.</strong> Hibrit model
                    yanıtı alınmış ve tekil şirket tahmini üretilmiştir.
                  </div>
                )}
              </div>

              <div className="institutional-panel performance-panel">
                <div className="panel-heading">
                  <div>
                    <span className="section-kicker">MODEL VALIDATION</span>
                    <h3>Modelin Test Veri Seti Performansı</h3>
                  </div>
                </div>

                <p className="panel-note">
                  Bu metrikler, seçilen hibrit modelin eğitim süreci sonunda
                  ayrılmış test veri seti üzerinde raporlanan genel performans
                  değerleridir. Kullanıcının tekil şirket girdisine göre
                  değişmez.
                </p>

                <div className="performance-grid">
                  <div className="performance-item">
                    <span>Accuracy</span>
                    <strong>
                      {formatPercent(backendResult?.metrics?.accuracy)}
                    </strong>
                  </div>

                  <div className="performance-item">
                    <span>Precision</span>
                    <strong>
                      {formatPercent(backendResult?.metrics?.precision)}
                    </strong>
                  </div>

                  <div className="performance-item">
                    <span>Recall</span>
                    <strong>
                      {formatPercent(backendResult?.metrics?.recall)}
                    </strong>
                  </div>

                  <div className="performance-item">
                    <span>F1-Score</span>
                    <strong>
                      {formatPercent(backendResult?.metrics?.f1_score)}
                    </strong>
                  </div>

                  <div className="performance-item performance-item-wide">
                    <span>AppGear</span>
                    <strong>
                      {formatPercent(backendResult?.metrics?.appgear)}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="institutional-panel ratios-report-panel">
              <div className="result-section-title">
                <div>
                  <span className="section-kicker">
                    COMPUTED FINANCIAL RATIOS
                  </span>
                  <h3>Hesaplanan Finansal Rasyolar</h3>
                  <p>
                    Aşağıdaki tablo, kullanıcı tarafından girilen finansal tablo
                    kalemlerinden elde edilen rasyo sonuçlarını göstermektedir.
                  </p>
                </div>

                <button
                  className="primary-button compact-csv-button"
                  onClick={downloadCsvReport}
                >
                  CSV RAPORU İNDİR <span>↓</span>
                </button>
              </div>

              <div className="ratio-table final-ratio-table">
                <div className="ratio-table-header">
                  <span>Rasyo</span>
                  <span>Formül</span>
                  <span>Sonuç</span>
                </div>

                {calculatedRatios.map((ratio) => (
                  <div className="ratio-table-row" key={ratio.code}>
                    <span className="ratio-code">{ratio.code}</span>
                    <span>{ratio.formula}</span>
                    <span className="ratio-value">
                      {formatRatio(ratio.value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;