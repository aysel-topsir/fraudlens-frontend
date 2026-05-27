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
      title: "Yarı-Ajan Destekli Hile Analiz Pipeline’ı",
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
        "CSV veri setini yükleyerek semi-agentic analiz sürecini başlatın. Dosya yüklendikten sonra veri önizleme ve pipeline başlatma adımları aktifleşecektir.",

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
      correlationFS: "Correlation-based FS",
      rfeFS: "RFE",
      mrmrFS: "mRMR-inspired FS",
      consensusSelectedFeatures: "Consensus Selected Features",
      methodComparison: "Yöntem Karşılaştırması",
      kFeatures: "Seçilen Özellik Sayısı",
      method: "Yöntem",
      interpretability: "Yorumlanabilirlik",
      redundancyControl: "Redundancy Kontrolü",
      stability: "Kararlılık",
      thesisCompatibility: "Tez Uyumu",
      selectedFeatureCount: "Seçilen Özellik Sayısı",
      rank: "Sıra",
      relevance: "Relevance",
      redundancy: "Redundancy",
      mrmrScore: "mRMR Skoru",
      modelOptimizerTitle: "3. Model Optimize Edici",
      modelOptimizerDescription:
        "Bu aşamada hibrit modelleme mimarisi, eşik optimizasyonu, sınıf dengesizliği stratejisi, kalibrasyon ve nihai model önerisi değerlendirilir.",
      modelOptimizerReportTitle: "Model Optimizer Raporu",
      runModelOptimizer: "MODEL OPTIMIZER'I ÇALIŞTIR",
      modelOptimizerLoading: "Model optimizer raporu üretiliyor...",
      recommendedArchitecture: "Önerilen Mimari",
      baselineModelComparison: "Baseline Model Karşılaştırması",
      thresholdOptimization: "Threshold Optimization",
      classImbalanceStrategy: "Sınıf Dengesizliği Stratejisi",
      calibrationReliability: "Kalibrasyon ve Güvenilirlik",
      hyperparameterStrategy: "Hiperparametre Stratejisi",
      finalDecision: "Final Recommended Pipeline",
      optimizerRecommendations: "Optimize Edici Önerileri",
      architectureName: "Mimari",
      metaLearner: "Meta Learner",
      calibration: "Kalibrasyon",
      thresholdStrategy: "Threshold Stratejisi",
      preprocessing: "Ön İşleme",
      baseLearners: "Base Learners",
      role: "Rol",
      strength: "Güçlü Yön",
      limitation: "Sınırlılık",
      defaultThreshold: "Varsayılan Threshold",
      optimizedThreshold: "Optimize Threshold",
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
      testSetPerformance: "Test Set Performance Summary",
      architecture: "Mimari",
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
        "Bu aşamada model kararlarının açıklanabilirliği, etkili finansal oranlar ve analist-destekli risk yorumları üretilir.",
      runXai: "XAI AGENT'I ÇALIŞTIR",
      xaiLoading: "XAI raporu üretiliyor...",
      explainabilityMethod: "Explainability Method",
      xaiTopFeatures: "En Etkili Finansal Oranlar",
      xaiRiskNarrative: "Risk Narrative",
      xaiConfidence: "Confidence Interpretation",
      xaiRecommendations: "XAI Recommendations",
      importanceProxy: "Importance",
      direction: "Direction",
      interpretation: "Interpretation",
      modelOptimizerBackendError:
        "Backend bağlantısı kurulamadı veya Model Optimizer raporu üretilemedi.",
      featureSelectorBackendError:
        "Backend bağlantısı kurulamadı veya özellik seçici raporu üretilemedi.",

      fileLabel: "CSV Dosyası",
      filePlaceholder: "Henüz dosya seçilmedi.",
      selectedFile: "Seçilen dosya",
      previewButton: "VERİ ÖNİZLEME",
      previewLoading: "Veri analiz ediliyor...",
      startButton: "PIPELINE’I BAŞLAT",
      resetButton: "SIFIRLA",
      previousStage: "← Önceki Aşamaya Dön",
      downloadReport: "RAPORU İNDİR",
      completeAnalysis: "ANALİZİ TAMAMLA",
      newAnalysis: "YENİ ANALİZ BAŞLAT",
      pipelineCompletedTitle: "Pipeline Tamamlandı",
      pipelineCompletedText:
        "Semi-agentic analiz süreci başarıyla tamamlandı. Veri analizi, özellik seçimi, model optimizasyonu ve açıklanabilirlik raporu üretildi.",

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
      correlationFS: "Correlation-based FS",
      rfeFS: "RFE",
      mrmrFS: "mRMR-inspired FS",
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
    if (currentStage === 3) return `3. ${t.modelOptimizer}`;
    return `4. ${t.xaiAgent}`;
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
    const reportPayload = {
      generatedAt: new Date().toISOString(),
      language,
      fileName: selectedFile?.name ?? null,
      reports: {
        dataPreview: previewData,
        dataAnalyst: analystReport,
        featureSelector: featureReport,
        modelOptimizer: optimizerReport,
        xaiAgent: xaiReport,
      },
    };

    const blob = new Blob([JSON.stringify(reportPayload, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `semi-agentic-report-${Date.now()}.json`;
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
      { icon: "▦", label: t.rowCount, value: previewData.datasetOverview?.rowCount ?? "-" },
      { icon: "▥", label: t.columnCount, value: previewData.datasetOverview?.columnCount ?? "-" },
      { icon: "#", label: t.numericColumnCount, value: previewData.datasetOverview?.numericColumnCount ?? "-" },
      { icon: "▣", label: t.duplicateRows, value: previewData.datasetOverview?.duplicateRows ?? "-" },
      { icon: "−", label: t.totalMissingValues, value: previewData.datasetOverview?.totalMissingValues ?? "-" },
      {
        icon: "⊙",
        label: t.hasClassColumn,
        value: previewData.datasetOverview?.hasClassColumn ? t.exists : t.notExists,
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
    formData.append("language", language);

    try {
      const response = await fetch("http://127.0.0.1:8000/agentic/upload-preview", {
        method: "POST",
        body: formData,
      });

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
    

    try {
      const response = await fetch("http://127.0.0.1:8000/agentic/data-analyst", {
        method: "POST",
        body: formData,
      });

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

    try {
      const response = await fetch("http://127.0.0.1:8000/agentic/feature-selector", {
        method: "POST",
        body: formData,
      });

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
      const response = await fetch("http://127.0.0.1:8000/agentic/model-optimizer", {
        method: "POST",
        body: formData,
      });

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
      const response = await fetch("http://127.0.0.1:8000/agentic/xai-agent", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || "XAI report generation failed.");
      }

      setXaiReport(data.report);
    } catch (error) {
      setXaiError(error.message || "XAI backend error.");
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

  const visiblePreviewColumns = previewData ? previewData.columns.slice(0, 8) : [];

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

  const featureRanking = featureReport
    ? (featureReport.correlationRanking || []).slice(0, 10)
    : [];

      const translateRatioName = (name) => {
    if (language !== "en") return name;

    const ratioMap = {
      "Cari Oran": "Current Ratio",
      "Asit Test Oran": "Acid-Test Ratio",
      "Asit Test Oranı": "Acid-Test Ratio",
      "FAVÖK Marjı": "EBITDA Margin",
      "TB / Ö": "Total Assets / Equity",
      "NFB / Ö": "Net Financial Debt / Equity",
      "TK / Ö": "Total Liabilities / Equity",
      "KVB / Ö": "Short-Term Liabilities / Equity",
      "N / KVB": "Cash / Short-Term Liabilities",
      "NDK / Ö": "Net Profit / Equity",
      "İTTA / TTA": "Receivables / Total Assets",
      "İTTB / TTB": "Receivables / Total Liabilities",
      "MDV / Ö": "Fixed Assets / Equity",
      "H / TA": "Revenue / Total Assets",
      "H / MDV": "Revenue / Fixed Assets",
      "FAVÖK / İDAFG": "EBITDA / Financing Expenses",
      "BK / H": "Gross Profit / Revenue",
      "VÖK / H": "Profit Before Tax / Revenue",
      "NDK / TK": "Net Profit / Total Liabilities",
      "VÖK / Fgid": "Profit Before Tax / Finance Expenses",
      "SM / Stok": "Cost of Sales / Inventory",
      "H / TV": "Revenue / Total Assets",
      "H / Ö": "Revenue / Equity",
    };

    return ratioMap[name] || name;
  };

  const weakFeatures = featureReport
    ? (featureReport.weakFeatures || []).slice(0, 10)
    : [];

  const redundantPairs = featureReport
    ? (featureReport.redundantPairs || []).slice(0, 10)
    : [];

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
                disabled={!previewData && !analystReport && !featureReport && !optimizerReport && !xaiReport}
              >
                {t.downloadReport}
              </button>
            </div>
          )}


          {currentStage === 0 && (
            <>
              <div className="upload-box">
                <label>{t.fileLabel}</label>
                <div className="upload-input-row">
                  <input type="file" accept=".csv" onChange={handleFileChange} />
                  <span>
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

                <button type="button" className="secondary-button" onClick={handleReset}>
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

                  <button type="button" className="secondary-button" onClick={handleReset}>
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
                  <p>
                    {language === "tr"
                      ? "Bu aşamada Correlation FS, RFE ve mRMR-inspired özellik seçimi yöntemleri ayrı ayrı çalıştırılacak; ardından yöntem karşılaştırması ve önerilen nihai strateji üretilecektir."
                      : "At this stage, Correlation FS, RFE, and mRMR-inspired feature selection methods will be executed separately; then method comparison and the recommended final strategy will be generated."}
                  </p>

                  <div className="agent-action-row analyst-action-row">
                    <button
                      type="button"
                      className="primary-button"
                      onClick={handleRunFeatureSelector}
                      disabled={featureLoading}
                    >
                      {featureLoading ? t.featureSelectorLoading : t.runFeatureSelector}
                    </button>

                    <button type="button" className="secondary-button" onClick={handleReset}>
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
                          <strong>{featureReport.recommendedMethod ?? "-"}</strong>
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
                          <strong>{featureReport.totalNumericFeatures ?? "-"}</strong>
                        </div>
                      </div>
                    </div>

                    <p>{featureReport.recommendedReason}</p>
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
                          {(featureReport.methodComparison || []).map((item) => (
                            <tr key={item.method}>
                              <td>{item.method}</td>
                              <td>{item.selectedFeatureCount}</td>
                              <td>{item.interpretability}</td>
                              <td>{item.redundancyControl}</td>
                              <td>{item.stability}</td>
                              <td>{item.thesisCompatibility}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <div className="pro-report-grid">
                    <ReportSection title={t.correlationFS}>
                      <div className="agent-column-grid">
                        {(featureReport.correlationFS?.selectedFeatures || []).map((feature) => (
                          <span key={feature}>{feature}</span>
                        ))}
                      </div>
                    </ReportSection>

                    <ReportSection title={t.rfeFS}>
                      <div className="agent-column-grid">
                        {(featureReport.rfeFS?.selectedFeatures || []).map((feature) => (
                          <span key={feature}>{feature}</span>
                        ))}
                      </div>
                    </ReportSection>
                  </div>

                  <ReportSection title={t.mrmrFS}>
                    <div className="agent-column-grid">
                      {(featureReport.mrmrFS?.selectedFeatures || []).map((feature) => (
                        <span key={feature}>{feature}</span>
                      ))}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.consensusSelectedFeatures}>
                    <div className="agent-column-grid">
                      {(featureReport.consensusSelectedFeatures || []).length > 0 ? (
                        featureReport.consensusSelectedFeatures.map((feature) => (
                          <span key={feature}>{feature}</span>
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
                                <td>{item.feature}</td>
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
                                <td>{item.feature}</td>
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
                                <td>{item.feature}</td>
                                <td>{item.rank}</td>
                                <td>{item.selected ? "Yes" : "No"}</td>
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
                            featureReport.redundantPairs.slice(0, 10).map((item, index) => (
                              <tr key={`${item.featureA}-${item.featureB}-${index}`}>
                                <td>{item.featureA}</td>
                                <td>{item.featureB}</td>
                                <td>{formatNumber(item.correlation)}</td>
                                <td>{item.suggestion}</td>
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
                          <span key={feature}>{feature}</span>
                        ))
                      ) : (
                        <span>-</span>
                      )}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.recommendations}>
                    <div className="agent-note-box">
                      {(featureReport.recommendations || []).map((item, index) => (
                        <p key={index}>• {item}</p>
                      ))}
                    </div>
                  </ReportSection>

                  <div className="agent-next-step-box">
                    <div>
                      <h4>
                        {language === "tr"
                          ? "Özellik Seçimi Aşamasını Onayla"
                          : "Approve Feature Selection Stage"}
                      </h4>
                      <p>
                        {language === "tr"
                          ? "Özellik seçimi raporunu kontrol ettikten sonra Model Optimizer aşamasına geçebilirsiniz."
                          : "After reviewing the Feature Selector report, you can proceed to the Model Optimizer stage."}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => setCurrentStage(3)}
                    >
                      {language === "tr"
                        ? "ONAYLA → MODEL OPTIMIZER"
                        : "APPROVE → MODEL OPTIMIZER"}
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
                      {optimizerLoading ? t.modelOptimizerLoading : t.runModelOptimizer}
                    </button>

                    <button type="button" className="secondary-button" onClick={handleReset}>
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
                          <strong>{optimizerReport.recommendedArchitecture?.name ?? "-"}</strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">⊙</div>
                        <div>
                          <span>{t.metaLearner}</span>
                          <strong>{optimizerReport.recommendedArchitecture?.metaLearner ?? "-"}</strong>
                        </div>
                      </div>

                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">%</div>
                        <div>
                          <span>{t.optimizedThreshold}</span>
                          <strong>{optimizerReport.thresholdOptimization?.optimizedThreshold ?? "-"}</strong>
                        </div>
                      </div>
                    </div>

                    <p>{optimizerReport.recommendedArchitecture?.calibration}</p>
                    <p>{optimizerReport.recommendedArchitecture?.thresholdStrategy}</p>
                  </ReportSection>

                  <div className="pro-report-grid">
                    <ReportSection title={t.preprocessing}>
                      <div className="agent-column-grid">
                        {(optimizerReport.recommendedArchitecture?.preprocessing || []).map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                    </ReportSection>

                    <ReportSection title={t.baseLearners}>
                      <div className="agent-column-grid">
                        {(optimizerReport.recommendedArchitecture?.baseLearners || []).map((item) => (
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
                            optimizerReport.testSetPerformance?.baseHybridFixedThreshold,
                            optimizerReport.testSetPerformance?.optimizedOOFStacking,
                          ].filter(Boolean).map((item) => (
                            <tr key={item.architecture}>
                              <td>{item.architecture}</td>
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

                    <p>{optimizerReport.testSetPerformance?.note}</p>
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
                          {(optimizerReport.baselineModelComparison || []).map((item) => (
                            <tr key={item.model}>
                              <td>{item.model}</td>
                              <td>{item.role}</td>
                              <td>{item.strength}</td>
                              <td>{item.limitation}</td>
                            </tr>
                          ))}
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
                          <strong>{optimizerReport.thresholdOptimization?.defaultThreshold}</strong>
                        </div>
                      </div>
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">✓</div>
                        <div>
                          <span>{t.optimizedThreshold}</span>
                          <strong>{optimizerReport.thresholdOptimization?.optimizedThreshold}</strong>
                        </div>
                      </div>
                      <div className="pro-metric-card">
                        <div className="pro-metric-icon">↔</div>
                        <div>
                          <span>{t.searchRange}</span>
                          <strong>{optimizerReport.thresholdOptimization?.searchRange}</strong>
                        </div>
                      </div>
                    </div>

                    <p>{optimizerReport.thresholdOptimization?.rationale}</p>
                  </ReportSection>

                  <ReportSection title={t.classImbalanceStrategy}>
                    <p>{optimizerReport.classImbalanceStrategy?.diagnosis}</p>
                    <div className="agent-note-box">
                      <p>• {optimizerReport.classImbalanceStrategy?.recommendation}</p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.calibrationReliability}>
                    <p><strong>{t.strategy}:</strong> {optimizerReport.calibrationReliability?.strategy}</p>
                    <p><strong>{t.purpose}:</strong> {optimizerReport.calibrationReliability?.purpose}</p>
                    <p>{optimizerReport.calibrationReliability?.recommendation}</p>
                  </ReportSection>

                  <ReportSection title={t.hyperparameterStrategy}>
                    <p><strong>{t.searchType}:</strong> {optimizerReport.hyperparameterStrategy?.searchType}</p>
                    <p><strong>{t.metaLearner}:</strong> {optimizerReport.hyperparameterStrategy?.metaLearnerCandidate}</p>

                    <div className="agent-column-grid">
                      {(optimizerReport.hyperparameterStrategy?.evaluatedParameters || []).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <p>{optimizerReport.hyperparameterStrategy?.recommendation}</p>
                  </ReportSection>

                  <ReportSection title={t.optimizerRecommendations}>
                    <div className="agent-note-box">
                      {(optimizerReport.optimizerRecommendations || []).map((item, index) => (
                        <p key={index}>• {item}</p>
                      ))}
                    </div>
                  </ReportSection>

                  <ReportSection title={t.finalDecision}>
                    <div className="agent-column-grid">
                      {(optimizerReport.finalDecision?.recommendedPipeline || []).map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>

                    <p>{optimizerReport.finalDecision?.summary}</p>
                  </ReportSection>

                  <div className="agent-next-step-box">
                    <div>
                      <h4>
                        {language === "tr"
                          ? "Model Optimizer Aşamasını Onayla"
                          : "Approve Model Optimizer Stage"}
                      </h4>
                      <p>
                        {language === "tr"
                          ? "Model optimizasyon raporunu kontrol ettikten sonra XAI / Explainability Agent aşamasına geçebilirsiniz."
                          : "After reviewing the Model Optimizer report, you can proceed to the XAI / Explainability Agent stage."}
                      </p>
                    </div>

                    <button
                      type="button"
                      className="primary-button"
                      onClick={() => setCurrentStage(4)}
                    >
                      {language === "tr"
                        ? "ONAYLA → XAI AGENT"
                        : "APPROVE → XAI AGENT"}
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {previewError && <div className="professional-alert error-alert">{previewError}</div>}
          {analystError && <div className="professional-alert error-alert">{analystError}</div>}
          {featureError && <div className="professional-alert error-alert">{featureError}</div>}

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

                    <button type="button" className="secondary-button" onClick={handleReset}>
                      {t.resetButton}
                    </button>
                  </div>
                </ReportSection>
              )}

              {xaiReport && (
                <>
                  <ReportSection title={t.explainabilityMethod}>
                    <div className="agent-note-box">
                      <p><strong>{xaiReport.explainabilityMethod?.name}</strong></p>
                      <p>{xaiReport.explainabilityMethod?.purpose}</p>
                      <p>{xaiReport.explainabilityMethod?.scope}</p>
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
                          {(xaiReport.topInfluentialFeatures || []).map((item) => (
                            <tr key={item.feature}>
                              <td>{item.feature}</td>
                              <td>{formatNumber(item.importanceProxy)}</td>
                              <td>{formatNumber(item.correlation)}</td>
                              <td>{item.direction}</td>
                              <td>{item.interpretation}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiRiskNarrative}>
                    <div className="agent-note-box">
                      <p>{xaiReport.riskNarrative?.summary}</p>
                      <p>{xaiReport.riskNarrative?.analystInterpretation}</p>
                      <p>{xaiReport.riskNarrative?.decisionSupportRole}</p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiConfidence}>
                    <div className="agent-note-box">
                      <p>{xaiReport.confidenceInterpretation?.lowRisk}</p>
                      <p>{xaiReport.confidenceInterpretation?.highRisk}</p>
                      <p>{xaiReport.confidenceInterpretation?.caution}</p>
                    </div>
                  </ReportSection>

                  <ReportSection title={t.xaiRecommendations}>
                    <div className="agent-note-box">
                      {(xaiReport.xaiRecommendations || []).map((item, index) => (
                        <p key={index}>• {item}</p>
                      ))}
                    </div>
                  </ReportSection>

                  <ReportSection title={xaiReport.finalExplanation?.title}>
                    <div className="agent-note-box">
                      <p>{xaiReport.finalExplanation?.summary}</p>
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

          {optimizerError && <div className="professional-alert error-alert">{optimizerError}</div>}
          {xaiError && <div className="professional-alert error-alert">{xaiError}</div>}

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
                      {Object.entries(previewData.classDistribution || {}).map(([key, value]) => (
                        <tr key={key}>
                          <td>{key}</td>
                          <td>{getClassDescription(key)}</td>
                          <td>{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </ReportSection>

                <ReportSection title={t.columns}>
                  <div className="agent-column-grid">
                    {(previewData.columns || []).map((column) => (
                      <span key={column}>{column}</span>
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
                          <th key={column}>{column}</th>
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
                      <strong>{analystReport.datasetOverview?.rowCount ?? "-"}</strong>
                    </div>
                  </div>

                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">▥</div>
                    <div>
                      <span>{t.columnCount}</span>
                      <strong>{analystReport.datasetOverview?.columnCount ?? "-"}</strong>
                    </div>
                  </div>

                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">#</div>
                    <div>
                      <span>{t.numericColumnCount}</span>
                      <strong>{analystReport.datasetOverview?.numericColumnCount ?? "-"}</strong>
                    </div>
                  </div>

                  <div className="pro-metric-card">
                    <div className="pro-metric-icon">−</div>
                    <div>
                      <span>{t.totalMissingValues}</span>
                      <strong>{analystReport.datasetOverview?.totalMissingValues ?? "-"}</strong>
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
                    {Object.entries(analystReport.classDistribution || {}).map(([key, value]) => (
                      <tr key={key}>
                        <td>{key}</td>
                        <td>{getClassDescription(key)}</td>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </ReportSection>

              <ReportSection title={t.missingValueAnalysis}>
                <p>
                  {language === "tr"
                    ? `Toplam eksik değer sayısı: ${analystReport.datasetOverview?.totalMissingValues ?? "-"}. Eksik değer yapısı modelleme öncesinde kontrol edilmelidir.`
                    : `Total missing values: ${analystReport.datasetOverview?.totalMissingValues ?? "-"}. Missing value structure should be checked before modeling.`}
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
                    <p key={index}>• {item}</p>
                  ))}
                </div>
              </ReportSection>

              <div className="agent-next-step-box">
                <div>
                  <h4>
                    {language === "tr"
                      ? "Veri Analisti Aşamasını Onayla"
                      : "Approve Data Analyst Stage"}
                  </h4>
                  <p>
                    {language === "tr"
                      ? "Veri analisti raporunu kontrol ettikten sonra özellik seçimi aşamasına geçebilirsiniz."
                      : "After reviewing the Data Analyst report, you can proceed to the feature selection stage."}
                  </p>
                </div>

                <button
                  type="button"
                  className="primary-button"
                  onClick={() => setCurrentStage(2)}
                >
                  {language === "tr"
                    ? "ONAYLA → ÖZELLİK SEÇİCİ"
                    : "APPROVE → FEATURE SELECTOR"}
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