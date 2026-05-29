import { useState, useRef } from "react";

function SemiAgentic({ language = "tr" }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  const [previewData, setPreviewData] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");

  const [analystInstruction, setAnalystInstruction] = useState("");
  const analystInstructionRef = useRef("");
  const [analystLoading, setAnalystLoading] = useState(false);
  const [analystError, setAnalystError] = useState("");
  const [analystReport, setAnalystReport] = useState(null);

  const [featureLoading, setFeatureLoading] = useState(false);
  const [featureError, setFeatureError] = useState("");
  const [featureReport, setFeatureReport] = useState(null);

  const [optimizerLoading, setOptimizerLoading] = useState(false);
  const [optimizerError, setOptimizerError] = useState("");
  const [optimizerReport, setOptimizerReport] = useState(null);

  const [xaiLoading, setXaiLoading] = useState(false);
  const [xaiError, setXaiError] = useState("");
  const [xaiReport, setXaiReport] = useState(null);

  const text = {
    tr: {
      layer: "Yarı-Ajan Destek Katmanı",
      title: "Yarı-Ajan Destekli Hile Analiz Süreci",
      description:
        "Bu modül, yüklenen veri setini adım adım analiz ederek veri inceleme, özellik seçimi, model optimizasyonu ve açıklanabilir karar destek raporu üretmek için tasarlanmıştır.",
      upload: "Veri Yükleme",
      dataAnalyst: "Veri Analisti",
      featureSelector: "Özellik Seçici",
      modelOptimizer: "Model Optimize Edici",
      xaiAgent: "Açıklanabilirlik Ajanı",
      pending: "Beklemede",
      active: "Aktif",
      completed: "Tamamlandı",

      uploadTitle: "0. Veri Yükleme",
      uploadDescription:
        "CSV veri setini yükleyerek yarı-ajan analiz sürecini başlatın. Dosya yüklendikten sonra veri önizleme ve pipeline başlatma adımları aktifleşecektir.",

      analystTitle: "1. Veri Analisti",
      analystDescription:
        "Bu aşamada veri seti istatistiksel olarak incelenir; eksik değerler, sınıf dengesi, aykırı gözlemler, korelasyonlar ve veri kalitesi problemleri değerlendirilir.",
      analystInstruction: "Analiz Odağı",
      analystPlaceholder:
        "Örn: Eksik değerler, sınıf dengesi, aykırı gözlemler veya korelasyon yapısı üzerine odaklan.",
      runAnalyst: "VERİ ANALİSTİNİ ÇALIŞTIR",
      analystLoading: "Veri analisti raporu üretiliyor...",
      analystReportTitle: "Veri Analisti Raporu",

      featureSelectorTitle: "2. Özellik Seçici",
      featureSelectorDescription:
        "Bu aşamada sistem hedef değişken ile ilişkili özellikleri, yüksek korelasyonlu tekrar eden değişkenleri ve modelleme için önerilen özellik alt kümesini değerlendirir.",
      featureSelectorReportTitle: "Özellik Seçici Raporu",
      runFeatureSelector: "ÖZELLİK SEÇİCİYİ ÇALIŞTIR",
      featureSelectorLoading: "Özellik seçici raporu üretiliyor...",
      selectedFeatures: "Seçilen Özellikler",
      correlationRanking: "Korelasyon Sıralaması",
      weakFeatures: "Zayıf Özellikler",
      redundantPairs: "Tekrarlı / Yüksek Korelasyonlu Özellik Çiftleri",
      recommendedRemoval: "Çıkarılması Önerilen Özellikler",
      selectionMethod: "Seçim Yöntemi",
      selectionThreshold: "Seçim Kriteri",
      totalNumericFeatures: "Toplam Sayısal Özellik",
      targetColumn: "Hedef Değişken",
      recommendedMethod: "Önerilen Yöntem",
      recommendedReason: "Öneri Gerekçesi",
      correlationFS: "Korelasyon Tabanlı Özellik Seçimi",
      rfeFS: "RFE",
      mrmrFS: "mRMR Esinli Özellik Seçimi",
      consensusSelectedFeatures: "Ortak Seçilen Özellikler",
      methodComparison: "Yöntem Karşılaştırması",
      kFeatures: "Seçilen Özellik Sayısı",
      method: "Yöntem",
      interpretability: "Yorumlanabilirlik",
      redundancyControl: "Tekrar Kontrolü",
      stability: "Kararlılık",
      thesisCompatibility: "Tez Uyumu",
      selectedFeatureCount: "Seçilen Özellik Sayısı",
      rank: "Sıra",
      relevance: "İlişki Gücü",
      redundancy: "Tekrar",
      mrmrScore: "mRMR Skoru",

      modelOptimizerTitle: "3. Model Optimize Edici",
      modelOptimizerDescription:
        "Bu aşamada hibrit modelleme mimarisi, eşik optimizasyonu, sınıf dengesizliği stratejisi, kalibrasyon ve nihai model önerisi değerlendirilir.",
      modelOptimizerReportTitle: "Model Optimize Edici Raporu",
      runModelOptimizer: "MODEL OPTİMİZE EDİCİYİ ÇALIŞTIR",
      modelOptimizerLoading: "Model optimize edici raporu üretiliyor...",
      recommendedArchitecture: "Önerilen Mimari",
      baselineModelComparison: "Temel Model Karşılaştırması",
      thresholdOptimization: "Eşik Optimizasyonu",
      classImbalanceStrategy: "Sınıf Dengesizliği Stratejisi",
      calibrationReliability: "Kalibrasyon ve Güvenilirlik",
      hyperparameterStrategy: "Hiperparametre Stratejisi",
      finalDecision: "Nihai Önerilen Pipeline",
      optimizerRecommendations: "Optimize Edici Önerileri",
      architectureName: "Mimari",
      metaLearner: "Meta Öğrenici",
      calibration: "Kalibrasyon",
      thresholdStrategy: "Eşik Stratejisi",
      preprocessing: "Ön İşleme",
      baseLearners: "Temel Öğreniciler",
      role: "Rol",
      strength: "Güçlü Yön",
      limitation: "Sınırlılık",
      defaultThreshold: "Varsayılan Eşik",
      optimizedThreshold: "Optimize Edilmiş Eşik",
      searchRange: "Arama Aralığı",
      searchStep: "Adım",
      diagnosis: "Tanı",
      strategy: "Strateji",
      purpose: "Amaç",
      searchType: "Arama Tipi",
      evaluatedParameters: "Değerlendirilen Parametreler",
      recommendedPipeline: "Önerilen Pipeline",
      summary: "Özet",
      model: "Model",
      testSetPerformance: "Test Veri Seti Performans Özeti",
      architecture: "Mimari",
      threshold: "Eşik",
      accuracy: "Doğruluk",
      precisionWeighted: "Ağırlıklı Kesinlik",
      recallWeighted: "Ağırlıklı Duyarlılık",
      f1Weighted: "Ağırlıklı F1",
      balancedAccuracy: "Dengeli Doğruluk",
      appGear: "AppGear",
      fraudPrecision: "Hile Sınıfı Kesinlik",
      fraudRecall: "Hile Sınıfı Duyarlılık",

      xaiTitle: "4. XAI / Açıklanabilirlik Ajanı",
      xaiDescription:
        "Bu aşamada model kararlarının açıklanabilirliği, etkili finansal oranlar ve analist destekli risk yorumları üretilir.",
      runXai: "XAI AJANINI ÇALIŞTIR",
      xaiLoading: "XAI raporu üretiliyor...",
      explainabilityMethod: "Açıklanabilirlik Yöntemi",
      xaiTopFeatures: "En Etkili Finansal Oranlar",
      xaiRiskNarrative: "Risk Anlatısı",
      xaiConfidence: "Güven Yorumu",
      xaiRecommendations: "XAI Önerileri",
      importanceProxy: "Önem",
      direction: "Yön",
      interpretation: "Yorum",

      modelOptimizerBackendError:
        "Backend bağlantısı kurulamadı veya model optimize edici raporu üretilemedi.",
      featureSelectorBackendError:
        "Backend bağlantısı kurulamadı veya özellik seçici raporu üretilemedi.",
      xaiBackendError:
        "Backend bağlantısı kurulamadı veya XAI raporu üretilemedi.",

      fileLabel: "CSV Dosyası",
      filePlaceholder: "Henüz dosya seçilmedi.",
      selectedFile: "Seçilen dosya",
      previewButton: "VERİ ÖNİZLEME",
      previewLoading: "Veri analiz ediliyor...",
      startButton: "ANALİZ SÜRECİNİ BAŞLAT",
      resetButton: "SIFIRLA",
      previousStage: "← Önceki Aşamaya Dön",
      downloadReport: "RAPORU İNDİR",
      completeAnalysis: "ANALİZİ TAMAMLA",
      newAnalysis: "YENİ ANALİZ BAŞLAT",
      pipelineCompletedTitle: "Analiz Süreci Tamamlandı",
      pipelineCompletedText:
        "Yarı-ajan analiz süreci başarıyla tamamlandı. Veri analizi, özellik seçimi, model optimizasyonu ve açıklanabilirlik raporu üretildi.",

      noteTitle: "Varsayılan Analiz Planı",
      noteText:
        "Kullanıcı özel talimat girmezse sistem veri inceleme, eksik değer kontrolü, aykırı değer analizi, özellik seçimi, model optimizasyonu ve açıklanabilirlik adımlarını varsayılan sırayla yürütecektir.",

      previewTitle: "Veri Önizleme Raporu",
      rowCount: "Satır Sayısı",
      columnCount: "Sütun Sayısı",
      numericColumnCount: "Sayısal Kolon Sayısı",
      duplicateRows: "Tekrarlı Satır",
      totalMissingValues: "Toplam Eksik Değer",
      hasClassColumn: "Class Kolonu",
      exists: "Var",
      notExists: "Yok",

      classDistribution: "Class Dağılımı",
      classLabel: "Sınıf",
      classDescription: "Açıklama",
      observationCount: "Gözlem Sayısı",
      nonFraud: "Hilesiz",
      fraud: "Hileli",

      columns: "Kolonlar",
      previewRows: "İlk 5 Satır",
      tableNote:
        "Önizleme tablosunda okunabilirlik için ilk 8 kolon gösterilmektedir.",

      nextStageTitle: "Sonraki Aşamaya Geç",
      nextStageText:
        "Veri önizleme raporunu kontrol ettikten sonra Veri Analisti aşamasına geçebilirsiniz.",

      outliers: "Aykırı Değerler",
      targetCorrelations: "Hedef Değişken Korelasyonları",
      recommendations: "Öneriler",

      datasetOverview: "1. Veri Seti Genel Görünümü",
      classBalance: "2. Sınıf Dengesi",
      missingValueAnalysis: "3. Eksik Değer Analizi",
      outlierDetection: "4. Aykırı Değer Tespiti",
      numericalFeatureSummary: "5. Sayısal Değişken Özeti",
      correlationAnalysis: "6. Hedef Değişken Korelasyon Analizi",
      redundancyAnalysis: "7. Özellik Tekrarı / Yüksek Korelasyon Analizi",
      preprocessingRecommendations: "8. Ön İşleme Önerileri",

      variable: "Değişken",
      feature: "Özellik",
      average: "Ortalama",
      stdDeviation: "Standart Sapma",
      min: "Min",
      max: "Maks",
      outlierCount: "Aykırı Gözlem Sayısı",
      correlation: "Korelasyon",
      absoluteCorrelation: "Mutlak Korelasyon",
      featureA: "Özellik A",
      featureB: "Özellik B",
      suggestion: "Öneri",

      noFileWarning: "Lütfen önce bir CSV dosyası seçin.",
      backendError:
        "Backend bağlantısı kurulamadı veya CSV analizi üretilemedi.",
      analystBackendError:
        "Backend bağlantısı kurulamadı veya veri analisti raporu üretilemedi.",

      approveDataAnalystTitle: "Veri Analisti Aşamasını Onayla",
      approveDataAnalystText:
        "Veri analisti raporunu kontrol ettikten sonra özellik seçimi aşamasına geçebilirsiniz.",
      approveDataAnalystButton: "ONAYLA → ÖZELLİK SEÇİCİ",
      approveFeatureTitle: "Özellik Seçimi Aşamasını Onayla",
      approveFeatureText:
        "Özellik seçimi raporunu kontrol ettikten sonra model optimize edici aşamasına geçebilirsiniz.",
      approveFeatureButton: "ONAYLA → MODEL OPTİMİZE EDİCİ",
      approveOptimizerTitle: "Model Optimize Edici Aşamasını Onayla",
      approveOptimizerText:
        "Model optimizasyon raporunu kontrol ettikten sonra XAI / açıklanabilirlik ajanı aşamasına geçebilirsiniz.",
      approveOptimizerButton: "ONAYLA → XAI AJANI",

      featureSelectorIntro:
        "Bu aşamada korelasyon tabanlı özellik seçimi, RFE ve mRMR esinli özellik seçimi yöntemleri ayrı ayrı çalıştırılacak; ardından yöntem karşılaştırması ve önerilen nihai strateji üretilecektir.",
      missingValueSentence:
        "Toplam eksik değer sayısı: {count}. Eksik değer yapısı modelleme öncesinde kontrol edilmelidir.",

      yes: "Evet",
      no: "Hayır",
    },

    en: {
      layer: "Semi-Agentic Decision Support Layer",
      title: "Semi-Agentic Fraud Analysis Pipeline",
      description:
        "This module is designed to analyze the uploaded dataset step by step and generate data inspection, feature selection, model optimization, and explainable decision-support reports.",
      upload: "Data Upload",
      dataAnalyst: "Data Analyst",
      featureSelector: "Feature Selector",
      modelOptimizer: "Model Optimizer",
      xaiAgent: "XAI Agent",
      pending: "Pending",
      active: "Active",
      completed: "Completed",

      uploadTitle: "0. Data Upload",
      uploadDescription:
        "Upload the CSV dataset to start the semi-agentic analysis workflow. After the file is uploaded, data preview and pipeline initialization steps will become active.",

      analystTitle: "1. Data Analyst",
      analystDescription:
        "At this stage, the dataset is statistically analyzed; missing values, class balance, outliers, correlations, and data quality issues are evaluated.",
      analystInstruction: "Analysis Focus",
      analystPlaceholder:
        "E.g., focus on missing values, class balance, outliers, or correlation structure.",
      runAnalyst: "RUN DATA ANALYST",
      analystLoading: "Generating Data Analyst report...",
      analystReportTitle: "Data Analyst Report",

      featureSelectorTitle: "2. Feature Selector",
      featureSelectorDescription:
        "At this stage, the system evaluates target-related features, highly correlated redundant variables, and the recommended feature subset for modeling.",
      featureSelectorReportTitle: "Feature Selector Report",
      runFeatureSelector: "RUN FEATURE SELECTOR",
      featureSelectorLoading: "Generating Feature Selector report...",
      selectedFeatures: "Selected Features",
      correlationRanking: "Correlation Ranking",
      weakFeatures: "Weak Features",
      redundantPairs: "Redundant / Highly Correlated Feature Pairs",
      recommendedRemoval: "Recommended Feature Removal",
      selectionMethod: "Selection Method",
      selectionThreshold: "Selection Criterion",
      totalNumericFeatures: "Total Numeric Features",
      targetColumn: "Target Column",
      recommendedMethod: "Recommended Method",
      recommendedReason: "Recommendation Rationale",
      correlationFS: "Correlation-based Feature Selection",
      rfeFS: "RFE",
      mrmrFS: "mRMR-inspired Feature Selection",
      consensusSelectedFeatures: "Consensus Selected Features",
      methodComparison: "Method Comparison",
      kFeatures: "Selected Feature Count",
      method: "Method",
      interpretability: "Interpretability",
      redundancyControl: "Redundancy Control",
      stability: "Stability",
      thesisCompatibility: "Thesis Compatibility",
      selectedFeatureCount: "Selected Feature Count",
      rank: "Rank",
      relevance: "Relevance",
      redundancy: "Redundancy",
      mrmrScore: "mRMR Score",

      modelOptimizerTitle: "3. Model Optimizer",
      modelOptimizerDescription:
        "At this stage, the hybrid modeling architecture, threshold optimization, class imbalance strategy, calibration, and final model recommendation are evaluated.",
      modelOptimizerReportTitle: "Model Optimizer Report",
      runModelOptimizer: "RUN MODEL OPTIMIZER",
      modelOptimizerLoading: "Generating Model Optimizer report...",
      recommendedArchitecture: "Recommended Architecture",
      baselineModelComparison: "Baseline Model Comparison",
      thresholdOptimization: "Threshold Optimization",
      classImbalanceStrategy: "Class Imbalance Strategy",
      calibrationReliability: "Calibration & Reliability",
      hyperparameterStrategy: "Hyperparameter Strategy",
      finalDecision: "Final Recommended Pipeline",
      optimizerRecommendations: "Optimizer Recommendations",
      architectureName: "Architecture",
      metaLearner: "Meta Learner",
      calibration: "Calibration",
      thresholdStrategy: "Threshold Strategy",
      preprocessing: "Preprocessing",
      baseLearners: "Base Learners",
      role: "Role",
      strength: "Strength",
      limitation: "Limitation",
      defaultThreshold: "Default Threshold",
      optimizedThreshold: "Optimized Threshold",
      searchRange: "Search Range",
      searchStep: "Step",
      diagnosis: "Diagnosis",
      strategy: "Strategy",
      purpose: "Purpose",
      searchType: "Search Type",
      evaluatedParameters: "Evaluated Parameters",
      recommendedPipeline: "Recommended Pipeline",
      summary: "Summary",
      model: "Model",
      testSetPerformance: "Test Set Performance Summary",
      architecture: "Architecture",
      threshold: "Threshold",
      accuracy: "Accuracy",
      precisionWeighted: "Precision Weighted",
      recallWeighted: "Recall Weighted",
      f1Weighted: "F1 Weighted",
      balancedAccuracy: "Balanced Accuracy",
      appGear: "AppGear",
      fraudPrecision: "Fraud Precision",
      fraudRecall: "Fraud Recall",

      xaiTitle: "4. XAI / Explainability Agent",
      xaiDescription:
        "At this stage, model explainability, influential financial ratios, and analyst-oriented fraud-risk interpretations are generated.",
      runXai: "RUN XAI AGENT",
      xaiLoading: "Generating XAI report...",
      explainabilityMethod: "Explainability Method",
      xaiTopFeatures: "Top Influential Financial Ratios",
      xaiRiskNarrative: "Risk Narrative",
      xaiConfidence: "Confidence Interpretation",
      xaiRecommendations: "XAI Recommendations",
      importanceProxy: "Importance",
      direction: "Direction",
      interpretation: "Interpretation",

      modelOptimizerBackendError:
        "Backend connection could not be established or Model Optimizer report could not be generated.",
      featureSelectorBackendError:
        "Backend connection could not be established or Feature Selector report could not be generated.",
      xaiBackendError:
        "Backend connection could not be established or XAI report could not be generated.",

      fileLabel: "CSV File",
      filePlaceholder: "No file selected yet.",
      selectedFile: "Selected file",
      previewButton: "DATA PREVIEW",
      previewLoading: "Analyzing data...",
      startButton: "START PIPELINE",
      resetButton: "RESET",
      previousStage: "← Previous Stage",
      downloadReport: "DOWNLOAD REPORT",
      completeAnalysis: "COMPLETE ANALYSIS",
      newAnalysis: "START NEW ANALYSIS",
      pipelineCompletedTitle: "Pipeline Completed",
      pipelineCompletedText:
        "The semi-agentic analysis workflow has been completed successfully. Data analysis, feature selection, model optimization, and explainability reports were generated.",

      noteTitle: "Default Analysis Plan",
      noteText:
        "If the user does not enter a custom instruction, the system will execute data inspection, missing value control, outlier analysis, feature selection, model optimization, and explainability steps in the default order.",

      previewTitle: "Data Preview Report",
      rowCount: "Row Count",
      columnCount: "Column Count",
      numericColumnCount: "Numeric Column Count",
      duplicateRows: "Duplicate Rows",
      totalMissingValues: "Total Missing Values",
      hasClassColumn: "Class Column",
      exists: "Exists",
      notExists: "Not Found",

      classDistribution: "Class Distribution",
      classLabel: "Class",
      classDescription: "Description",
      observationCount: "Observation Count",
      nonFraud: "Non-Fraud",
      fraud: "Fraud",

      columns: "Columns",
      previewRows: "First 5 Rows",
      tableNote:
        "For readability, only the first 8 columns are shown in the preview table.",

      nextStageTitle: "Proceed to the Next Stage",
      nextStageText:
        "After reviewing the data preview report, you can proceed to the Data Analyst stage.",

      outliers: "Outliers",
      targetCorrelations: "Target Correlations",
      recommendations: "Recommendations",

      datasetOverview: "1. Dataset Overview",
      classBalance: "2. Class Balance",
      missingValueAnalysis: "3. Missing Value Analysis",
      outlierDetection: "4. Outlier Detection",
      numericalFeatureSummary: "5. Numerical Feature Summary",
      correlationAnalysis: "6. Target Correlation Analysis",
      redundancyAnalysis: "7. Feature Redundancy Analysis",
      preprocessingRecommendations: "8. Preprocessing Recommendations",

      variable: "Variable",
      feature: "Feature",
      average: "Mean",
      stdDeviation: "Std. Deviation",
      min: "Min",
      max: "Max",
      outlierCount: "Outlier Count",
      correlation: "Correlation",
      absoluteCorrelation: "Absolute Correlation",
      featureA: "Feature A",
      featureB: "Feature B",
      suggestion: "Suggestion",

      noFileWarning: "Please select a CSV file first.",
      backendError:
        "Backend connection could not be established or CSV analysis could not be generated.",
      analystBackendError:
        "Backend connection could not be established or Data Analyst report could not be generated.",

      approveDataAnalystTitle: "Approve Data Analyst Stage",
      approveDataAnalystText:
        "After reviewing the Data Analyst report, you can proceed to the feature selection stage.",
      approveDataAnalystButton: "APPROVE → FEATURE SELECTOR",
      approveFeatureTitle: "Approve Feature Selection Stage",
      approveFeatureText:
        "After reviewing the Feature Selector report, you can proceed to the Model Optimizer stage.",
      approveFeatureButton: "APPROVE → MODEL OPTIMIZER",
      approveOptimizerTitle: "Approve Model Optimizer Stage",
      approveOptimizerText:
        "After reviewing the Model Optimizer report, you can proceed to the XAI / Explainability Agent stage.",
      approveOptimizerButton: "APPROVE → XAI AGENT",

      featureSelectorIntro:
        "At this stage, correlation-based feature selection, RFE, and mRMR-inspired feature selection methods will be executed separately; then method comparison and the recommended final strategy will be generated.",
      missingValueSentence:
        "Total missing values: {count}. Missing value structure should be checked before modeling.",

      yes: "Yes",
      no: "No",
    },
  };

  const t = text[language];

  const ReportSection = ({ title, children }) => (
    <div className="agent-report-section">
      <h4>{title}</h4>
      <div className="agent-report-content">{children}</div>
    </div>
  );

  function getStageTitle() {
    if (currentStage === 0) return t.uploadTitle;
    if (currentStage === 1) return t.analystTitle;
    if (currentStage === 2) return t.featureSelectorTitle;
    if (currentStage === 3) return t.modelOptimizerTitle;
    return t.xaiTitle;
  }

  function getStageDescription() {
    if (currentStage === 0) return t.uploadDescription;
    if (currentStage === 1) return t.analystDescription;
    if (currentStage === 2) return t.featureSelectorDescription;
    if (currentStage === 3) return t.modelOptimizerDescription;
    return t.xaiDescription;
  }

  function formatNumber(value) {
    if (typeof value === "number") return Number(value).toFixed(4);
    return value ?? "-";
  }

  function handlePreviousStage() {
    setCurrentStage((stage) => Math.max(stage - 1, 0));
  }

  function handleDownloadAgenticReport() {
    const reportDate = new Date().toLocaleString(
      language === "tr" ? "tr-TR" : "en-US"
    );

    const safeStringify = (value) => {
      if (!value) return "";
      if (typeof value === "string") return value;
      return JSON.stringify(value, null, 2);
    };

    const htmlContent = `
<!DOCTYPE html>
<html lang="${language === "tr" ? "tr" : "en"}">
<head>
  <meta charset="UTF-8" />
  <title>${
    language === "tr"
      ? "Yarı-Ajan Hile Analizi Raporu"
      : "Semi-Agentic Fraud Analysis Report"
  }</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f4f7fb;
      color: #1f2937;
      margin: 0;
      padding: 40px;
    }
    .report {
      max-width: 1000px;
      margin: auto;
      background: #ffffff;
      border-radius: 16px;
      padding: 40px;
      box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
    }
    h1 {
      color: #0f172a;
      margin-bottom: 8px;
    }
    h2 {
      color: #1e3a8a;
      border-bottom: 1px solid #dbeafe;
      padding-bottom: 8px;
      margin-top: 32px;
    }
    .meta {
      color: #64748b;
      font-size: 14px;
      margin-bottom: 30px;
    }
    .section {
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      padding: 20px;
      margin-top: 16px;
    }
    pre {
      white-space: pre-wrap;
      word-wrap: break-word;
      font-family: Arial, sans-serif;
      line-height: 1.6;
      margin: 0;
    }
    .footer {
      margin-top: 40px;
      font-size: 13px;
      color: #64748b;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="report">
    <h1>${
      language === "tr"
        ? "Yarı-Ajan Hile Analizi Raporu"
        : "Semi-Agentic Fraud Analysis Report"
    }</h1>

    <div class="meta">
      ${
        language === "tr"
          ? `Rapor oluşturma tarihi: ${reportDate}`
          : `Report generated on: ${reportDate}`
      }
      <br />
      ${
        language === "tr"
          ? `Dosya adı: ${selectedFile?.name || "-"}`
          : `File name: ${selectedFile?.name || "-"}`
      }
    </div>

    <h2>${language === "tr" ? "Veri Önizleme" : "Data Preview"}</h2>
    <div class="section">
      <pre>${safeStringify(previewData) || (language === "tr" ? "Henüz veri önizlemesi oluşturulmadı." : "No data preview generated yet.")}</pre>
    </div>

    <h2>${language === "tr" ? "Veri Analizi" : "Data Analysis"}</h2>
    <div class="section">
      <pre>${safeStringify(analystReport) || (language === "tr" ? "Henüz veri analizi raporu oluşturulmadı." : "No data analysis report generated yet.")}</pre>
    </div>

    <h2>${language === "tr" ? "Özellik Seçimi" : "Feature Selection"}</h2>
    <div class="section">
      <pre>${safeStringify(featureReport) || (language === "tr" ? "Henüz özellik seçimi raporu oluşturulmadı." : "No feature selection report generated yet.")}</pre>
    </div>

    <h2>${language === "tr" ? "Model Optimizasyonu" : "Model Optimization"}</h2>
    <div class="section">
      <pre>${safeStringify(optimizerReport) || (language === "tr" ? "Henüz model optimizasyonu raporu oluşturulmadı." : "No model optimization report generated yet.")}</pre>
    </div>

    <h2>${language === "tr" ? "Açıklanabilir Karar Desteği" : "Explainable Decision Support"}</h2>
    <div class="section">
      <pre>${safeStringify(xaiReport) || (language === "tr" ? "Henüz açıklanabilir karar desteği raporu oluşturulmadı." : "No explainable decision-support report generated yet.")}</pre>
    </div>

    <div class="footer">
      Fraud Analytics Decision Platform | Semi-Agentic Decision Support Layer
    </div>
  </div>
</body>
</html>
`;

    const blob = new Blob([htmlContent], {
      type: "text/html;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download =
      language === "tr"
        ? `yari-ajan-hile-analizi-raporu-${Date.now()}.html`
        : `semi-agentic-fraud-analysis-report-${Date.now()}.html`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  function getClassDescription(classKey) {
    if (String(classKey) === "0") return t.nonFraud;
    if (String(classKey) === "1") return t.fraud;
    return "-";
  }

  function getMetricCards() {
    if (!previewData) return [];

    return [
      {
        icon: "▦",
        label: t.rowCount,
        value: previewData.datasetOverview?.rowCount ?? "-",
      },
      {
        icon: "▥",
        label: t.columnCount,
        value: previewData.datasetOverview?.columnCount ?? "-",
      },
      {
        icon: "#",
        label: t.numericColumnCount,
        value: previewData.datasetOverview?.numericColumnCount ?? "-",
      },
      {
        icon: "▣",
        label: t.duplicateRows,
        value: previewData.datasetOverview?.duplicateRows ?? "-",
      },
      {
        icon: "−",
        label: t.totalMissingValues,
        value: previewData.datasetOverview?.totalMissingValues ?? "-",
      },
      {
        icon: "⊙",
        label: t.hasClassColumn,
        value: previewData.datasetOverview?.hasClassColumn
          ? t.exists
          : t.notExists,
      },
    ];
  }

  function handleFileChange(event) {
    const file = event.target.files[0];

    if (!file) {
      handleReset();
      return;
    }

    setSelectedFile(file);
    setUploadCompleted(false);
    setCurrentStage(0);
    setPreviewData(null);
    setPreviewError("");
    setAnalystReport(null);
    setAnalystError("");
    setFeatureReport(null);
    setFeatureError("");
    setOptimizerReport(null);
    setOptimizerError("");
    setXaiReport(null);
    setXaiError("");
  }

  async function handlePreview() {
    if (!selectedFile) {
      alert(t.noFileWarning);
      return;
    }

    setPreviewLoading(true);
    setPreviewError("");
    setPreviewData(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("language", language);

    try {
      const response = await fetch(
        "https://fraudlens-backend-tkse.onrender.com/agentic/upload-preview",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || t.backendError);
      }

      setPreviewData(data);
      setUploadCompleted(true);
    } catch (error) {
      setPreviewError(error.message || t.backendError);
      setUploadCompleted(false);
      setCurrentStage(0);
    } finally {
      setPreviewLoading(false);
    }
  }

  async function handleRunAnalyst() {
    if (!selectedFile) {
      alert(t.noFileWarning);
      return;
    }

    setAnalystLoading(true);
    setAnalystError("");
    setAnalystReport(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("language", language);

    try {
      const response = await fetch(
        "https://fraudlens-backend-tkse.onrender.com/agentic/data-analyst",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || t.analystBackendError);
      }

      setAnalystReport({ ...data.report, analysisFocus: data.analysisFocus });
    } catch (error) {
      setAnalystError(error.message || t.analystBackendError);
    } finally {
      setAnalystLoading(false);
    }
  }

  async function handleRunFeatureSelector() {
    if (!selectedFile) {
      alert(t.noFileWarning);
      return;
    }

    setFeatureLoading(true);
    setFeatureError("");
    setFeatureReport(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("language", language);

    try {
      const response = await fetch(
        "https://fraudlens-backend-tkse.onrender.com/agentic/feature-selector",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || t.featureSelectorBackendError);
      }

      setFeatureReport(data.report);
    } catch (error) {
      setFeatureError(error.message || t.featureSelectorBackendError);
    } finally {
      setFeatureLoading(false);
    }
  }

  async function handleRunModelOptimizer() {
    if (!selectedFile) {
      alert(t.noFileWarning);
      return;
    }

    setOptimizerLoading(true);
    setOptimizerError("");
    setOptimizerReport(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("language", language);

    try {
      const response = await fetch(
        "https://fraudlens-backend-tkse.onrender.com/agentic/model-optimizer",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || t.modelOptimizerBackendError);
      }

      setOptimizerReport(data.report);
    } catch (error) {
      setOptimizerError(error.message || t.modelOptimizerBackendError);
    } finally {
      setOptimizerLoading(false);
    }
  }

  async function handleRunXai() {
    if (!selectedFile) {
      alert(t.noFileWarning);
      return;
    }

    setXaiLoading(true);
    setXaiError("");
    setXaiReport(null);

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("language", language);

    try {
      const response = await fetch(
        "https://fraudlens-backend-tkse.onrender.com/agentic/xai-agent",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || t.xaiBackendError);
      }

      setXaiReport(data.report);
    } catch (error) {
      setXaiError(error.message || t.xaiBackendError);
    } finally {
      setXaiLoading(false);
    }
  }

  function handleReset() {
    setSelectedFile(null);
    setUploadCompleted(false);
    setCurrentStage(0);
    setPreviewData(null);
    setPreviewError("");
    setAnalystInstruction("");
    setAnalystLoading(false);
    setAnalystError("");
    setAnalystReport(null);
    setFeatureLoading(false);
    setFeatureError("");
    setFeatureReport(null);
    setOptimizerLoading(false);
    setOptimizerError("");
    setOptimizerReport(null);
    setXaiLoading(false);
    setXaiError("");
    setXaiReport(null);
  }

  const steps = [
    { id: 0, title: t.upload },
    { id: 1, title: t.dataAnalyst },
    { id: 2, title: t.featureSelector },
    { id: 3, title: t.modelOptimizer },
    { id: 4, title: t.xaiAgent },
  ];

  const visiblePreviewColumns = previewData
    ? previewData.columns.slice(0, 8)
    : [];

  const topStatistics = analystReport
    ? Object.entries(analystReport.statistics || {}).slice(0, 8)
    : [];

  const topOutliers = analystReport
    ? Object.entries(analystReport.outliers || {}).slice(0, 8)
    : [];

  const topCorrelations = analystReport
    ? Object.entries(analystReport.targetCorrelations || {}).slice(0, 8)
    : [];

  const topRedundancy = analystReport
    ? (analystReport.featureRedundancy || []).slice(0, 8)
    : [];

  const translateRatioName = (name) => {
    if (language !== "en") return name;

    const ratioMap = {
      "Cari Oran": "Current Ratio",
      "Asit Test Oran": "Acid-Test Ratio",
      "Asit Test Oranı": "Acid-Test Ratio",
      "FAVÖK Marjı": "EBITDA Margin",
      "TB / Ö": "Total Liabilities / Equity",
      "NFB / Ö": "Net Financial Debt / Equity",
      "KVB / Ö": "Short-Term Liabilities / Equity",
      "TK / Ö": "Total Assets / Equity",
      "N / KVB": "Cash / Short-Term Liabilities",
      "NDK / Ö": "Net Profit / Equity",
      "İTTA / TTA": "Related-Party Receivables / Trade Receivables",
      "İTTB / TTB": "Related-Party Payables / Trade Payables",
      "MDV / Ö": "Fixed Assets / Equity",
      "H / TA": "Revenue / Trade Receivables",
      "H / MDV": "Revenue / Fixed Assets",
      "FAVÖK / İDAFG": "EBITDA / Interest Expenses",
      "BK / H": "Gross Profit / Revenue",
      "VÖK / H": "Profit Before Tax / Revenue",
      "NDK / TK": "Net Profit / Total Resources",
      "VÖK / Fgid": "Profit Before Tax / Finance Expenses",
      "SM / Stok": "Cost of Sales / Inventory",
      "H / TV": "Revenue / Total Assets",
      "H / Ö": "Revenue / Equity",

      "TY/TÖ": "Total Liabilities / Total Equity",
      "TY / TÖ": "Total Liabilities / Total Equity",
      "NFB/TÖ": "Net Financial Debt / Total Equity",
      "NFB / TÖ": "Net Financial Debt / Total Equity",
      "TKVY/TÖ": "Short-Term Liabilities / Total Equity",
      "TKVY / TÖ": "Short-Term Liabilities / Total Equity",
      "T.DÖN.V/ TKVY": "Current Assets / Short-Term Liabilities",
      "T.DÖN.V / TKVY": "Current Assets / Short-Term Liabilities",
      "T.DÖN.V-Stok/ TKVY":
        "Current Assets minus Inventory / Short-Term Liabilities",
      "T.DÖN.V-Stok / TKVY":
        "Current Assets minus Inventory / Short-Term Liabilities",
      "NAKİT/ TKVY": "Cash / Short-Term Liabilities",
      "NAKİT / TKVY": "Cash / Short-Term Liabilities",
      "DK(Z)/TÖ": "Net Profit or Loss / Total Equity",
      "DK(Z) / TÖ": "Net Profit or Loss / Total Equity",
      "İTTA/TA": "Related-Party Receivables / Trade Receivables",
      "İTTA / TA": "Related-Party Receivables / Trade Receivables",
      "İTTB/TB": "Related-Party Payables / Trade Payables",
      "İTTB / TB": "Related-Party Payables / Trade Payables",
      "MDV/TÖ": "Fixed Assets / Total Equity",
      "MDV / TÖ": "Fixed Assets / Total Equity",
      "H/TA": "Revenue / Trade Receivables",
      "H/MDV": "Revenue / Fixed Assets",
      "SFVÖK-EFK/MDV": "Profit Before Tax minus Operating Profit / Fixed Assets",
      "SFVÖK-EFK/TV": "Profit Before Tax minus Operating Profit / Total Assets",
      "DK(Z)/MDV": "Net Profit or Loss / Fixed Assets",
      "EFK/H": "Operating Profit / Revenue",
      "EFDG/H": "Other Operating Expenses / Revenue",
      "SFVÖK/EFK": "Profit Before Tax / Operating Profit",
      "EFK/TV": "Operating Profit / Total Assets",
      "DK(Z)/TK": "Net Profit or Loss / Total Resources",
      "NetDönKar*/MDV*": "Change in Net Profit / Change in Fixed Assets",
      "SFDK(Z)/TÖ": "Continuing Operations Profit / Total Equity",
      "FAVÖK/T.DuranV": "EBITDA / Total Non-Current Assets",
    };

    return ratioMap[name] || name;
  };

  const translateMethodName = (textValue) => {
    if (!textValue) return textValue;

    if (language === "tr") {
      const trMap = {
        "Correlation FS": "Korelasyon FS",
        "Correlation-based Feature Selection":
          "Korelasyon Tabanlı Özellik Seçimi",
        "RFE": "RFE",
        "mRMR-inspired Feature Selection": "mRMR Esinli Özellik Seçimi",
        "Hybrid Stacking": "Hibrit Stacking",
        "Optimized OOF Stacking": "Optimize Edilmiş OOF Stacking",
      };

      return trMap[textValue] || textValue;
    }

    return textValue;
  };

  const translateSuggestionText = (textValue) => {
    if (!textValue) return textValue;

    if (language === "tr") {
      let translated = textValue;

      translated = translated.replaceAll(
        "variable may be reviewed in terms of redundancy.",
        "değişkeni tekrar açısından incelenebilir."
      );
      translated = translated.replaceAll(
        "variable may cause feature redundancy.",
        "değişkeni özellik tekrarına yol açabilir."
      );

      return translated;
    }

    let translated = textValue;

    translated = translated.replace(
      "değişkeni redundancy açısından incelenebilir.",
      "variable may be reviewed in terms of redundancy."
    );
    translated = translated.replace(
      "değişkeni özellik tekrarına yol açabilir.",
      "variable may cause feature redundancy."
    );

    return translateRatioName(translated);
  };

  const translateReportText = (textValue) => {
    if (!textValue) return textValue;

    let translated = textValue;

    if (language === "tr") {
      translated = translated.replaceAll(
        "Correlation-based feature selection was selected as the final strategy because it is stable, interpretable, computationally transparent, and compatible with the proposed hybrid stacking framework.",
        "Korelasyon tabanlı özellik seçimi nihai strateji olarak seçilmiştir; çünkü kararlı, yorumlanabilir, hesaplama açısından şeffaf ve önerilen hibrit stacking mimarisiyle uyumludur."
      );
      translated = translated.replaceAll(
        "Correlation FS, RFE, and mRMR-inspired methods were evaluated separately.",
        "Korelasyon FS, RFE ve mRMR esinli yöntemler ayrı ayrı değerlendirilmiştir."
      );
      translated = translated.replaceAll(
        "Correlation-based feature selection is recommended as the final method because it provides a more interpretable and stable structure for the hybrid stacking architecture used in the thesis.",
        "Nihai yöntem olarak korelasyon tabanlı özellik seçimi önerilmektedir; çünkü tezde kullanılan hibrit stacking mimarisi için daha yorumlanabilir ve daha kararlı bir yapı sunmaktadır."
      );
      translated = translated.replaceAll(
        "RFE was evaluated as a supporting comparison method because it provides a model-dependent selection mechanism.",
        "RFE, modele bağlı bir seçim mekanizması sunduğu için destekleyici karşılaştırma yöntemi olarak değerlendirilmiştir."
      );
      translated = translated.replaceAll(
        "The mRMR-inspired approach provides a complementary analysis aimed at reducing redundant variables while preserving target-variable relevance.",
        "mRMR esinli yaklaşım, hedef değişkenle ilişkiyi korurken tekrarlı değişkenleri azaltmaya yönelik tamamlayıcı bir analiz sağlamaktadır."
      );
      translated = translated.replaceAll(
        "The consensus feature list supports pre-modeling decisions by showing variables selected by multiple methods.",
        "Ortak özellik listesi, birden fazla yöntem tarafından seçilen değişkenleri göstererek modelleme öncesi karar desteği sağlar."
      );
      translated = translated.replaceAll(
        "Class distribution should be checked before modeling.",
        "Sınıf dağılımı modelleme öncesinde kontrol edilmelidir."
      );
      translated = translated.replaceAll(
        "If missing values are present, an appropriate imputation strategy should be determined.",
        "Eksik değer bulunması durumunda uygun imputasyon stratejisi belirlenmelidir."
      );
      translated = translated.replaceAll(
        "Outliers may be evaluated using an IQR-based capping method.",
        "Aykırı değerler IQR tabanlı sınırlandırma yöntemiyle değerlendirilebilir."
      );
      translated = translated.replaceAll(
        "Highly correlated variables should be reviewed in terms of feature redundancy.",
        "Yüksek korelasyonlu değişkenler özellik tekrarı açısından incelenmelidir."
      );

      return translateMethodName(translated);
    }

    translated = translated.replaceAll(
      "Sınıf dağılımı modelleme öncesinde kontrol edilmelidir.",
      "Class distribution should be checked before modeling."
    );
    translated = translated.replaceAll(
      "Eksik değer bulunması durumunda uygun imputasyon stratejisi belirlenmelidir.",
      "If missing values are present, an appropriate imputation strategy should be determined."
    );
    translated = translated.replaceAll(
      "Aykırı değerler IQR tabanlı sınırlandırma yöntemiyle değerlendirilebilir.",
      "Outliers may be evaluated using an IQR-based capping method."
    );
    translated = translated.replaceAll(
      "Yüksek korelasyonlu değişkenler özellik tekrarları açısından incelenmelidir.",
      "Highly correlated variables should be reviewed in terms of feature redundancy."
    );
    translated = translated.replaceAll(
      "Correlation FS, RFE ve mRMR-inspired yöntemleri ayrı ayrı değerlendirilmiştir.",
      "Correlation FS, RFE, and mRMR-inspired methods were evaluated separately."
    );
    translated = translated.replaceAll(
      "Nihai yöntem olarak correlation-based feature selection önerilmiştir; çünkü tezde kullanılan hibrit stacking mimarisiyle daha yorumlanabilir ve daha kararlı bir yapı sunmaktadır.",
      "Correlation-based feature selection is recommended as the final method because it provides a more interpretable and stable structure for the hybrid stacking architecture used in the thesis."
    );
    translated = translated.replaceAll(
      "RFE modeli bağımlı bir seçim mekanizması sunduğu için destekleyici karşılaştırma yöntemi olarak değerlendirilmiştir.",
      "RFE was evaluated as a supporting comparison method because it provides a model-dependent selection mechanism."
    );
    translated = translated.replaceAll(
      "mRMR-inspired yaklaşım, hedef değişken ilişkisini korurken redundant değişkenleri azaltmaya yönelik tamamlayıcı bir analiz sağlamaktadır.",
      "The mRMR-inspired approach provides a complementary analysis aimed at reducing redundant variables while preserving target-variable relevance."
    );
    translated = translated.replaceAll(
      "Consensus feature listesi, birden fazla yöntem tarafından seçilen değişkenleri göstererek modelleme öncesi karar desteği sağlar.",
      "The consensus feature list supports pre-modeling decisions by showing variables selected by multiple methods."
    );

    translated = translated.replaceAll("NDK / Ö", "Net Profit / Equity");
    translated = translated.replaceAll("NDK / TK", "Net Profit / Total Resources");
    translated = translated.replaceAll("Asit Test Oran", "Acid-Test Ratio");
    translated = translated.replaceAll("H / Ö", "Revenue / Equity");
    translated = translated.replaceAll("NFB / Ö", "Net Financial Debt / Equity");
    translated = translated.replaceAll("TK / Ö", "Total Assets / Equity");
    translated = translated.replaceAll("KVB / Ö", "Short-Term Liabilities / Equity");
    translated = translated.replaceAll("VÖK / H", "Profit Before Tax / Revenue");
    translated = translated.replaceAll("Cari Oran", "Current Ratio");
    translated = translated.replaceAll("N / KVB", "Cash / Short-Term Liabilities");
    translated = translated.replaceAll("H / TV", "Revenue / Total Assets");
    translated = translated.replaceAll("TB / Ö", "Total Liabilities / Equity");

    return translateRatioName(translated);
  };

  return (
    <div className="semi-agentic-page">
      <div className="semi-agentic-header">
        <p className="eyebrow">{t.layer}</p>
        <h1>{t.title}</h1>
        <p>{t.description}</p>
      </div>

      <div className="agent-horizontal-stepper">
        {steps.map((step) => {
          const isCompleted =
            step.id < currentStage || (step.id === 0 && uploadCompleted);
          const isActive = step.id === currentStage;

          return (
            <div
              key={step.id}
              className={`agent-horizontal-step ${
                isCompleted ? "completed" : isActive ? "active" : ""
              }`}
            >
              <span>{isCompleted ? "✓" : step.id}</span>
              <div>
                <strong>{step.title}</strong>
                <small>
                  {isCompleted ? t.completed : isActive ? t.active : t.pending}
                </small>
              </div>
            </div>
          );
        })}
      </div>

      <section className="agent-main-panel agent-main-panel-wide">
        <div className="agent-card">
          <span className="section-kicker">{t.layer}</span>
          <h2>{getStageTitle()}</h2>
          <p className="description">{getStageDescription()}</p>

          {currentStage > 0 && (
            <div className="agent-action-row">
              <button
                type="button"
                className="secondary-button"
                onClick={handlePreviousStage}
              >
                {t.previousStage}
              </button>

              <button
                type="button"
                className="secondary-button"
                onClick={handleDownloadAgenticReport}
                disabled={
                  !previewData &&
                  !analystReport &&
                  !featureReport &&
                  !optimizerReport &&
                  !xaiReport
                }
              >
                {t.downloadReport}
              </button>
            </div>
          )}

          {currentStage === 0 && (
            <>
              <div className="upload-box">
                <label>{t.fileLabel}</label>
                <div className="upload-input-row custom-file-upload">
                  <input
                    id="semiAgenticCsvFile"
                    className="hidden-file-input"
                    type="file"
                    accept=".csv"
                    onChange={handleFileChange}
                  />

                  <label htmlFor="semiAgenticCsvFile" className="file-upload-button">
                    {language === "tr" ? "Dosya Seç" : "Choose File"}
                  </label>

                  <span className="file-upload-name">
                    {selectedFile
                      ? `${t.selectedFile}: ${selectedFile.name}`
                      : t.filePlaceholder}
                  </span>
                </div>
              </div>

              <div className="agent-action-row">
                <button
                  type="button"
                  className="secondary-button"
                  onClick={handlePreview}
                  disabled={previewLoading}
                >
                  {previewLoading ? t.previewLoading : t.previewButton}
                </button>

                <button
                  type="button"
                  className="secondary-button"
                  onClick={handleReset}
                >
                  {t.resetButton}
                </button>
              </div>
            </>
          )}

          {currentStage === 1 && (
            <div className="agent-analyst-panel">
              <ReportSection title={t.analystReportTitle}>
                <div className="agent-action-row analyst-action-row">
                  <button
                    type="button"
                    className="primary-button"
                    onClick={handleRunAnalyst}
                    disabled={analystLoading}
                  >
                    {analystLoading ? t.analystLoading : t.runAnalyst}
                  </button>

                  <button
                    type="button"
                    className="secondary-button"
                    onClick={handleReset}
                  >
                    {t.resetButton}
                  </button>
                </div>
              </ReportSection>
            </div>
          )}

          {currentStage === 2 && (
            <div className="agent-report-card">
              <div className="agent-report-header">
                <div>
                  <span className="agent-kicker">{t.layer}</span>
                  <h3>{t.featureSelectorReportTitle}</h3>
                </div>

                <span className="agent-status-badge">
                  {featureReport ? t.completed : t.active}
                </span>
              </div>

              {!featureReport && (
                <ReportSection title={t.featureSelectorTitle}>
                  <p>{t.featureSelectorIntro}</p>

                  <div className="agent-action-row analyst-action-row">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={handleRunFeatureSelector}
                      disabled={featureLoading}
                    >
                      {featureLoading
                        ? t.featureSelectorLoading
                        : t.runFeatureSelector}
                    </button>

                    <button
                      type="button"
                      className="secondary-button"
                      onClick={handleReset}
                    >
                      {t.resetButton}
                    </button>
                  </div>
                </ReportSection>
              )}

              {featureReport && (
                <>
                  <ReportSection title={t.recommendedMethod}>
                    <div className="pro-metric-grid">
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">★</div>
                        <div>
                          <span>{t.recommendedMethod}</span>
                          <strong>
                            {translateMethodName(
                              featureReport.recommendedMethod ?? "-"
                            )}
                          </strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">#</div>
                        <div>
                          <span>{t.kFeatures}</span>
                          <strong>{featureReport.kFeatures ?? "-"}</strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">⊙</div>
                        <div>
                          <span>{t.targetColumn}</span>
                          <strong>{featureReport.targetColumn ?? "-"}</strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">▥</div>
                        <div>
                          <span>{t.totalNumericFeatures}</span>
                          <strong>
                            {featureReport.totalNumericFeatures ?? "-"}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <p>{translateReportText(featureReport.recommendedReason)}</p>
                  </ReportSection>

                  <ReportSection title={t.methodComparison}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.method}</th>
                            <th>{t.selectedFeatureCount}</th>
                            <th>{t.interpretability}</th>
                            <th>{t.redundancyControl}</th>
                            <th>{t.stability}</th>
                            <th>{t.thesisCompatibility}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {(featureReport.methodComparison || []).map(
                            (item) => (
                              <tr key={item.method}>
                                <td>{translateMethodName(item.method)}</td>
                                <td>{item.selectedFeatureCount}</td>
                                <td>{translateReportText(item.interpretability)}</td>
                                <td>{translateReportText(item.redundancyControl)}</td>
                                <td>{translateReportText(item.stability)}</td>
                                <td>{translateReportText(item.thesisCompatibility)}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <div className="pro-report-grid">
                    <ReportSection title={t.correlationFS}>
                      <div className="agent-column-grid">
                        {(featureReport.correlationFS?.selectedFeatures || []).map(
                          (feature) => (
                            <span key={feature}>
                              {translateRatioName(feature)}
                            </span>
                          )
                        )}
                      </div>
                    </ReportSection>

                    <ReportSection title={t.rfeFS}>
                      <div className="agent-column-grid">
                        {(featureReport.rfeFS?.selectedFeatures || []).map(
                          (feature) => (
                            <span key={feature}>
                              {translateRatioName(feature)}
                            </span>
                          )
                        )}
                      </div>
                    </ReportSection>
                  </div>

                  <ReportSection title={t.mrmrFS}>
                    <div className="agent-column-grid">
                      {(featureReport.mrmrFS?.selectedFeatures || []).map(
                        (feature) => (
                          <span key={feature}>{translateRatioName(feature)}</span>
                        )
                      )}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.consensusSelectedFeatures}>
                    <div className="agent-column-grid">
                      {(featureReport.consensusSelectedFeatures || []).length >
                      0 ? (
                        featureReport.consensusSelectedFeatures.map((feature) => (
                          <span key={feature}>{translateRatioName(feature)}</span>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.correlationRanking}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.feature}</th>
                            <th>{t.correlation}</th>
                            <th>{t.absoluteCorrelation}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {(featureReport.correlationFS?.ranking || [])
                            .slice(0, 10)
                            .map((item) => (
                              <tr key={item.feature}>
                                <td>{translateRatioName(item.feature)}</td>
                                <td>{formatNumber(item.correlation)}</td>
                                <td>{formatNumber(item.absoluteCorrelation)}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.mrmrFS}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.feature}</th>
                            <th>{t.relevance}</th>
                            <th>{t.redundancy}</th>
                            <th>{t.mrmrScore}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {(featureReport.mrmrFS?.ranking || [])
                            .slice(0, 10)
                            .map((item) => (
                              <tr key={item.feature}>
                                <td>{translateRatioName(item.feature)}</td>
                                <td>{formatNumber(item.relevance)}</td>
                                <td>{formatNumber(item.redundancy)}</td>
                                <td>{formatNumber(item.mrmrScore)}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.rfeFS}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.feature}</th>
                            <th>{t.rank}</th>
                            <th>{t.selectedFeatures}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {(featureReport.rfeFS?.ranking || [])
                            .slice(0, 10)
                            .map((item) => (
                              <tr key={item.feature}>
                                <td>{translateRatioName(item.feature)}</td>
                                <td>{item.rank}</td>
                                <td>{item.selected ? t.yes : t.no}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.redundantPairs}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.featureA}</th>
                            <th>{t.featureB}</th>
                            <th>{t.correlation}</th>
                            <th>{t.suggestion}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {(featureReport.redundantPairs || []).length > 0 ? (
                            featureReport.redundantPairs
                              .slice(0, 10)
                              .map((item, index) => (
                                <tr
                                  key={`${item.featureA}-${item.featureB}-${index}`}
                                >
                                  <td>{translateRatioName(item.featureA)}</td>
                                  <td>{translateRatioName(item.featureB)}</td>
                                  <td>{formatNumber(item.correlation)}</td>
                                  <td>
                                    {translateReportText(
                                      translateSuggestionText(item.suggestion)
                                    )}
                                  </td>
                                </tr>
                              ))
                          ) : (
                            <tr>
                              <td colSpan="4">-</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.recommendedRemoval}>
                    <div className="agent-column-grid">
                      {(featureReport.recommendedRemoval || []).length > 0 ? (
                        featureReport.recommendedRemoval.map((feature) => (
                          <span key={feature}>{translateRatioName(feature)}</span>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.recommendations}>
                    <div className="agent-note-box">
                      {(featureReport.recommendations || []).map(
                        (item, index) => (
                          <p key={index}>• {translateReportText(item)}</p>
                        )
                      )}
                    </div>
                  </ReportSection>

                  <div className="agent-next-step-box">
                    <div>
                      <h4>{t.approveFeatureTitle}</h4>
                      <p>{t.approveFeatureText}</p>
                    </div>

                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => setCurrentStage(3)}
                    >
                      {t.approveFeatureButton}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {currentStage === 3 && (
            <div className="agent-report-card">
              <div className="agent-report-header">
                <div>
                  <span className="agent-kicker">{t.layer}</span>
                  <h3>{t.modelOptimizerReportTitle}</h3>
                </div>

                <span className="agent-status-badge">
                  {optimizerReport ? t.completed : t.active}
                </span>
              </div>

              {!optimizerReport && (
                <ReportSection title={t.modelOptimizerTitle}>
                  <p>{t.modelOptimizerDescription}</p>

                  <div className="agent-action-row analyst-action-row">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={handleRunModelOptimizer}
                      disabled={optimizerLoading}
                    >
                      {optimizerLoading
                        ? t.modelOptimizerLoading
                        : t.runModelOptimizer}
                    </button>

                    <button
                      type="button"
                      className="secondary-button"
                      onClick={handleReset}
                    >
                      {t.resetButton}
                    </button>
                  </div>
                </ReportSection>
              )}

              {optimizerReport && (
                <>
                  <ReportSection title={t.recommendedArchitecture}>
                    <div className="pro-metric-grid">
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">▣</div>
                        <div>
                          <span>{t.architectureName}</span>
                          <strong>
                            {translateMethodName(
                              optimizerReport.recommendedArchitecture?.name ?? "-"
                            )}
                          </strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">⊙</div>
                        <div>
                          <span>{t.metaLearner}</span>
                          <strong>
                            {optimizerReport.recommendedArchitecture
                              ?.metaLearner ?? "-"}
                          </strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">%</div>
                        <div>
                          <span>{t.optimizedThreshold}</span>
                          <strong>
                            {optimizerReport.thresholdOptimization
                              ?.optimizedThreshold ?? "-"}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <p>
                      {translateReportText(
                        optimizerReport.recommendedArchitecture?.calibration
                      )}
                    </p>
                    <p>
                      {translateReportText(
                        optimizerReport.recommendedArchitecture
                          ?.thresholdStrategy
                      )}
                    </p>
                  </ReportSection>

                  <div className="pro-report-grid">
                    <ReportSection title={t.preprocessing}>
                      <div className="agent-column-grid">
                        {(
                          optimizerReport.recommendedArchitecture
                            ?.preprocessing || []
                        ).map((item) => (
                          <span key={item}>{translateReportText(item)}</span>
                        ))}
                      </div>
                    </ReportSection>

                    <ReportSection title={t.baseLearners}>
                      <div className="agent-column-grid">
                        {(
                          optimizerReport.recommendedArchitecture?.baseLearners ||
                          []
                        ).map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </ReportSection>
                  </div>

                  <ReportSection title={t.testSetPerformance}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.architecture}</th>
                            <th>{t.threshold}</th>
                            <th>{t.accuracy}</th>
                            <th>{t.precisionWeighted}</th>
                            <th>{t.recallWeighted}</th>
                            <th>{t.f1Weighted}</th>
                            <th>{t.balancedAccuracy}</th>
                            <th>{t.appGear}</th>
                            <th>{t.fraudPrecision}</th>
                            <th>{t.fraudRecall}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {[
                            optimizerReport.testSetPerformance
                              ?.baseHybridFixedThreshold,
                            optimizerReport.testSetPerformance
                              ?.optimizedOOFStacking,
                          ]
                            .filter(Boolean)
                            .map((item) => (
                              <tr key={item.architecture}>
                                <td>{translateMethodName(item.architecture)}</td>
                                <td>{item.threshold}</td>
                                <td>{formatNumber(item.accuracy)}</td>
                                <td>{formatNumber(item.precisionWeighted)}</td>
                                <td>{formatNumber(item.recallWeighted)}</td>
                                <td>{formatNumber(item.f1Weighted)}</td>
                                <td>{formatNumber(item.balancedAccuracy)}</td>
                                <td>{formatNumber(item.appGear)}</td>
                                <td>{formatNumber(item.fraudPrecision)}</td>
                                <td>{formatNumber(item.fraudRecall)}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>

                    <p>{translateReportText(optimizerReport.testSetPerformance?.note)}</p>
                  </ReportSection>

                  <ReportSection title={t.baselineModelComparison}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.model}</th>
                            <th>{t.role}</th>
                            <th>{t.strength}</th>
                            <th>{t.limitation}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {(optimizerReport.baselineModelComparison || []).map(
                            (item) => (
                              <tr key={item.model}>
                                <td>{item.model}</td>
                                <td>{translateReportText(item.role)}</td>
                                <td>{translateReportText(item.strength)}</td>
                                <td>{translateReportText(item.limitation)}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.thresholdOptimization}>
                    <div className="pro-metric-grid">
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">0.5</div>
                        <div>
                          <span>{t.defaultThreshold}</span>
                          <strong>
                            {
                              optimizerReport.thresholdOptimization
                                ?.defaultThreshold
                            }
                          </strong>
                        </div>
                      </div>
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">✓</div>
                        <div>
                          <span>{t.optimizedThreshold}</span>
                          <strong>
                            {
                              optimizerReport.thresholdOptimization
                                ?.optimizedThreshold
                            }
                          </strong>
                        </div>
                      </div>
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">↔</div>
                        <div>
                          <span>{t.searchRange}</span>
                          <strong>
                            {optimizerReport.thresholdOptimization?.searchRange}
                          </strong>
                        </div>
                      </div>
                    </div>

                    <p>{translateReportText(optimizerReport.thresholdOptimization?.rationale)}</p>
                  </ReportSection>

                  <ReportSection title={t.classImbalanceStrategy}>
                    <p>{translateReportText(optimizerReport.classImbalanceStrategy?.diagnosis)}</p>
                    <div className="agent-note-box">
                      <p>
                        •{" "}
                        {translateReportText(
                          optimizerReport.classImbalanceStrategy?.recommendation
                        )}
                      </p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.calibrationReliability}>
                    <p>
                      <strong>{t.strategy}:</strong>{" "}
                      {translateReportText(
                        optimizerReport.calibrationReliability?.strategy
                      )}
                    </p>
                    <p>
                      <strong>{t.purpose}:</strong>{" "}
                      {translateReportText(
                        optimizerReport.calibrationReliability?.purpose
                      )}
                    </p>
                    <p>
                      {translateReportText(
                        optimizerReport.calibrationReliability?.recommendation
                      )}
                    </p>
                  </ReportSection>

                  <ReportSection title={t.hyperparameterStrategy}>
                    <p>
                      <strong>{t.searchType}:</strong>{" "}
                      {translateReportText(
                        optimizerReport.hyperparameterStrategy?.searchType
                      )}
                    </p>
                    <p>
                      <strong>{t.metaLearner}:</strong>{" "}
                      {
                        optimizerReport.hyperparameterStrategy
                          ?.metaLearnerCandidate
                      }
                    </p>

                    <div className="agent-column-grid">
                      {(
                        optimizerReport.hyperparameterStrategy
                          ?.evaluatedParameters || []
                      ).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <p>
                      {translateReportText(
                        optimizerReport.hyperparameterStrategy?.recommendation
                      )}
                    </p>
                  </ReportSection>

                  <ReportSection title={t.optimizerRecommendations}>
                    <div className="agent-note-box">
                      {(optimizerReport.optimizerRecommendations || []).map(
                        (item, index) => (
                          <p key={index}>• {translateReportText(item)}</p>
                        )
                      )}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.finalDecision}>
                    <div className="agent-column-grid">
                      {(
                        optimizerReport.finalDecision?.recommendedPipeline || []
                      ).map((item) => (
                        <span key={item}>{translateReportText(item)}</span>
                      ))}
                    </div>

                    <p>{translateReportText(optimizerReport.finalDecision?.summary)}</p>
                  </ReportSection>

                  <div className="agent-next-step-box">
                    <div>
                      <h4>{t.approveOptimizerTitle}</h4>
                      <p>{t.approveOptimizerText}</p>
                    </div>

                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => setCurrentStage(4)}
                    >
                      {t.approveOptimizerButton}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {previewError && (
            <div className="professional-alert error-alert">{previewError}</div>
          )}
          {analystError && (
            <div className="professional-alert error-alert">{analystError}</div>
          )}
          {featureError && (
            <div className="professional-alert error-alert">{featureError}</div>
          )}

          {currentStage === 4 && (
            <div className="agent-report-card">
              <div className="agent-report-header">
                <div>
                  <span className="agent-kicker">{t.layer}</span>
                  <h3>{t.xaiTitle}</h3>
                </div>

                <span className="agent-status-badge">
                  {xaiReport ? t.completed : t.active}
                </span>
              </div>

              {!xaiReport && (
                <ReportSection title={t.xaiTitle}>
                  <p>{t.xaiDescription}</p>

                  <div className="agent-action-row analyst-action-row">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={handleRunXai}
                      disabled={xaiLoading}
                    >
                      {xaiLoading ? t.xaiLoading : t.runXai}
                    </button>

                    <button
                      type="button"
                      className="secondary-button"
                      onClick={handleReset}
                    >
                      {t.resetButton}
                    </button>
                  </div>
                </ReportSection>
              )}

              {xaiReport && (
                <>
                  <ReportSection title={t.explainabilityMethod}>
                    <div className="agent-note-box">
                      <p>
                        <strong>{translateReportText(xaiReport.explainabilityMethod?.name)}</strong>
                      </p>
                      <p>{translateReportText(xaiReport.explainabilityMethod?.purpose)}</p>
                      <p>{translateReportText(xaiReport.explainabilityMethod?.scope)}</p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiTopFeatures}>
                    <div className="agent-preview-table-wrap">
                      <table className="agent-preview-table">
                        <thead>
                          <tr>
                            <th>{t.feature}</th>
                            <th>{t.importanceProxy}</th>
                            <th>{t.correlation}</th>
                            <th>{t.direction}</th>
                            <th>{t.interpretation}</th>
                          </tr>
                        </thead>

                        <tbody>
                          {(xaiReport.topInfluentialFeatures || []).map(
                            (item) => (
                              <tr key={item.feature}>
                                <td>
                                  {translateReportText(
                                    translateRatioName(item.feature)
                                  )}
                                </td>
                                <td>{formatNumber(item.importanceProxy)}</td>
                                <td>{formatNumber(item.correlation)}</td>
                                <td>{translateReportText(item.direction)}</td>
                                <td>{translateReportText(item.interpretation)}</td>
                              </tr>
                            )
                          )}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiRiskNarrative}>
                    <div className="agent-note-box">
                      <p>{translateReportText(xaiReport.riskNarrative?.summary)}</p>
                      <p>{translateReportText(xaiReport.riskNarrative?.analystInterpretation)}</p>
                      <p>{translateReportText(xaiReport.riskNarrative?.decisionSupportRole)}</p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiConfidence}>
                    <div className="agent-note-box">
                      <p>{translateReportText(xaiReport.confidenceInterpretation?.lowRisk)}</p>
                      <p>{translateReportText(xaiReport.confidenceInterpretation?.highRisk)}</p>
                      <p>{translateReportText(xaiReport.confidenceInterpretation?.caution)}</p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiRecommendations}>
                    <div className="agent-note-box">
                      {(xaiReport.xaiRecommendations || []).map(
                        (item, index) => (
                          <p key={index}>• {translateReportText(item)}</p>
                        )
                      )}
                    </div>
                  </ReportSection>

                  <ReportSection title={translateReportText(xaiReport.finalExplanation?.title)}>
                    <div className="agent-note-box">
                      <p>{translateReportText(xaiReport.finalExplanation?.summary)}</p>
                    </div>
                  </ReportSection>

                  <div className="agent-next-step-box">
                    <div>
                      <h4>{t.pipelineCompletedTitle}</h4>
                      <p>{t.pipelineCompletedText}</p>
                    </div>

                    <div className="agent-action-row">
                      <button
                        type="button"
                        className="primary-button"
                        onClick={handleDownloadAgenticReport}
                      >
                        {t.downloadReport}
                      </button>

                      <button
                        type="button"
                        className="secondary-button"
                        onClick={handleReset}
                      >
                        {t.newAnalysis}
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          )}

          {optimizerError && (
            <div className="professional-alert error-alert">
              {optimizerError}
            </div>
          )}
          {xaiError && (
            <div className="professional-alert error-alert">{xaiError}</div>
          )}

          {currentStage === 0 && previewData && (
            <div className="agent-preview-report pro-preview-report">
              <h3>{t.previewTitle}</h3>

              <div className="pro-metric-grid">
                {getMetricCards().map((metric) => (
                  <div className="pro-metric-card" key={metric.label}>
                    <div className="pro-metric-icon">{metric.icon}</div>
                    <div>
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pro-report-grid">
                <ReportSection title={t.classDistribution}>
                  <table className="agent-small-table">
                    <thead>
                      <tr>
                        <th>{t.classLabel}</th>
                        <th>{t.classDescription}</th>
                        <th>{t.observationCount}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(previewData.classDistribution || {}).map(
                        ([key, value]) => (
                          <tr key={key}>
                            <td>{key}</td>
                            <td>{getClassDescription(key)}</td>
                            <td>{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </ReportSection>

                <ReportSection title={t.columns}>
                  <div className="agent-column-grid">
                    {(previewData.columns || []).map((column) => (
                      <span key={column}>{translateRatioName(column)}</span>
                    ))}
                  </div>
                </ReportSection>
              </div>

              <ReportSection title={t.previewRows}>
                <div className="agent-preview-table-wrap">
                  <table className="agent-preview-table">
                    <thead>
                      <tr>
                        {visiblePreviewColumns.map((column) => (
                          <th key={column}>{translateRatioName(column)}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(previewData.previewRows || []).map((row, index) => (
                        <tr key={index}>
                          {visiblePreviewColumns.map((column) => (
                            <td key={column}>{String(row[column] ?? "")}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="agent-table-note-box">{t.tableNote}</div>

                <div className="agent-next-step-box">
                  <div>
                    <h4>{t.nextStageTitle}</h4>
                    <p>{t.nextStageText}</p>
                  </div>

                  <button
                    type="button"
                    className="primary-button"
                    disabled={!uploadCompleted}
                    onClick={() => setCurrentStage(1)}
                  >
                    {t.startButton} <span>→</span>
                  </button>
                </div>
              </ReportSection>
            </div>
          )}

          {currentStage === 1 && analystReport && (
            <div className="agent-report-card">
              <div className="agent-report-header">
                <div>
                  <span className="agent-kicker">{t.layer}</span>
                  <h3>{t.analystReportTitle}</h3>
                </div>
                <span className="agent-status-badge">{t.completed}</span>
              </div>

              <ReportSection title={t.datasetOverview}>
                <div className="pro-metric-grid">
                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">▦</div>
                    <div>
                      <span>{t.rowCount}</span>
                      <strong>
                        {analystReport.datasetOverview?.rowCount ?? "-"}
                      </strong>
                    </div>
                  </div>

                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">▥</div>
                    <div>
                      <span>{t.columnCount}</span>
                      <strong>
                        {analystReport.datasetOverview?.columnCount ?? "-"}
                      </strong>
                    </div>
                  </div>

                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">#</div>
                    <div>
                      <span>{t.numericColumnCount}</span>
                      <strong>
                        {analystReport.datasetOverview?.numericColumnCount ??
                          "-"}
                      </strong>
                    </div>
                  </div>

                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">−</div>
                    <div>
                      <span>{t.totalMissingValues}</span>
                      <strong>
                        {analystReport.datasetOverview?.totalMissingValues ??
                          "-"}
                      </strong>
                    </div>
                  </div>
                </div>
              </ReportSection>

              <ReportSection title={t.classBalance}>
                <table className="agent-small-table">
                  <thead>
                    <tr>
                      <th>{t.classLabel}</th>
                      <th>{t.classDescription}</th>
                      <th>{t.observationCount}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(analystReport.classDistribution || {}).map(
                      ([key, value]) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{getClassDescription(key)}</td>
                          <td>{value}</td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </ReportSection>

              <ReportSection title={t.missingValueAnalysis}>
                <p>
                  {t.missingValueSentence.replace(
                    "{count}",
                    analystReport.datasetOverview?.totalMissingValues ?? "-"
                  )}
                </p>
              </ReportSection>

              <ReportSection title={t.outlierDetection}>
                <table className="agent-small-table">
                  <thead>
                    <tr>
                      <th>{t.variable}</th>
                      <th>{t.outlierCount}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topOutliers.map(([column, item]) => (
                      <tr key={column}>
                        <td>{translateRatioName(column)}</td>
                        <td>{item.outlierCount ?? "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ReportSection>

              <ReportSection title={t.numericalFeatureSummary}>
                <div className="agent-preview-table-wrap">
                  <table className="agent-preview-table">
                    <thead>
                      <tr>
                        <th>{t.variable}</th>
                        <th>{t.average}</th>
                        <th>{t.stdDeviation}</th>
                        <th>{t.min}</th>
                        <th>{t.max}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topStatistics.map(([column, stats]) => (
                        <tr key={column}>
                          <td>{translateRatioName(column)}</td>
                          <td>{formatNumber(stats.mean)}</td>
                          <td>{formatNumber(stats.std)}</td>
                          <td>{formatNumber(stats.min)}</td>
                          <td>{formatNumber(stats.max)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ReportSection>

              <ReportSection title={t.correlationAnalysis}>
                <table className="agent-small-table">
                  <thead>
                    <tr>
                      <th>{t.variable}</th>
                      <th>{t.correlation}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topCorrelations.map(([column, value]) => (
                      <tr key={column}>
                        <td>{translateRatioName(column)}</td>
                        <td>{formatNumber(value)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ReportSection>

              <ReportSection title={t.redundancyAnalysis}>
                <div className="agent-preview-table-wrap">
                  <table className="agent-preview-table">
                    <thead>
                      <tr>
                        <th>{t.featureA}</th>
                        <th>{t.featureB}</th>
                        <th>{t.correlation}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topRedundancy.map((item, index) => (
                        <tr key={`${item.featureA}-${item.featureB}-${index}`}>
                          <td>{translateRatioName(item.featureA)}</td>
                          <td>{translateRatioName(item.featureB)}</td>
                          <td>{formatNumber(item.correlation)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ReportSection>

              <ReportSection title={t.preprocessingRecommendations}>
                <div className="agent-note-box">
                  {(analystReport.recommendations || []).map((item, index) => (
                    <p key={index}>• {translateReportText(item)}</p>
                  ))}
                </div>
              </ReportSection>

              <div className="agent-next-step-box">
                <div>
                  <h4>{t.approveDataAnalystTitle}</h4>
                  <p>{t.approveDataAnalystText}</p>
                </div>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setCurrentStage(2)}
                >
                  {t.approveDataAnalystButton}
                </button>
              </div>
            </div>
          )}

          <div className="agent-note-box">
            <h4>{t.noteTitle}</h4>
            <p>{t.noteText}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SemiAgentic;