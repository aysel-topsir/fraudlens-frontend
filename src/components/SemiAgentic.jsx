import { useState } from "react";

function SemiAgentic({ language = "tr" }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);

  const [previewData, setPreviewData] = useState(null);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [previewError, setPreviewError] = useState("");

  const [analystInstruction, setAnalystInstruction] = useState("");
  const [analystLoading, setAnalystLoading] = useState(false);
  const [analystError, setAnalystError] = useState("");
  const [analystReport, setAnalystReport] = useState(null);

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
      analystInstruction: "Veri Analisti Talimatı",
      analystPlaceholder:
        "Örn: Eksik değerleri analiz et, sınıf dağılımını yorumla, aykırı değer kontrolü yap...",
      runAnalyst: "VERİ ANALİSTİNİ ÇALIŞTIR",
      analystLoading: "Veri analisti raporu üretiliyor...",
      analystReportTitle: "Veri Analisti Raporu",

      fileLabel: "CSV Dosyası",
      filePlaceholder: "Henüz dosya seçilmedi.",
      selectedFile: "Seçilen dosya",
      previewButton: "VERİ ÖNİZLEME",
      previewLoading: "Veri analiz ediliyor...",
      startButton: "PIPELINE’I BAŞLAT",
      resetButton: "SIFIRLA",

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

      descriptiveStatistics: "Tanımlayıcı İstatistikler",
      outliers: "Aykırı Değerler",
      targetCorrelations: "Hedef Değişken Korelasyonları",
      featureRedundancy: "Özellik Tekrarı / Yüksek Korelasyon",
      recommendations: "Öneriler",

      datasetOverview: "1. Dataset Overview",
      classBalance: "2. Class Balance",
      missingValueAnalysis: "3. Missing Value Analysis",
      outlierDetection: "4. Outlier Detection",
      numericalFeatureSummary: "5. Numerical Feature Summary",
      correlationAnalysis: "6. Target Correlation Analysis",
      redundancyAnalysis: "7. Feature Redundancy Analysis",
      preprocessingRecommendations: "8. Preprocessing Recommendations",

      variable: "Değişken",
      average: "Ortalama",
      stdDeviation: "Std. Sapma",
      min: "Min",
      max: "Maks",
      outlierCount: "Aykırı Gözlem Sayısı",
      correlation: "Korelasyon",
      featureA: "Özellik A",
      featureB: "Özellik B",

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
      analystInstruction: "Data Analyst Instruction",
      analystPlaceholder:
        "Example: Analyze missing values, interpret class distribution, perform outlier analysis...",
      runAnalyst: "RUN DATA ANALYST",
      analystLoading: "Generating Data Analyst report...",
      analystReportTitle: "Data Analyst Report",

      fileLabel: "CSV File",
      filePlaceholder: "No file selected yet.",
      selectedFile: "Selected file",
      previewButton: "DATA PREVIEW",
      previewLoading: "Analyzing data...",
      startButton: "START PIPELINE",
      resetButton: "RESET",

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

      descriptiveStatistics: "Descriptive Statistics",
      outliers: "Outliers",
      targetCorrelations: "Target Correlations",
      featureRedundancy: "Feature Redundancy",
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
      average: "Mean",
      stdDeviation: "Std. Deviation",
      min: "Min",
      max: "Max",
      outlierCount: "Outlier Count",
      correlation: "Correlation",
      featureA: "Feature A",
      featureB: "Feature B",

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

  function formatNumber(value) {
    if (typeof value === "number") return Number(value).toFixed(4);
    return value ?? "-";
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

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/agentic/upload-preview",
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
    formData.append("instruction", analystInstruction);

    try {
      const response = await fetch(
        "http://127.0.0.1:8000/agentic/data-analyst",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok || data.status !== "success") {
        throw new Error(data.message || t.analystBackendError);
      }

      setAnalystReport(data.report);
    } catch (error) {
      setAnalystError(error.message || t.analystBackendError);
    } finally {
      setAnalystLoading(false);
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

          <h2>{currentStage === 0 ? t.uploadTitle : t.analystTitle}</h2>

          <p className="description">
            {currentStage === 0 ? t.uploadDescription : t.analystDescription}
          </p>

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
              <ReportSection title={t.analystInstruction}>
                <textarea
                  className="agent-textarea"
                  value={analystInstruction}
                  onChange={(event) =>
                    setAnalystInstruction(event.target.value)
                  }
                  placeholder={t.analystPlaceholder}
                />

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

          {previewError && (
            <div className="professional-alert error-alert">
              {previewError}
            </div>
          )}

          {analystError && (
            <div className="professional-alert error-alert">
              {analystError}
            </div>
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
                  {language === "tr"
                    ? `Toplam eksik değer sayısı: ${
                        analystReport.datasetOverview?.totalMissingValues ?? "-"
                      }. Eksik değer yapısı modelleme öncesinde kontrol edilmelidir.`
                    : `Total missing values: ${
                        analystReport.datasetOverview?.totalMissingValues ?? "-"
                      }. Missing value structure should be checked before modeling.`}
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
                        <td>{column}</td>
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
                          <td>{column}</td>
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
                        <td>{column}</td>
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
                          <td>{item.featureA}</td>
                          <td>{item.featureB}</td>
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