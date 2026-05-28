import SemiAgentic from "./components/SemiAgentic";
import { useState } from "react";
import "./App.css";

const translations = {
  tr: {
    appTitle: "HİLE TESPİT SİSTEMİ",
    brandTitle: "HİLE ANALİTİĞİ",
    brandSubtitle: "KARAR PLATFORMU",
    languageLabel: "Dil Seçimi",
    welcomeTitle: "👋 Hoş Geldiniz!",
    welcomeText:
      "Bu modül, finansal verilerde hile tespiti için makine öğrenmesi modellerini kullanır ve olası riskleri analiz ederek karar süreçlerini destekler.",
    fraudDetectionSystem: "☑ HİLE TESPİT SİSTEMİ",
    semiAgenticSystem: "⚙ YARI-AJAN DESTEKLİ HİLE TESPİT SİSTEMİ",
    infoTitle: "ⓘ Bilgi",
    infoText:
      "Bu platform, kullanıcı tarafından girilen finansal tablo kalemleri üzerinden rasyoları hesaplamak, hibrit makine öğrenmesi modelini çalıştırmak ve hile riskini değerlendirmek amacıyla tasarlanmıştır.",
    modelSelection: "Model Seçimi",
    dataEntry: "Veri Girişi",
    ratioCalculation: "Rasyo Hesaplama",
    resultScreen: "Sonuç Ekranı",
    fraudDescription: "Hile Türü Açıklaması",
    automaticModelAssignment: "Otomatik Model Ataması",
    nextStep: "Sonraki Adım",
    nextStepText:
      "Seçim tamamlandıktan sonra kullanıcı “VERİLERİ GİR” butonu ile finansal tablo kalemlerini gireceği ekrana geçer.",
    modelSelectionDescription:
      "Hile türünü seçin. İlgili hibrit model otomatik olarak atanır.",
    fraudType: "Hile Türü",
    assignedModel: "Atanan Model",
    automaticModelSelection: "Otomatik Model Seçimi",
    enterData: "VERİLERİ GİR",
    financialDataEntry: "Finansal Veri Girişi",
    financialDataEntryText:
      "Seçilen hile türüne ait finansal tablo kalemlerinin değerleri ilgili alanlara girilir.",
    numericFormat: "Sayısal Format",
    numericFormatText:
      "Tüm değerler sayısal olmalıdır. Ondalık ayracı kullanılmamalıdır.",
    ratioCalculationInfo:
      "“RASYOLARI HESAPLA” butonu ile değerler ilgili rasyolara dönüştürülür.",
    dataEntryDescription:
      "Seçilen hile türüne göre gerekli finansal tablo kalemlerini aşağıdaki alanlara girin.",
    back: "← GERİ DÖN",
    calculateRatios: "RASYOLARI HESAPLA",
    calculatedRatios: "Hesaplanan Rasyolar",
    calculatedRatiosText:
      "Finansal tablo kalemlerinden elde edilen rasyolar tablo halinde gösterilir.",
    zeroDivisionControl: "Sıfıra Bölme Kontrolü",
    zeroDivisionText:
      "Payda değeri sıfır olan rasyolarda sonuç otomatik olarak 0.0000 gösterilir.",
    modelInput: "Model Girdisi",
    modelInputText:
      "Hesaplanan rasyolar hibrit makine öğrenmesi modeline giriş değişkeni olarak gönderilecektir.",
    ratioScreenDescription:
      "Girilen finansal tablo kalemlerine göre hesaplanan rasyolar aşağıda listelenmiştir.",
    backToDataEntry: "← VERİ GİRİŞİNE DÖN",
    ratio: "Rasyo",
    formula: "Formül",
    result: "Sonuç",
    goToResult: "SONUÇ EKRANINA GEÇ",
    analysisReport: "ANALİZ RAPORU",
    resultDescription:
      "Bu ekran, girilen tekil şirket verileri üzerinden hesaplanan finansal rasyoları, hibrit model tahminini ve seçilen modelin test veri seti performansını rapor formatında sunar.",
    usedModel: "Kullanılan Model",
    model: "Model",
    ratioCount: "Hesaplanan Rasyo Sayısı",
    analysisStatus: "Analiz Durumu",
    predictionCalculating: "Tahmin hesaplanıyor",
    predictionGenerated: "Model tahmini üretildi",
    pending: "Beklemede",
    individualCompanyOutput: "TEKİL ŞİRKET ÇIKTISI",
    individualCompanyPrediction: "Tekil Şirket Tahmini",
    predictionResult: "Tahmin Sonucu",
    calculating: "Hesaplanıyor...",
    predictionNote:
      "Bu sonuç yalnızca kullanıcı tarafından girilen tekil şirket verisine aittir.",
    backendNote:
      "Sonuç ekranına geçildiğinde Python FastAPI backend üzerinden seçilen hibrit model çalıştırılır.",
    fraudProbability: "Hile Olasılığı",
    confidenceScore: "Güven Skoru",
    backendSuccessTitle: "Backend bağlantısı başarılı.",
    backendSuccessText:
      "Hibrit model yanıtı alınmış ve tekil şirket tahmini üretilmiştir.",
    modelValidation: "MODEL DOĞRULAMA",
    testPerformance: "Modelin Test Veri Seti Performansı",
    testPerformanceNote:
      "Bu metrikler, seçilen hibrit modelin eğitim süreci sonunda ayrılmış test veri seti üzerinde raporlanan genel performans değerleridir. Kullanıcının tekil şirket girdisine göre değişmez.",
    computedFinancialRatios: "HESAPLANAN FİNANSAL RASYOLAR",
    computedFinancialRatiosTitle: "Hesaplanan Finansal Rasyolar",
    computedFinancialRatiosText:
      "Aşağıdaki tablo, kullanıcı tarafından girilen finansal tablo kalemlerinden elde edilen rasyo sonuçlarını göstermektedir.",
    downloadCsv: "CSV RAPORU İNDİR",
    backendError:
      "Backend bağlantısı kurulamadı veya model tahmini üretilemedi. Python backend ve frontend aynı anda açık olmalı.",
    backendNoResponse: "Backend yanıt vermedi.",
    modelPredictionFailed: "Model tahmini üretilemedi.",
    generalInfo: "Genel Bilgi",
    status: "Durum",
    ratiosCalculated: "Rasyolar başarıyla hesaplandı",
    enteredItems: "Girilen Finansal Tablo Kalemleri",
    item: "Kalem",
    value: "Değer",
    singleCompanyPrediction: "Tekil Şirket Tahmini",
    riskLevel: "Risk Seviyesi",
    accuracy: "Doğruluk",
    precision: "Kesinlik",
    recall: "Duyarlılık",
    f1Score: "F1-Skoru",
    appGear: "AppGear",
  },

  en: {
    appTitle: "FRAUD DETECTION SYSTEM",
    brandTitle: "FRAUD ANALYTICS",
    brandSubtitle: "DECISION PLATFORM",
    languageLabel: "Language",
    welcomeTitle: "👋 Welcome!",
    welcomeText:
      "This module uses machine learning models to detect fraud in financial data and supports decision-making processes by analyzing potential risks.",
    fraudDetectionSystem: "☑ FRAUD DETECTION SYSTEM",
    semiAgenticSystem: "⚙ SEMI-AGENTIC FRAUD DETECTION SUPPORT SYSTEM",
    infoTitle: "ⓘ Information",
    infoText:
      "This platform is designed to calculate ratios from user-entered financial statement items, run the hybrid machine learning model, and evaluate fraud risk.",
    modelSelection: "Model Selection",
    dataEntry: "Data Entry",
    ratioCalculation: "Ratio Calculation",
    resultScreen: "Result Screen",
    fraudDescription: "Fraud Type Description",
    automaticModelAssignment: "Automatic Model Assignment",
    nextStep: "Next Step",
    nextStepText:
      "After the selection is completed, the user proceeds to the financial statement input screen by clicking the “ENTER DATA” button.",
    modelSelectionDescription:
      "Select the fraud type. The relevant hybrid model is assigned automatically.",
    fraudType: "Fraud Type",
    assignedModel: "Assigned Model",
    automaticModelSelection: "Automatic Model Selection",
    enterData: "ENTER DATA",
    financialDataEntry: "Financial Data Entry",
    financialDataEntryText:
      "The values of the financial statement items related to the selected fraud type are entered into the relevant fields.",
    numericFormat: "Numeric Format",
    numericFormatText:
      "All values must be numeric. Do not use decimal separators.",
    ratioCalculationInfo:
      "The values are converted into the relevant ratios by clicking the “CALCULATE RATIOS” button.",
    dataEntryDescription:
      "Enter the required financial statement items according to the selected fraud type.",
    back: "← BACK",
    calculateRatios: "CALCULATE RATIOS",
    calculatedRatios: "Calculated Ratios",
    calculatedRatiosText:
      "Ratios obtained from financial statement items are displayed in tabular format.",
    zeroDivisionControl: "Zero-Division Control",
    zeroDivisionText:
      "For ratios with a zero denominator, the result is automatically displayed as 0.0000.",
    modelInput: "Model Input",
    modelInputText:
      "The calculated ratios will be sent to the hybrid machine learning model as input variables.",
    ratioScreenDescription:
      "The ratios calculated from the entered financial statement items are listed below.",
    backToDataEntry: "← BACK TO DATA ENTRY",
    ratio: "Ratio",
    formula: "Formula",
    result: "Result",
    goToResult: "GO TO RESULT SCREEN",
    analysisReport: "ANALYSIS REPORT",
    resultDescription:
      "This screen presents the financial ratios calculated from the single-company input, the hybrid model prediction, and the selected model’s test-set performance in report format.",
    usedModel: "Model Used",
    model: "Model",
    ratioCount: "Number of Calculated Ratios",
    analysisStatus: "Analysis Status",
    predictionCalculating: "Prediction is being calculated",
    predictionGenerated: "Model prediction generated",
    pending: "Pending",
    individualCompanyOutput: "INDIVIDUAL COMPANY OUTPUT",
    individualCompanyPrediction: "Individual Company Prediction",
    predictionResult: "Prediction Result",
    calculating: "Calculating...",
    predictionNote:
      "This result belongs only to the single-company data entered by the user.",
    backendNote:
      "When the result screen is opened, the selected hybrid model is executed through the Python FastAPI backend.",
    fraudProbability: "Fraud Probability",
    confidenceScore: "Confidence Score",
    backendSuccessTitle: "Backend connection successful.",
    backendSuccessText:
      "The hybrid model response was received and the single-company prediction was generated.",
    modelValidation: "MODEL VALIDATION",
    testPerformance: "Model Test-Set Performance",
    testPerformanceNote:
      "These metrics represent the general performance values reported on the held-out test set after training the selected hybrid model. They do not change according to the user’s single-company input.",
    computedFinancialRatios: "COMPUTED FINANCIAL RATIOS",
    computedFinancialRatiosTitle: "Computed Financial Ratios",
    computedFinancialRatiosText:
      "The table below shows the ratio results obtained from the financial statement items entered by the user.",
    downloadCsv: "DOWNLOAD CSV REPORT",
    backendError:
      "Backend connection could not be established or the model prediction could not be generated. The Python backend and frontend must be running at the same time.",
    backendNoResponse: "Backend did not respond.",
    modelPredictionFailed: "Model prediction could not be generated.",
    generalInfo: "General Information",
    status: "Status",
    ratiosCalculated: "Ratios calculated successfully",
    enteredItems: "Entered Financial Statement Items",
    item: "Item",
    value: "Value",
    singleCompanyPrediction: "Single Company Prediction",
    riskLevel: "Risk Level",
    accuracy: "Accuracy",
    precision: "Precision",
    recall: "Recall",
    f1Score: "F1-Score",
    appGear: "AppGear",
  },
};

const fraudOptions = {
  fraud1: {
    label: {
      tr: "Birinci Hile",
      en: "First Fraud Type",
    },
    fullName: {
      tr: "Satışların Maliyeti / Stok Hilesi",
      en: "Cost of Sales / Inventory Fraud",
    },
    modelName: "Hybrid model_fraud1",
    description: {
      tr: "Brüt kârlılığı artırmak amacıyla satışların maliyetinin düşük gösterilmesi ve aynı tutarın stoklara ilave edilmesi.",
      en: "Understatement of cost of sales and addition of the same amount to inventories in order to increase gross profitability.",
    },
    modelExplanation: {
      tr: "Bu hile türü seçildiğinde sistem, satışların maliyeti ve stoklara ilişkin finansal rasyolar üzerinden çalışan hibrit modeli otomatik olarak atar.",
      en: "When this fraud type is selected, the system automatically assigns the hybrid model that operates on financial ratios related to cost of sales and inventories.",
    },
  },

  fraud2: {
    label: {
      tr: "İkinci Hile",
      en: "Second Fraud Type",
    },
    fullName: {
      tr: "Amortisman Giderleri Hilesi",
      en: "Depreciation Expense Fraud",
    },
    modelName: "Hybrid model_fraud2",
    description: {
      tr: "Dönem kârını artırmak amacıyla amortisman giderlerinin olması gerekenden eksik ayrılması.",
      en: "Understatement of depreciation expenses in order to increase period profit.",
    },
    modelExplanation: {
      tr: "Bu hile türü seçildiğinde sistem, amortisman giderleri ve dönem kârı ilişkisini dikkate alan hibrit modeli otomatik olarak atar.",
      en: "When this fraud type is selected, the system automatically assigns the hybrid model that considers the relationship between depreciation expenses and period profit.",
    },
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

const fieldTranslations = {
  "Nakit ve Nakit Benzerleri": "Cash and Cash Equivalents",
  "Ticari Alacaklar": "Trade Receivables",
  "İlişkili Taraflardan Ticari Alacaklar":
    "Trade Receivables from Related Parties",
  Stoklar: "Inventories",
  "Toplam Dönen Varlıklar": "Total Current Assets",
  "Maddi Duran Varlıklar": "Property, Plant and Equipment",
  "Önceki Maddi Duran Varlıklar": "Previous Property, Plant and Equipment",
  "Toplam Duran Varlıklar": "Total Non-Current Assets",
  "Toplam Varlıklar": "Total Assets",
  "Ticari Borçlar": "Trade Payables",
  "İlişkili Taraflara Ticari Borçlar": "Trade Payables to Related Parties",
  "Toplam Kısa Vadeli Yükümlülükler": "Total Current Liabilities",
  "Toplam Yükümlülükler": "Total Liabilities",
  "Net Dönem Karı/Zararı": "Net Profit/Loss for the Period",
  "Önceki Dönem Net Dönem Karı/Zararı":
    "Previous Period Net Profit/Loss",
  "Toplam Özkaynaklar": "Total Equity",
  "Toplam Kaynaklar": "Total Equity and Liabilities",
  Hasılat: "Revenue",
  "Satışların Maliyeti": "Cost of Sales",
  "Brüt Kar/Zarar": "Gross Profit/Loss",
  "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı":
    "Operating Profit/Loss Before Finance Income/Expenses",
  "Finansman Giderleri": "Finance Expenses",
  "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı":
    "Profit/Loss Before Tax from Continuing Operations",
  "Dönem Karı/Zararı": "Profit/Loss for the Period",
  "Faiz Giderleri (Ek Rapor)": "Interest Expenses (Supplementary Report)",
  "Esas Faaliyetlerden Diğer Giderler": "Other Operating Expenses",
  "Esas Faaliyet Karı": "Operating Profit",
  FAVÖK: "EBITDA",
  "Sürdürülen Faaliyetler Dönem Karı":
    "Profit for the Period from Continuing Operations",
};

const formulaTranslations = {
  "Toplam Yükümlülükler / Toplam Özkaynaklar":
    "Total Liabilities / Total Equity",
  "(Toplam Yükümlülükler - Nakit) / Toplam Özkaynaklar":
    "(Total Liabilities - Cash) / Total Equity",
  "Toplam Varlıklar / Toplam Özkaynaklar": "Total Assets / Total Equity",
  "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı / Faiz Giderleri":
    "Operating Profit/Loss Before Finance Income/Expenses / Interest Expenses",
  "Toplam Kısa Vadeli Yükümlülükler / Toplam Özkaynaklar":
    "Total Current Liabilities / Total Equity",
  "Toplam Dönen Varlıklar / Toplam Kısa Vadeli Yükümlülükler":
    "Total Current Assets / Total Current Liabilities",
  "(Toplam Dönen Varlıklar - Stoklar) / Toplam Kısa Vadeli Yükümlülükler":
    "(Total Current Assets - Inventories) / Total Current Liabilities",
  "Nakit ve Nakit Benzerleri / Toplam Kısa Vadeli Yükümlülükler":
    "Cash and Cash Equivalents / Total Current Liabilities",
  "Finansman Geliri/Gideri Öncesi Faaliyet Karı/Zararı / Hasılat":
    "Operating Profit/Loss Before Finance Income/Expenses / Revenue",
  "Brüt Kar/Zarar / Hasılat": "Gross Profit/Loss / Revenue",
  "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı / Hasılat":
    "Profit/Loss Before Tax from Continuing Operations / Revenue",
  "Dönem Karı/Zararı / Toplam Özkaynaklar":
    "Profit/Loss for the Period / Total Equity",
  "Dönem Karı/Zararı / Toplam Kaynaklar":
    "Profit/Loss for the Period / Total Equity and Liabilities",
  "Sürdürülen Faaliyetler Vergi Öncesi Karı/Zararı / Finansman Giderleri":
    "Profit/Loss Before Tax from Continuing Operations / Finance Expenses",
  "İlişkili Taraflardan Ticari Alacaklar / Ticari Alacaklar":
    "Trade Receivables from Related Parties / Trade Receivables",
  "İlişkili Taraflara Ticari Borçlar / Ticari Borçlar":
    "Trade Payables to Related Parties / Trade Payables",
  "Maddi Duran Varlıklar / Toplam Özkaynaklar":
    "Property, Plant and Equipment / Total Equity",
  "Satışların Maliyeti / Stoklar": "Cost of Sales / Inventories",
  "Hasılat / Ticari Alacaklar": "Revenue / Trade Receivables",
  "Hasılat / Toplam Varlıklar": "Revenue / Total Assets",
  "Hasılat / Toplam Özkaynaklar": "Revenue / Total Equity",
  "Hasılat / Maddi Duran Varlıklar":
    "Revenue / Property, Plant and Equipment",
  "(Vergi Öncesi Kar - Esas Faaliyet Karı) / Maddi Duran Varlıklar":
    "(Profit Before Tax - Operating Profit) / Property, Plant and Equipment",
  "(Vergi Öncesi Kar - Esas Faaliyet Karı) / Toplam Varlıklar":
    "(Profit Before Tax - Operating Profit) / Total Assets",
  "Dönem Karı/Zararı / Maddi Duran Varlıklar":
    "Profit/Loss for the Period / Property, Plant and Equipment",
  "Esas Faaliyet Karı / Hasılat": "Operating Profit / Revenue",
  "Esas Faaliyetlerden Diğer Giderler / Hasılat":
    "Other Operating Expenses / Revenue",
  "Vergi Öncesi Kar / Esas Faaliyet Karı":
    "Profit Before Tax / Operating Profit",
  "Esas Faaliyet Karı / Toplam Varlıklar":
    "Operating Profit / Total Assets",
  "Net Dönem Kârı değişimi / Maddi Duran Varlık değişimi":
    "Change in Net Profit / Change in Property, Plant and Equipment",
  "Sürdürülen Faaliyetler Dönem Karı / Toplam Özkaynaklar":
    "Profit from Continuing Operations / Total Equity",
  "FAVÖK / Toplam Duran Varlıklar": "EBITDA / Total Non-Current Assets",
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

function translateField(fieldName, language) {
  if (language === "tr") {
    return fieldName;
  }

  return fieldTranslations[fieldName] || fieldName;
}

function translateFormula(formula, language) {
  if (language === "tr") {
    return formula;
  }

  return formulaTranslations[formula] || formula;
}

function translateBackendText(value, language) {
  if (!value) {
    return language === "tr" ? "Beklemede" : "Pending";
  }

  if (language === "tr") {
    return value;
  }

  const normalized = String(value).toLowerCase();

  if (normalized.includes("hileli")) return "Fraudulent";
  if (normalized.includes("hilesiz")) return "Non-Fraudulent";
  if (normalized.includes("yüksek")) return "High Risk";
  if (normalized.includes("düşük")) return "Low Risk";
  if (normalized.includes("orta")) return "Medium Risk";
  if (normalized.includes("beklemede")) return "Pending";

  return value;
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
  const [language, setLanguage] = useState("tr");
  const [activeModule, setActiveModule] = useState("fraud");
  const [fraudType, setFraudType] = useState("fraud1");
  const [currentStep, setCurrentStep] = useState(1);
  const [formValues, setFormValues] = useState({});
  const [calculatedRatios, setCalculatedRatios] = useState([]);
  const [backendResult, setBackendResult] = useState(null);
  const [backendLoading, setBackendLoading] = useState(false);
  const [backendError, setBackendError] = useState("");

  const t = translations[language];
  const selectedFraud = fraudOptions[fraudType];
  const selectedFields = inputFields[fraudType];

  function getFraudDisplayName(option) {
    return `${option.label[language]}: ${option.fullName[language]}`;
  }

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
      const response = await fetch("https://fraudlens-backend-tkse.onrender.com/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(t.backendNoResponse);
      }

      const data = await response.json();

      if (data.status !== "success") {
        throw new Error(data.message || t.modelPredictionFailed);
      }

      setBackendResult(data);
    } catch (error) {
      setBackendError(t.backendError);
    } finally {
      setBackendLoading(false);
      setCurrentStep(4);
    }
  }

  function downloadCsvReport() {
    const rows = [];

    rows.push([t.generalInfo, t.item, t.value]);
    rows.push([t.generalInfo, t.fraudType, getFraudDisplayName(selectedFraud)]);
    rows.push([t.generalInfo, t.model, selectedFraud.modelName]);
    rows.push([t.generalInfo, t.status, t.ratiosCalculated]);

    if (backendResult) {
      rows.push([
        t.singleCompanyPrediction,
        t.predictionResult,
        translateBackendText(backendResult.predictionLabel, language),
      ]);
      rows.push([
        t.singleCompanyPrediction,
        t.riskLevel,
        translateBackendText(backendResult.riskLevel, language),
      ]);
      rows.push([
        t.singleCompanyPrediction,
        t.fraudProbability,
        backendResult.fraudProbability ?? "",
      ]);
      rows.push([
        t.singleCompanyPrediction,
        t.confidenceScore,
        backendResult.confidenceScore ?? "",
      ]);
      rows.push([
        t.testPerformance,
        t.accuracy,
        backendResult.metrics?.accuracy ?? "",
      ]);
      rows.push([
        t.testPerformance,
        t.precision,
        backendResult.metrics?.precision ?? "",
      ]);
      rows.push([
        t.testPerformance,
        t.recall,
        backendResult.metrics?.recall ?? "",
      ]);
      rows.push([
        t.testPerformance,
        t.f1Score,
        backendResult.metrics?.f1_score ?? "",
      ]);
      rows.push([
        t.testPerformance,
        t.appGear,
        backendResult.metrics?.appgear ?? "",
      ]);
    }

    rows.push([]);
    rows.push([t.enteredItems, t.item, t.value]);

    selectedFields.forEach((fieldName) => {
      rows.push([
        t.enteredItems,
        translateField(fieldName, language),
        formValues[fieldName] ?? "0",
      ]);
    });

    rows.push([]);
    rows.push([t.calculatedRatios, t.ratio, t.formula, t.result]);

    calculatedRatios.forEach((ratio) => {
      rows.push([
        t.calculatedRatios,
        ratio.code,
        translateFormula(ratio.formula, language),
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
      language === "tr"
        ? fraudType === "fraud1"
          ? "fraud1_model_sonuc_raporu.csv"
          : "fraud2_model_sonuc_raporu.csv"
        : fraudType === "fraud1"
        ? "fraud1_model_result_report.csv"
        : "fraud2_model_result_report.csv";

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
            <h2>{t.brandTitle}</h2>
            <p>{t.brandSubtitle}</p>
          </div>
        </div>

        <div className="language-switch-card">
          <span>{t.languageLabel}</span>

          <div className="language-toggle">
            <button
              type="button"
              className={language === "tr" ? "selected-language" : ""}
              onClick={() => setLanguage("tr")}
            >
              TR
            </button>

            <button
              type="button"
              className={language === "en" ? "selected-language" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>

        <div className="welcome-card">
          <h3>{t.welcomeTitle}</h3>
          <p>{t.welcomeText}</p>
        </div>

        <div className="side-menu">
          <button
            type="button"
            className={`side-button ${activeModule === "fraud" ? "active" : ""}`}
            onClick={() => setActiveModule("fraud")}
          >
            {t.fraudDetectionSystem}
          </button>

          <button
            type="button"
            className={`side-button ${
              activeModule === "semi-agentic" ? "active" : ""
            }`}
            onClick={() => setActiveModule("semi-agentic")}
          >
            {t.semiAgenticSystem}
          </button>
        </div>

        <div className="small-info-card">
          <h4>{t.infoTitle}</h4>
          <p>{t.infoText}</p>
        </div>
      </aside>

      <main className="main">
        {activeModule === "semi-agentic" ? (
          <SemiAgentic language={language} />
        ) : (
          <>
            <header className="header">
              <h1>{t.appTitle}</h1>
            </header>

            <section className="stepper four-stepper">
              <div
                className={`step ${
                  currentStep === 1
                    ? "active"
                    : currentStep > 1
                    ? "completed"
                    : ""
                }`}
              >
                <span>{currentStep > 1 ? "✓" : "1"}</span>
                <p>{t.modelSelection}</p>
              </div>

              <div className="step-separator">›</div>

              <div
                className={`step ${
                  currentStep === 2
                    ? "active"
                    : currentStep > 2
                    ? "completed"
                    : ""
                }`}
              >
                <span>{currentStep > 2 ? "✓" : "2"}</span>
                <p>{t.dataEntry}</p>
              </div>

              <div className="step-separator">›</div>

              <div
                className={`step ${
                  currentStep === 3
                    ? "active"
                    : currentStep > 3
                    ? "completed"
                    : ""
                }`}
              >
                <span>{currentStep > 3 ? "✓" : "3"}</span>
                <p>{t.ratioCalculation}</p>
              </div>

              <div className="step-separator">›</div>

              <div className={`step ${currentStep === 4 ? "active" : ""}`}>
                <span>4</span>
                <p>{t.resultScreen}</p>
              </div>
            </section>

            {currentStep === 1 && (
              <section className="full-page-section">
                <div className="top-info-grid horizontal-info-grid">
                  <div className="mini-info-card">
                    <div className="mini-icon">📌</div>
                    <div className="mini-info-text">
                      <h4>{t.fraudDescription}</h4>
                      <p>{selectedFraud.description[language]}</p>
                    </div>
                  </div>

                  <div className="mini-info-card">
                    <div className="mini-icon">⚙</div>
                    <div className="mini-info-text">
                      <h4>{t.automaticModelAssignment}</h4>
                      <p>{selectedFraud.modelExplanation[language]}</p>
                    </div>
                  </div>

                  <div className="mini-info-card">
                    <div className="mini-icon">✅</div>
                    <div className="mini-info-text">
                      <h4>{t.nextStep}</h4>
                      <p>{t.nextStepText}</p>
                    </div>
                  </div>
                </div>

                <div className="card full-width-card">
                  <h2>{t.modelSelection}</h2>

                  <p className="description">{t.modelSelectionDescription}</p>

                  <div className="fraud-choice-area">
                    <h3>{t.fraudType}</h3>

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
                              <strong>{option.label[language]}</strong>
                              <p>{option.fullName[language]}</p>
                            </div>
                          </div>

                          <div className="fraud-choice-model">
                            <span>{t.assignedModel}</span>
                            <b>{option.modelName}</b>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="selected-model-box">
                    <span>{t.automaticModelSelection}</span>
                    <strong>{selectedFraud.modelName}</strong>
                  </div>

                  <button className="primary-button" onClick={goToDataEntry}>
                    {t.enterData} <span>→</span>
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
                      <h4>{t.financialDataEntry}</h4>
                      <p>{t.financialDataEntryText}</p>
                    </div>
                  </div>

                  <div className="mini-info-card">
                    <div className="mini-icon">123</div>
                    <div className="mini-info-text">
                      <h4>{t.numericFormat}</h4>
                      <p>{t.numericFormatText}</p>
                    </div>
                  </div>

                  <div className="mini-info-card">
                    <div className="mini-icon">🎯</div>
                    <div className="mini-info-text">
                      <h4>{t.ratioCalculation}</h4>
                      <p>{t.ratioCalculationInfo}</p>
                    </div>
                  </div>
                </div>

                <div className="card full-width-card">
                  <div className="data-card-header">
                    <div>
                      <h2>{t.dataEntry}</h2>
                      <p className="description">{t.dataEntryDescription}</p>
                    </div>

                    <button
                      className="secondary-button"
                      onClick={goBackToModelSelection}
                    >
                      {t.back}
                    </button>
                  </div>

                  <div className="selection-banner">
                    <div>
                      <strong>{t.fraudType}</strong>
                      <span>{getFraudDisplayName(selectedFraud)}</span>
                    </div>

                    <div>
                      <strong>{t.model}</strong>
                      <span>{selectedFraud.modelName}</span>
                    </div>
                  </div>

                  <div className="field-list-expanded">
                    {selectedFields.map((fieldName) => (
                      <div className="field-row-expanded" key={fieldName}>
                        <label>{translateField(fieldName, language)}</label>

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
                    {t.calculateRatios} <span>→</span>
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
                      <h4>{t.calculatedRatios}</h4>
                      <p>{t.calculatedRatiosText}</p>
                    </div>
                  </div>

                  <div className="mini-info-card">
                    <div className="mini-icon">0.0</div>
                    <div className="mini-info-text">
                      <h4>{t.zeroDivisionControl}</h4>
                      <p>{t.zeroDivisionText}</p>
                    </div>
                  </div>

                  <div className="mini-info-card">
                    <div className="mini-icon">✅</div>
                    <div className="mini-info-text">
                      <h4>{t.modelInput}</h4>
                      <p>{t.modelInputText}</p>
                    </div>
                  </div>
                </div>

                <div className="card full-width-card">
                  <div className="data-card-header">
                    <div>
                      <h2>{t.ratioCalculation}</h2>
                      <p className="description">{t.ratioScreenDescription}</p>
                    </div>

                    <button
                      className="secondary-button"
                      onClick={goBackToDataEntry}
                    >
                      {t.backToDataEntry}
                    </button>
                  </div>

                  <div className="selection-banner">
                    <div>
                      <strong>{t.fraudType}</strong>
                      <span>{getFraudDisplayName(selectedFraud)}</span>
                    </div>

                    <div>
                      <strong>{t.model}</strong>
                      <span>{selectedFraud.modelName}</span>
                    </div>
                  </div>

                  <div className="ratio-table">
                    <div className="ratio-table-header">
                      <span>{t.ratio}</span>
                      <span>{t.formula}</span>
                      <span>{t.result}</span>
                    </div>

                    {calculatedRatios.map((ratio) => (
                      <div className="ratio-table-row" key={ratio.code}>
                        <span className="ratio-code">{ratio.code}</span>
                        <span>{translateFormula(ratio.formula, language)}</span>
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
                    {t.goToResult} <span>→</span>
                  </button>
                </div>
              </section>
            )}

            {currentStep === 4 && (
              <section className="full-page-section">
                <div className="result-report-header">
                  <div>
                    <span className="report-eyebrow">{t.analysisReport}</span>
                    <h2>{t.resultScreen}</h2>
                    <p>{t.resultDescription}</p>
                  </div>

                  <button
                    className="secondary-button"
                    onClick={goBackToDataEntry}
                  >
                    {t.backToDataEntry}
                  </button>
                </div>

                <div className="executive-summary-grid">
                  <div className="executive-summary-card">
                    <span>{t.fraudType}</span>
                    <strong>{getFraudDisplayName(selectedFraud)}</strong>
                  </div>

                  <div className="executive-summary-card">
                    <span>{t.usedModel}</span>
                    <strong>{selectedFraud.modelName}</strong>
                  </div>

                  <div className="executive-summary-card">
                    <span>{t.ratioCount}</span>
                    <strong>{calculatedRatios.length}</strong>
                  </div>

                  <div className="executive-summary-card">
                    <span>{t.analysisStatus}</span>
                    <strong>
                      {backendLoading
                        ? t.predictionCalculating
                        : backendResult
                        ? t.predictionGenerated
                        : t.pending}
                    </strong>
                  </div>
                </div>

                <div className="result-two-column-layout">
                  <div className="institutional-panel prediction-panel">
                    <div className="panel-heading">
                      <div>
                        <span className="section-kicker">
                          {t.individualCompanyOutput}
                        </span>
                        <h3>{t.individualCompanyPrediction}</h3>
                      </div>

                      <div
                        className={`risk-badge ${
                          backendResult?.prediction === 1
                            ? "risk-high"
                            : "risk-low"
                        }`}
                      >
                        {translateBackendText(backendResult?.riskLevel, language)}
                      </div>
                    </div>

                    <div className="main-prediction-box">
                      <span>{t.predictionResult}</span>
                      <strong>
                        {backendLoading
                          ? t.calculating
                          : translateBackendText(
                              backendResult?.predictionLabel,
                              language
                            )}
                      </strong>
                      <p>{backendResult ? t.predictionNote : t.backendNote}</p>
                    </div>

                    <div className="prediction-metrics-grid">
                      <div>
                        <span>{t.fraudProbability}</span>
                        <strong>
                          {backendResult?.fraudProbability !== null &&
                          backendResult?.fraudProbability !== undefined
                            ? formatPercent(backendResult.fraudProbability)
                            : "--"}
                        </strong>
                      </div>

                      <div>
                        <span>{t.confidenceScore}</span>
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
                        <strong>{t.backendSuccessTitle}</strong>{" "}
                        {t.backendSuccessText}
                      </div>
                    )}
                  </div>

                  <div className="institutional-panel performance-panel">
                    <div className="panel-heading">
                      <div>
                        <span className="section-kicker">
                          {t.modelValidation}
                        </span>
                        <h3>{t.testPerformance}</h3>
                      </div>
                    </div>

                    <p className="panel-note">{t.testPerformanceNote}</p>

                    <div className="performance-grid">
                      <div className="performance-item">
                        <span>{t.accuracy}</span>
                        <strong>
                          {formatPercent(backendResult?.metrics?.accuracy)}
                        </strong>
                      </div>

                      <div className="performance-item">
                        <span>{t.precision}</span>
                        <strong>
                          {formatPercent(backendResult?.metrics?.precision)}
                        </strong>
                      </div>

                      <div className="performance-item">
                        <span>{t.recall}</span>
                        <strong>
                          {formatPercent(backendResult?.metrics?.recall)}
                        </strong>
                      </div>

                      <div className="performance-item">
                        <span>{t.f1Score}</span>
                        <strong>
                          {formatPercent(backendResult?.metrics?.f1_score)}
                        </strong>
                      </div>

                      <div className="performance-item performance-item-wide">
                        <span>{t.appGear}</span>
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
                        {t.computedFinancialRatios}
                      </span>
                      <h3>{t.computedFinancialRatiosTitle}</h3>
                      <p>{t.computedFinancialRatiosText}</p>
                    </div>

                    <button
                      className="primary-button compact-csv-button"
                      onClick={downloadCsvReport}
                    >
                      {t.downloadCsv} <span>↓</span>
                    </button>
                  </div>

                  <div className="ratio-table final-ratio-table">
                    <div className="ratio-table-header">
                      <span>{t.ratio}</span>
                      <span>{t.formula}</span>
                      <span>{t.result}</span>
                    </div>

                    {calculatedRatios.map((ratio) => (
                      <div className="ratio-table-row" key={ratio.code}>
                        <span className="ratio-code">{ratio.code}</span>
                        <span>{translateFormula(ratio.formula, language)}</span>
                        <span className="ratio-value">
                          {formatRatio(ratio.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;