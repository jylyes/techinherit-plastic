/* Localized material catalog. Shared grade identifiers and reference values. */
window.TechMaterials={
  "categories": [
    {
      "id": "transparent-nylon",
      "name": "透明ナイロン12",
      "en": "Transparent nylon 12",
      "intro": "光の透過性、靭性、化学的耐性、成形寸法を考慮した透明部分ナイロンソリューションを選択してください。",
      "image": "materials/nylon-tn900.webp",
      "thumbnail": "materials/nylon-tn900-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "long-chain-nylon",
      "name": "長鎖ナイロン",
      "en": "Long-chain nylon",
      "intro": "ロングチェーンナイロンは水分の吸収、次元安定性、化学的曝露、処理を通じて探求します。",
      "image": "materials/nylon-pa610.webp",
      "thumbnail": "materials/nylon-pa610-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "bio-based-nylon",
      "name": "バイオベースナイロン",
      "en": "Bio-based nylon",
      "intro": "バイオベースの材料の選択肢を部品要件、加工、プロジェクト文書と一致させます。",
      "image": "materials/nylon-tn955.webp",
      "thumbnail": "materials/nylon-tn955-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "conductive",
      "name": "導電性・帯電防止材料",
      "en": "Conductive & antistatic",
      "image": "materials/esd-pa-101.webp",
      "intro": "抵抗ターゲット、試験環境、条件を含めて静的制御と機械的挙動のバランスを取ること。",
      "thumbnail": "materials/esd-pa-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "carbon",
      "name": "炭素繊維複合材料",
      "en": "Carbon-fiber composites",
      "image": "materials/cf-pa6.webp",
      "intro": "軽量設計、剛性、構造用途のためのカーボンファイバー強化樹脂システムを探求します。",
      "thumbnail": "materials/cf-pa6-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-specific",
      "name": "業界別専用材料",
      "en": "Industry-specific materials",
      "image": "industry/chair-base.webp",
      "thumbnail": "industry/chair-base-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "intro": "業界のサービス条件や用途要件に合わせた材料選択および改造ソリューション。"
    }
  ],
  "products": [
    {
      "id": "nylon-tn900",
      "name": "Techinherit TN900",
      "grade": "TN900",
      "catalogType": "grade",
      "category": "transparent-nylon",
      "categories": [
        "transparent-nylon"
      ],
      "family": "PA12",
      "features": [
        "光学的鮮明さ",
        "タフネスとレジリエンス",
        "化学耐性"
      ],
      "desc": "透明ナイロン12は、透明構造、電子機器、工業製品の光学的クリアさ、耐久性、耐久性を重視する選択用です。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "light-transmittance",
          "label": "光の透過",
          "sourceLabel": "光の透過",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "型の収縮、平行",
          "sourceLabel": "型の収縮、平行",
          "value": "0.4 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 ·標本の状態、温度、湿度、完全な試験条件を確認する"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "モールディングの収縮、横方向",
          "sourceLabel": "モールディングの収縮、横方向",
          "value": "0.5 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 ·標本の状態、温度、湿度、完全な試験条件を確認する"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "引張率",
          "value": "1500 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "160 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "曲げ率",
          "value": "1500 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "65 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "シャーピー衝突、ノッチ状態確認",
          "sourceLabel": "シャーピー衝突、ノッチ状態確認",
          "value": "18 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "melt-flow-reference",
          "label": "融解流、条件確認",
          "sourceLabel": "融解流、条件確認",
          "value": "3 g/min",
          "available": true,
          "group": "processing",
          "condition": "溶融流法、温度、負荷、時間単位を確認してください"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT(1.8 MPa)",
          "sourceLabel": "HDT(1.8 MPa)",
          "value": "105 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "HDT(0.45 MPa)",
          "value": "120 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 ·厚さ、色、該当する修正を確認してください"
        }
      ],
      "profile": {
        "parts": "クリアハウジング、光学部品、電子部品およびパッケージ部品",
        "focus": "透明ナイロン12は、透明構造、電子機器、工業製品の光学的クリアさ、耐久性、耐久性を重視する選択用です。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "光学と外観:実際の厚さで透過、ヘイズ、表面を確認する",
          "化学物質と応力:組み立て状態における洗浄剤と応力亀裂の確認",
          "温度と衝撃:熱曝露、ドロップ、耐用年数の検証"
        ]
      },
      "image": "materials/nylon-tn900.webp",
      "thumbnail": "materials/nylon-tn900-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-tn915",
      "name": "Techinherit TN915",
      "grade": "TN915",
      "catalogType": "grade",
      "category": "transparent-nylon",
      "categories": [
        "transparent-nylon"
      ],
      "family": "透明PA",
      "features": [
        "光学的鮮明さ",
        "タフネスとレジリエンス",
        "化学耐性"
      ],
      "desc": "自動車、電子機器、パッケージング用途向けに、剛性、低水分吸収性、化学耐性を備えた非晶質透明ナイロンです。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1020 kg/m³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "water-absorption",
          "label": "水分吸収",
          "sourceLabel": "水分吸収",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "light-transmittance",
          "label": "光の透過",
          "sourceLabel": "光の透過",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "型の収縮、平行",
          "sourceLabel": "型の収縮、平行",
          "value": "0.2 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4、2577 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "モールディングの収縮、横方向",
          "sourceLabel": "モールディングの収縮、横方向",
          "value": "0.3 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4、2577 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "引張率",
          "value": "1600 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "150 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "曲げ率",
          "value": "1580 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "70 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "シャーピー衝突、ノッチ状態確認",
          "sourceLabel": "シャーピー衝突、ノッチ状態確認",
          "value": "30 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "melt-flow-reference",
          "label": "融解流、条件確認",
          "sourceLabel": "融解流、条件確認",
          "value": "2.8 g/min",
          "available": true,
          "group": "processing",
          "condition": "溶融流法、温度、負荷、時間単位を確認してください"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT(1.8 MPa)",
          "sourceLabel": "HDT(1.8 MPa)",
          "value": "125 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "HDT(0.45 MPa)",
          "value": "135 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 ·厚さ、色、該当する修正を確認してください"
        }
      ],
      "profile": {
        "parts": "クリアハウジング、光学部品、電子部品およびパッケージ部品",
        "focus": "自動車、電子機器、パッケージング用途向けに、剛性、低水分吸収性、化学耐性を備えた非晶質透明ナイロンです。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "光学と外観:実際の厚さで透過、ヘイズ、表面を確認する",
          "化学物質と応力:組み立て状態における洗浄剤と応力亀裂の確認",
          "温度と衝撃:熱曝露、ドロップ、耐用年数の検証"
        ]
      },
      "image": "materials/nylon-tn915.webp",
      "thumbnail": "materials/nylon-tn915-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-tn926",
      "name": "Techinherit TN926",
      "grade": "TN926",
      "catalogType": "grade",
      "category": "transparent-nylon",
      "categories": [
        "transparent-nylon"
      ],
      "family": "PA12",
      "features": [
        "光学的鮮明さ",
        "タフネスとレジリエンス",
        "化学耐性"
      ],
      "desc": "光学部品、クリアハウジング、工業部品の靭性および耐ストレスクラインを評価するための高透過性透明ナイロン12。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "light-transmittance",
          "label": "光の透過",
          "sourceLabel": "光の透過",
          "value": "≥92 %",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "型の収縮、平行",
          "sourceLabel": "型の収縮、平行",
          "value": "0.4 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 ·標本の状態、温度、湿度、完全な試験条件を確認する"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "モールディングの収縮、横方向",
          "sourceLabel": "モールディングの収縮、横方向",
          "value": "0.5 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 ·標本の状態、温度、湿度、完全な試験条件を確認する"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "62 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "引張率",
          "value": "1580 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "170 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "曲げ率",
          "value": "1580 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "72 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "シャーピー衝突、ノッチ状態確認",
          "sourceLabel": "シャーピー衝突、ノッチ状態確認",
          "value": "18 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "melt-flow-reference",
          "label": "融解流、条件確認",
          "sourceLabel": "融解流、条件確認",
          "value": "3 g/min",
          "available": true,
          "group": "processing",
          "condition": "溶融流法、温度、負荷、時間単位を確認してください"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT(1.8 MPa)",
          "sourceLabel": "HDT(1.8 MPa)",
          "value": "105 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "HDT(0.45 MPa)",
          "value": "120 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 ·厚さ、色、該当する修正を確認してください"
        }
      ],
      "profile": {
        "parts": "クリアハウジング、光学部品、電子部品およびパッケージ部品",
        "focus": "光学部品、クリアハウジング、工業部品の靭性および耐ストレスクラインを評価するための高透過性透明ナイロン12。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "光学と外観:実際の厚さで透過、ヘイズ、表面を確認する",
          "化学物質と応力:組み立て状態における洗浄剤と応力亀裂の確認",
          "温度と衝撃:熱曝露、ドロップ、耐用年数の検証"
        ]
      },
      "image": "materials/nylon-tn926.webp",
      "thumbnail": "materials/nylon-tn926-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-tn955",
      "name": "Techinherit TN955",
      "grade": "TN955",
      "catalogType": "grade",
      "category": "transparent-nylon",
      "categories": [
        "transparent-nylon",
        "bio-based-nylon"
      ],
      "family": "透明PA",
      "features": [
        "バイオベースの選択肢",
        "光学的鮮明さ",
        "タフネスとレジリエンス"
      ],
      "desc": "自動車、電子機器、高級包装部品における剛性、低水分吸収性、加水分解耐性を評価するための生体ベース透明ナイロンです。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "light-transmittance",
          "label": "光の透過",
          "sourceLabel": "光の透過",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "型の収縮、平行",
          "sourceLabel": "型の収縮、平行",
          "value": "0.6 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4、2577 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "モールディングの収縮、横方向",
          "sourceLabel": "モールディングの収縮、横方向",
          "value": "0.8 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4、2577 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "引張率",
          "value": "1680 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "160 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "曲げ率",
          "value": "1589 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "シャーピー衝突、ノッチ状態確認",
          "sourceLabel": "シャーピー衝突、ノッチ状態確認",
          "value": "15 kJ/㎡",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "melt-flow-reference",
          "label": "融解流、条件確認",
          "sourceLabel": "融解流、条件確認",
          "value": "3 g/min",
          "available": true,
          "group": "processing",
          "condition": "溶融流法、温度、負荷、時間単位を確認してください"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT(1.8 MPa)",
          "sourceLabel": "HDT(1.8 MPa)",
          "value": "120 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "HDT(0.45 MPa)",
          "value": "135 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "可燃性(UL 94)",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 ·1.5 mm ·厚さ、色、該当する修正を確認してください"
        }
      ],
      "profile": {
        "parts": "クリアハウジング、光学部品、電子部品およびパッケージ部品",
        "focus": "自動車、電子機器、高級包装部品における剛性、低水分吸収性、加水分解耐性を評価するための生体ベース透明ナイロンです。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "光学と外観:実際の厚さで透過、ヘイズ、表面を確認する",
          "化学物質と応力:組み立て状態における洗浄剤と応力亀裂の確認",
          "温度と衝撃:熱曝露、ドロップ、耐用年数の検証"
        ]
      },
      "image": "materials/nylon-tn955.webp",
      "thumbnail": "materials/nylon-tn955-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-tn956",
      "name": "Techinherit TN956",
      "grade": "TN956",
      "catalogType": "grade",
      "category": "transparent-nylon",
      "categories": [
        "transparent-nylon"
      ],
      "family": "PA12",
      "features": [
        "光学的鮮明さ",
        "タフネスとレジリエンス",
        "化学耐性"
      ],
      "desc": "容器、電子機器、光学部品の耐熱性、耐久性、透明な外観を備えた透明ナイロン12。意図された用途に応じた接触性を確認します。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "2 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "light-transmittance",
          "label": "光の透過",
          "sourceLabel": "光の透過",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "型の収縮、平行",
          "sourceLabel": "型の収縮、平行",
          "value": "0.3 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 ·標本の状態、温度、湿度、完全な試験条件を確認する"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "モールディングの収縮、横方向",
          "sourceLabel": "モールディングの収縮、横方向",
          "value": "0.4 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 ·標本の状態、温度、湿度、完全な試験条件を確認する"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "引張率",
          "value": "1600 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "150 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "曲げ率",
          "value": "1600 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "70 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "シャーピー衝突、ノッチ状態確認",
          "sourceLabel": "シャーピー衝突、ノッチ状態確認",
          "value": "30 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "melt-flow-reference",
          "label": "融解流、条件確認",
          "sourceLabel": "融解流、条件確認",
          "value": "2.8 g/min",
          "available": true,
          "group": "processing",
          "condition": "溶融流法、温度、負荷、時間単位を確認してください"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT(1.8 MPa)",
          "sourceLabel": "HDT(1.8 MPa)",
          "value": "125 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "HDT(0.45 MPa)",
          "value": "135 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 ·試料の状態、温度、湿度および完全な試験条件を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 ·厚さ、色、該当する修正を確認してください"
        }
      ],
      "profile": {
        "parts": "クリアハウジング、光学部品、電子部品およびパッケージ部品",
        "focus": "容器、電子機器、光学部品の耐熱性、耐久性、透明な外観を備えた透明ナイロン12。意図された用途に応じた接触性を確認します。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "光学と外観:実際の厚さで透過、ヘイズ、表面を確認する",
          "化学物質と応力:組み立て状態における洗浄剤と応力亀裂の確認",
          "温度と衝撃:熱曝露、ドロップ、耐用年数の検証"
        ]
      },
      "image": "materials/nylon-tn956.webp",
      "thumbnail": "materials/nylon-tn956-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-pa610",
      "name": "Techinherit PA610",
      "grade": "PA610",
      "catalogType": "grade",
      "category": "long-chain-nylon",
      "categories": [
        "long-chain-nylon",
        "bio-based-nylon"
      ],
      "family": "PA610",
      "features": [
        "バイオベースの選択肢",
        "水分吸収が少ない",
        "次元安定性"
      ],
      "desc": "モノフィラメント、ケーブルコーティング、機械部品において、低水吸収、低温靭性、寸法安定性を実現するバイオベースのロングチェーンナイロンです。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "粘度オプション",
          "sourceLabel": "粘度オプション",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "融点",
          "value": "224 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 ·試料の状態、温度、湿度、および完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "58 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "＞100 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "65 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "pellet-count",
          "label": "ペレットカウント",
          "sourceLabel": "ペレットカウント",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "loss-on-drying",
          "label": "乾燥の損失",
          "sourceLabel": "乾燥の損失",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.08 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "ノッチなし衝撃強度",
          "sourceLabel": "ノッチなし衝撃強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "6 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        }
      ],
      "profile": {
        "parts": "モノフィラメント、チューブ、ケーブルコーティング、計器および機械部品",
        "focus": "モノフィラメント、ケーブルコーティング、機械部品において、低水吸収、低温靭性、寸法安定性を実現するバイオベースのロングチェーンナイロンです。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "水分の取り込みと寸法:乾燥した基準と調整された臨界寸法を比較する",
          "冷温および荷重:目標温度での衝撃と荷重試験",
          "化学品および加工:油の曝露、収縮、処理ウィンドウの確認"
        ]
      },
      "image": "materials/nylon-pa610.webp",
      "thumbnail": "materials/nylon-pa610-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-pa612",
      "name": "Techinherit PA612",
      "grade": "PA612",
      "catalogType": "grade",
      "category": "long-chain-nylon",
      "categories": [
        "long-chain-nylon"
      ],
      "family": "PA612",
      "features": [
        "水分吸収が少ない",
        "次元安定性",
        "油抵抗"
      ],
      "desc": "耐久性、耐油性、そしてブラシ、モノフィラメント、ケーブルコーティング、計器部品などの電気用途に用いられるロングチェーンナイロンです。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "粘度オプション",
          "sourceLabel": "粘度オプション",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "融点",
          "value": "218 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 ·試料の状態、温度、湿度、および完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "58 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "＞150 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "62 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "pellet-count",
          "label": "ペレットカウント",
          "sourceLabel": "ペレットカウント",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "loss-on-drying",
          "label": "乾燥の損失",
          "sourceLabel": "乾燥の損失",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.06 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "ノッチなし衝撃強度",
          "sourceLabel": "ノッチなし衝撃強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "6 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "2.8 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        }
      ],
      "profile": {
        "parts": "モノフィラメント、チューブ、ケーブルコーティング、計器および機械部品",
        "focus": "耐久性、耐油性、そしてブラシ、モノフィラメント、ケーブルコーティング、計器部品などの電気用途に用いられるロングチェーンナイロンです。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "水分の取り込みと寸法:乾燥した基準と調整された臨界寸法を比較する",
          "冷温および荷重:目標温度での衝撃と荷重試験",
          "化学品および加工:油の曝露、収縮、処理ウィンドウの確認"
        ]
      },
      "image": "materials/nylon-pa612.webp",
      "thumbnail": "materials/nylon-pa612-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-pa1010",
      "name": "Techinherit PA1010",
      "grade": "PA1010",
      "catalogType": "grade",
      "category": "long-chain-nylon",
      "categories": [
        "long-chain-nylon",
        "bio-based-nylon"
      ],
      "family": "PA1010",
      "features": [
        "バイオベースの選択肢",
        "水分吸収が少ない",
        "次元安定性"
      ],
      "desc": "自動車、計器、工業部品において、耐久性、強度、低水分吸収、収縮制御を実現するバイオベースのロングチェーンナイロンです。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "粘度オプション",
          "sourceLabel": "粘度オプション",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "融点",
          "value": "200 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 ·試料の状態、温度、湿度、および完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "55 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "＞160 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "pellet-count",
          "label": "ペレットカウント",
          "sourceLabel": "ペレットカウント",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "loss-on-drying",
          "label": "乾燥の損失",
          "sourceLabel": "乾燥の損失",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.04 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "ノッチなし衝撃強度",
          "sourceLabel": "ノッチなし衝撃強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "10 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "2.5 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        }
      ],
      "profile": {
        "parts": "モノフィラメント、チューブ、ケーブルコーティング、計器および機械部品",
        "focus": "自動車、計器、工業部品において、耐久性、強度、低水分吸収、収縮制御を実現するバイオベースのロングチェーンナイロンです。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "水分の取り込みと寸法:乾燥した基準と調整された臨界寸法を比較する",
          "冷温および荷重:目標温度での衝撃と荷重試験",
          "化学品および加工:油の曝露、収縮、処理ウィンドウの確認"
        ]
      },
      "image": "materials/nylon-pa1010.webp",
      "thumbnail": "materials/nylon-pa1010-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-pa1012",
      "name": "Techinherit PA1012",
      "grade": "PA1012",
      "catalogType": "grade",
      "category": "long-chain-nylon",
      "categories": [
        "long-chain-nylon"
      ],
      "family": "PA1012",
      "features": [
        "水分吸収が少ない",
        "次元安定性",
        "油抵抗"
      ],
      "desc": "低水分吸収、耐油性、寸法安定性を備えたロングチェーンナイロン製で、押出成形、射出成形、吹き成形、チューブ加工に適しています。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "粘度オプション",
          "sourceLabel": "粘度オプション",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "融点",
          "value": "192 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 ·試料の状態、温度、湿度、および完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "52 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "＞200 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "58 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "pellet-count",
          "label": "ペレットカウント",
          "sourceLabel": "ペレットカウント",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "loss-on-drying",
          "label": "乾燥の損失",
          "sourceLabel": "乾燥の損失",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "ノッチなし衝撃強度",
          "sourceLabel": "ノッチなし衝撃強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "15 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "2 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        }
      ],
      "profile": {
        "parts": "モノフィラメント、チューブ、ケーブルコーティング、計器および機械部品",
        "focus": "低水分吸収、耐油性、寸法安定性を備えたロングチェーンナイロン製で、押出成形、射出成形、吹き成形、チューブ加工に適しています。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "水分の取り込みと寸法:乾燥した基準と調整された臨界寸法を比較する",
          "冷温および荷重:目標温度での衝撃と荷重試験",
          "化学品および加工:油の曝露、収縮、処理ウィンドウの確認"
        ]
      },
      "image": "materials/nylon-pa1012.webp",
      "thumbnail": "materials/nylon-pa1012-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "nylon-pa1212",
      "name": "Techinherit PA1212",
      "grade": "PA1212",
      "catalogType": "grade",
      "category": "long-chain-nylon",
      "categories": [
        "long-chain-nylon"
      ],
      "family": "PA1212",
      "features": [
        "水分吸収が少ない",
        "次元安定性",
        "油抵抗"
      ],
      "desc": "低温靭性、低水分吸収率、寸法安定性を備えたロングチェーンナイロン製材で、押出成形、射出成形、吹き成形、粉末加工に適しています。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "粘度オプション",
          "sourceLabel": "粘度オプション",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "融点",
          "value": "180-190 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 ·試料の状態、温度、湿度、および完全な試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "≥43 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "休憩時の伸長",
          "value": "＞298 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "屈曲強度",
          "value": "≥34 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        },
        {
          "key": "pellet-count",
          "label": "ペレットカウント",
          "sourceLabel": "ペレットカウント",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "loss-on-drying",
          "label": "乾燥の損失",
          "sourceLabel": "乾燥の損失",
          "value": "＜1.0 ‰",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "density",
          "label": "密度",
          "sourceLabel": "密度",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "検査方法と検体の状態を確認してください"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "ノッチなし衝撃強度",
          "sourceLabel": "ノッチなし衝撃強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "20 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "ノッチ状態、衝撃法、試料の状態を確認しろ"
        },
        {
          "key": "saturated-water-absorption",
          "label": "飽和水の吸収",
          "sourceLabel": "飽和水の吸収",
          "value": "2 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 ·試料の状態、温度、湿度、完全な試験条件を確認してください"
        }
      ],
      "profile": {
        "parts": "モノフィラメント、チューブ、ケーブルコーティング、計器および機械部品",
        "focus": "低温靭性、低水分吸収率、寸法安定性を備えたロングチェーンナイロン製材で、押出成形、射出成形、吹き成形、粉末加工に適しています。",
        "process": "グレードごとの乾燥、溶融、型の設定を確認し、試験中の収縮、外観、寸法を確認します。",
        "reinforcement": "補強ナイロン;等級の配合を確認する",
        "tests": [
          "水分の取り込みと寸法:乾燥した基準と調整された臨界寸法を比較する",
          "冷温および荷重:目標温度での衝撃と荷重試験",
          "化学品および加工:油の曝露、収縮、処理ウィンドウの確認"
        ]
      },
      "image": "materials/nylon-pa1212.webp",
      "thumbnail": "materials/nylon-pa1212-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "pps-cf",
      "name": "PPS CF",
      "category": "carbon",
      "family": "PPS",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PPSに基づくカーボンファイバー複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/special-engineering-plastics/32.html",
      "image": "materials/pps-cf.webp",
      "thumbnail": "materials/pps-cf-small.webp",
      "imageWidth": 447,
      "imageHeight": 450,
      "thumbnailWidth": 397,
      "reference": {
        "source": "https://www.techinherit.com/special-engineering-plastics/32.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "160 - 220 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "160 - 220 MPa"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "15000 - 22000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "15000 - 22000 MPa"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "1.5 - 3%",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "1.5 - 3%"
        },
        {
          "key": "flexural-strength",
          "label": "屈曲強度",
          "sourceLabel": "Flexural Strength",
          "value": "250 -350 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "250 -350 MPa"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "14000 - 20000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "14000 - 20000 MPa"
        },
        {
          "key": "rockwell-hardness",
          "label": "ロックウェル硬度",
          "sourceLabel": "Hardness (Rockwell)",
          "value": "M90 - M120",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "M90 - M120"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "280 - 290 °C",
          "available": true,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "280 - 290 °C"
        },
        {
          "key": "hdt-1-82-mpa",
          "label": "HDT(1.82 MPa)",
          "sourceLabel": "HDT (1.82 MPa)",
          "value": "260 - 280 °C",
          "available": true,
          "group": "thermal",
          "condition": "プロパティ名に記載された負荷;その他の方法や条件付けの詳細は記載されていません。",
          "sourceValue": "260 - 280 °C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Use Temp",
          "value": "200 - 240 °C",
          "available": true,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "200 - 240 °C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "V-0",
          "available": true,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "V-0"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "120 - 150°C",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "120 - 150°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "3 - 5 hrs",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "3 - 5 hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "300 - 340 °C",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "300 - 340 °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "120 - 160 °C",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "120 - 160 °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "100 - 180 MPa",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "100 - 180 MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pc",
      "name": "カーボンファイバー強化PC",
      "category": "carbon",
      "family": "PC",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PCに基づく炭素繊維複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/44.html",
      "image": "materials/cf-pc.webp",
      "thumbnail": "materials/cf-pc-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/44.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-etfe",
      "name": "カーボンファイバー強化ETFE",
      "category": "carbon",
      "family": "ETFE",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "ETFEに基づく炭素繊維複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/43.html",
      "image": "materials/cf-etfe.webp",
      "thumbnail": "materials/cf-etfe-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/43.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pa6",
      "name": "カーボンファイバー強化PA6",
      "category": "carbon",
      "family": "PA6",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PA6に基づく炭素繊維複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/42.html",
      "image": "materials/cf-pa6.webp",
      "thumbnail": "materials/cf-pa6-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/42.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pa66",
      "name": "カーボンファイバー強化PA66",
      "category": "carbon",
      "family": "PA66",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PA66に基づく炭素繊維複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/41.html",
      "image": "materials/cf-pa66.webp",
      "thumbnail": "materials/cf-pa66-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/41.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pa12",
      "name": "カーボンファイバー強化PA12",
      "category": "carbon",
      "family": "PA12",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PA12に基づく炭素繊維複合材の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/40.html",
      "image": "materials/cf-pa12.webp",
      "thumbnail": "materials/cf-pa12-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/40.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-peek",
      "name": "カーボンファイバー強化PEEK",
      "category": "carbon",
      "family": "PEEK",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PEEKに基づく炭素繊維複合材料の方向性。繊維分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/39.html",
      "image": "materials/cf-peek.webp",
      "thumbnail": "materials/cf-peek-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/39.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pvdf",
      "name": "カーボンファイバー強化PVDF",
      "category": "carbon",
      "family": "PVDF",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PVDFに基づく炭素繊維複合材の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/38.html",
      "image": "materials/cf-pvdf.webp",
      "thumbnail": "materials/cf-pvdf-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/38.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pei",
      "name": "カーボンファイバー強化PEI",
      "category": "carbon",
      "family": "PEI",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PEIに基づくカーボンファイバー複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/37.html",
      "image": "materials/cf-pei.webp",
      "thumbnail": "materials/cf-pei-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/37.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "融点",
          "sourceLabel": "Melting Point",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT(負荷不明)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "Melt Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "cf-pfa",
      "name": "カーボンファイバー強化PFA",
      "category": "carbon",
      "family": "PFA",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "PFAに基づくカーボンファイバー複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/36.html",
      "image": "materials/cf-pfa.webp",
      "thumbnail": "materials/cf-pfa-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/36.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "--"
        },
        {
          "key": "melting-point-pa66",
          "label": "融点(PA66)",
          "sourceLabel": "Melting Point (PA66)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-pa6",
          "label": "融点(PA6)",
          "sourceLabel": "Melting Point (PA6)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 0.45 MPa",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "プロパティ名に記載された負荷;その他の方法や条件付けの詳細は記載されていません。",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-1-82-mpa",
          "label": "HDT(1.82 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 1.82 MPa",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "プロパティ名に記載された負荷;その他の方法や条件付けの詳細は記載されていません。",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature-pa66",
          "label": "融点温度(PA66)",
          "sourceLabel": "Melt Temperature (PA66)",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "long-carbon",
      "name": "ロングカーボンファイバー複合材料",
      "category": "carbon",
      "family": "熱可塑性樹脂",
      "features": [
        "カーボンファイバー補強",
        "軽量設計",
        "高い剛性"
      ],
      "desc": "熱可塑性樹脂に基づくカーボンファイバー複合材料の方向性。繊維の分布、構造設計、加工を考慮し、軽量性と剛性の要件を同時に評価します。",
      "source": "https://www.techinherit.com/Carbon%20fiber%20materials/35.html",
      "image": "materials/long-carbon.webp",
      "thumbnail": "materials/long-carbon-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "reference": {
        "source": "https://www.techinherit.com/Carbon%20fiber%20materials/35.html",
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "Tensile Strength",
          "value": "200 - 300 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "200 - 300 MPa"
        },
        {
          "key": "tensile-modulus",
          "label": "引張率",
          "sourceLabel": "Tensile Modulus",
          "value": "15,000–35,000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "15,000–35,000 MPa"
        },
        {
          "key": "elongation-at-break",
          "label": "休憩時の伸長",
          "sourceLabel": "Elongation at Break",
          "value": "1-3%",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "1-3%"
        },
        {
          "key": "flexural-modulus",
          "label": "曲げ率",
          "sourceLabel": "Flexural Modulus",
          "value": "15,000–30,000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "試験方法、試験体の状態、条件付けは明記されていません",
          "sourceValue": "15,000–30,000 MPa"
        },
        {
          "key": "melting-point-pa66",
          "label": "融点(PA66)",
          "sourceLabel": "Melting Point (PA66)",
          "value": "255 - 265 °C",
          "available": true,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "255 - 265 °C"
        },
        {
          "key": "melting-point-pa6",
          "label": "融点(PA6)",
          "sourceLabel": "Melting Point (PA6)",
          "value": "220 - 225 °C",
          "available": true,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "220 - 225 °C"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT(0.45 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 0.45 MPa",
          "value": "200–250°C",
          "available": true,
          "group": "thermal",
          "condition": "プロパティ名に記載された負荷;その他の方法や条件付けの詳細は記載されていません。",
          "sourceValue": "200–250°C"
        },
        {
          "key": "hdt-1-82-mpa",
          "label": "HDT(1.82 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 1.82 MPa",
          "value": "180–230°C",
          "available": true,
          "group": "thermal",
          "condition": "プロパティ名に記載された負荷;その他の方法や条件付けの詳細は記載されていません。",
          "sourceValue": "180–230°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "連続使用温度",
          "sourceLabel": "Continuous Service Temperature",
          "value": "100–150°C",
          "available": true,
          "group": "thermal",
          "condition": "方法未記載;サービス温度と負荷および寿命の確認",
          "sourceValue": "100–150°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "可燃性(UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "HB (V-0 grades available)",
          "available": true,
          "group": "thermal",
          "condition": "試料の厚さとグレードは記載されていません;認証請求ではありません",
          "sourceValue": "HB (V-0 grades available)"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "Drying Temperature",
          "value": "80 - 100°C",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "80 - 100°C"
        },
        {
          "key": "drying-time",
          "label": "乾かす時間だ",
          "sourceLabel": "Drying Time",
          "value": "4 - 8hrs",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "4 - 8hrs"
        },
        {
          "key": "melt-temperature-pa66",
          "label": "融点温度(PA66)",
          "sourceLabel": "Melt Temperature (PA66)",
          "value": "280 - 310 °C",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "280 - 310 °C"
        },
        {
          "key": "mold-temperature",
          "label": "カビの温度",
          "sourceLabel": "Mold Temperature",
          "value": "80 - 100 °C",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "80 - 100 °C"
        },
        {
          "key": "injection-pressure",
          "label": "注入圧力",
          "sourceLabel": "Injection Pressure",
          "value": "80–140 MPa",
          "available": true,
          "group": "processing",
          "condition": "ウェブサイトの処理参照;グレード、機器、部品試験で確認してください",
          "sourceValue": "80–140 MPa"
        }
      ],
      "profile": {
        "parts": "軽量支持、精密フレーム、高剛性構造",
        "focus": "構造と加工を評価する前に、マトリックス、カーボンファイバー含有量、繊維長を定義してください。",
        "process": "繊維の長さ、向き、機器の摩耗、外観を確認;マトリックスと繊維の配合を区別すること。",
        "tests": [
          "剛性と質量:形状と荷重が一致した重量減少を評価する",
          "異方性:流れの方向性と横方向の性質を別々に検証する",
          "加工および寸法:繊維の状態、反り、組み立てのチェック"
        ],
        "reinforcement": "カーボンファイバー;内容は未確認"
      }
    },
    {
      "id": "esd-pa-101",
      "name": "Techinherit TE-PA101",
      "grade": "TE-PA101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変",
        "難燃性オプション"
      ],
      "desc": "PAを基にした永久的な静電気防止材料で、難燃剤の配合方向を持つポリマリック静電気改修技術を用います。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした永久的な静電気防止材料で、難燃剤の配合方向を持つポリマリック静電気改修技術を用います。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-101.webp",
      "thumbnail": "materials/esd-pa-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-102",
      "name": "Techinherit TE-PA102",
      "grade": "TE-PA102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "PAを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E10",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-102.webp",
      "thumbnail": "materials/esd-pa-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-103",
      "name": "Techinherit TE-PA103",
      "grade": "TE-PA103",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "PAを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E7",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-103.webp",
      "thumbnail": "materials/esd-pa-103-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-104",
      "name": "Techinherit TE-PA104",
      "grade": "TE-PA104",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "永久的な静電気止め",
        "ガラス繊維補強を用いた高分子静電気改性"
      ],
      "desc": "PAを基にした永久的な静電気防止材料で、ポリマーの静電気防止改性とガラス繊維補強技術を組み合わせています。応用方向には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした永久的な静電気防止材料で、ポリマーの静電気防止改性とガラス繊維補強技術を組み合わせています。応用方向には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "ガラス繊維補強を用いた高分子静電気改性;品位の補強成分および配合を確認する",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-104.webp",
      "thumbnail": "materials/esd-pa-104-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-105",
      "name": "Techinherit TE-PA105",
      "grade": "TE-PA105",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "永久的な静電気止め",
        "ガラス繊維補強を用いた高分子静電気改性"
      ],
      "desc": "PAを基にした永久的な静電気防止材料で、ポリマーの静電気防止改性とガラス繊維補強技術を組み合わせています。応用方向には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした永久的な静電気防止材料で、ポリマーの静電気防止改性とガラス繊維補強技術を組み合わせています。応用方向には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "ガラス繊維補強を用いた高分子静電気改性;品位の補強成分および配合を確認する",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-105.webp",
      "thumbnail": "materials/esd-pa-105-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-106",
      "name": "Techinherit TE-PA106",
      "grade": "TE-PA106",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "静電気消散",
        "金属繊維強化"
      ],
      "desc": "PAに基づく静電気散電材料で、金属繊維強化技術を用いています。応用方向には、自動車部品、鉱山機械、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E5-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAに基づく静電気散電材料で、金属繊維強化技術を用いています。応用方向には、自動車部品、鉱山機械、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-106.webp",
      "thumbnail": "materials/esd-pa-106-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-107",
      "name": "Techinherit TE-PA107",
      "grade": "TE-PA107",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "導電性",
        "金属繊維強化"
      ],
      "desc": "PAを基にした導電性材料で、金属繊維強化技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした導電性材料で、金属繊維強化技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-107.webp",
      "thumbnail": "materials/esd-pa-107-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-108",
      "name": "Techinherit TE-PA108",
      "grade": "TE-PA108",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "導電性",
        "導電性修飾",
        "低抵抗オプション"
      ],
      "desc": "PAを基にした導電性材料で、低抵抗要件のための導電性改質技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "50-500Ω",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした導電性材料で、低抵抗要件のための導電性改質技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "導電性改変;グレードの補強成分と配合を確認する",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-108.webp",
      "thumbnail": "materials/esd-pa-108-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-109",
      "name": "Techinherit TE-PA109",
      "grade": "TE-PA109",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "静電気消散",
        "カーボンファイバー強化"
      ],
      "desc": "炭素繊維強化技術を用いたPAを基にした静電気散電材料。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E5-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "炭素繊維強化技術を用いたPAを基にした静電気散電材料。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-109.webp",
      "thumbnail": "materials/esd-pa-109-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-110",
      "name": "Techinherit TE-PA110",
      "grade": "TE-PA110",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "静電気消散",
        "カーボンファイバー強化",
        "難燃性オプション"
      ],
      "desc": "PAに基づく静電気散逸材で、カーボンファイバー強化技術と難燃配合の方向性を用いています。応用方向には自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E5-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAに基づく静電気散逸材で、カーボンファイバー強化技術と難燃配合の方向性を用いています。応用方向には自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-110.webp",
      "thumbnail": "materials/esd-pa-110-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-111",
      "name": "Techinherit TE-PA111",
      "grade": "TE-PA111",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "導電性",
        "カーボンファイバー強化"
      ],
      "desc": "PAを基にした導電性材料で、炭素繊維強化技術を使用しています。応用分野には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスなどが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした導電性材料で、炭素繊維強化技術を使用しています。応用分野には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスなどが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-111.webp",
      "thumbnail": "materials/esd-pa-111-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-112",
      "name": "Techinherit TE-PA112",
      "grade": "TE-PA112",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "導電性",
        "カーボンファイバー強化",
        "低抵抗オプション"
      ],
      "desc": "PAを基にした導電性材料で、低抵抗要件を満たす炭素繊維強化技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスなどが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "50-500Ω",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした導電性材料で、低抵抗要件を満たす炭素繊維強化技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスなどが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-112.webp",
      "thumbnail": "materials/esd-pa-112-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-113",
      "name": "Techinherit TE-PA113",
      "grade": "TE-PA113",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "静電気消散",
        "カーボンブラック改造"
      ],
      "desc": "PAに基づく静的散逸材料で、カーボンブラック改良技術を使用しています。応用方向には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAに基づく静的散逸材料で、カーボンブラック改良技術を使用しています。応用方向には、自動車部品、鉱山機器、電動工具、容器、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-113.webp",
      "thumbnail": "materials/esd-pa-113-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa-114",
      "name": "Techinherit TE-PA114",
      "grade": "TE-PA114",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA",
      "features": [
        "導電性",
        "カーボンブラック改造"
      ],
      "desc": "PAを基にした導電性材料で、カーボンブラック改良技術を使用しています。応用方向には、自動車部品、鉱山機械、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PAを基にした導電性材料で、カーボンブラック改良技術を使用しています。応用方向には、自動車部品、鉱山機械、電動工具、コンテナ、ロッド、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスが含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa-114.webp",
      "thumbnail": "materials/esd-pa-114-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pa12-101",
      "name": "Techinherit TE-PA12101",
      "grade": "TE-PA12101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PA12",
      "features": [
        "導電性",
        "カーボンファイバー強化",
        "低抵抗オプション"
      ],
      "desc": "PA12を基にした導電性材料で、低抵抗要件を満たす炭素繊維強化技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスなどが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E2",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、鉱山機械、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラス",
        "focus": "PA12を基にした導電性材料で、低抵抗要件を満たす炭素繊維強化技術を用いています。応用方向には、自動車部品、鉱山機器、電動工具、コンテナ、棒、シート、電気ハウジング、チューブ、産業用キャスター、モノフィラメント、スタイラスなどが含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pa12-101.webp",
      "thumbnail": "materials/esd-pa12-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-101",
      "name": "Techinherit TE-POM101",
      "grade": "TE-POM101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "POMを基にした永久的な静電気防止材料で、ポリマー静電気修正技術を用います。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした永久的な静電気防止材料で、ポリマー静電気修正技術を用います。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-101.webp",
      "thumbnail": "materials/esd-pom-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-102",
      "name": "Techinherit TE-POM102",
      "grade": "TE-POM102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "POMを基にした永久的な静電気防止材料で、ポリマー静電気修正技術を用います。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E7",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした永久的な静電気防止材料で、ポリマー静電気修正技術を用います。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-102.webp",
      "thumbnail": "materials/esd-pom-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-103",
      "name": "Techinherit TE-POM103",
      "grade": "TE-POM103",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "POMを基にした永久的な静電気防止材料で、ポリマー静電気修正技術を用います。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした永久的な静電気防止材料で、ポリマー静電気修正技術を用います。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-103.webp",
      "thumbnail": "materials/esd-pom-103-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-104",
      "name": "Techinherit TE-POM104",
      "grade": "TE-POM104",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "静電気消散",
        "金属繊維強化"
      ],
      "desc": "POMを基にした静的散電性材料で、金属繊維強化技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした静的散電性材料で、金属繊維強化技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-104.webp",
      "thumbnail": "materials/esd-pom-104-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-105",
      "name": "Techinherit TE-POM105",
      "grade": "TE-POM105",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "導電性",
        "金属繊維強化"
      ],
      "desc": "POMを基にした導電性材料で、金属繊維強化技術を使用しています。応用方向にはATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした導電性材料で、金属繊維強化技術を使用しています。応用方向にはATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-105.webp",
      "thumbnail": "materials/esd-pom-105-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-106",
      "name": "Techinherit TE-POM106",
      "grade": "TE-POM106",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "導電性",
        "導電性修飾",
        "低抵抗オプション"
      ],
      "desc": "POMを基にした導電性材料で、低抵抗要件のための導電性改性技術を用いています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "50-500Ω",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした導電性材料で、低抵抗要件のための導電性改性技術を用いています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "導電性改変;グレードの補強成分と配合を確認する",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-106.webp",
      "thumbnail": "materials/esd-pom-106-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-107",
      "name": "Techinherit TE-POM107",
      "grade": "TE-POM107",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "静電気消散",
        "カーボンファイバー強化"
      ],
      "desc": "炭素繊維強化技術を用いたPOMを基盤とした静電気散電材料。応用方向にはATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "炭素繊維強化技術を用いたPOMを基盤とした静電気散電材料。応用方向にはATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-107.webp",
      "thumbnail": "materials/esd-pom-107-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-108",
      "name": "Techinherit TE-POM108",
      "grade": "TE-POM108",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "導電性",
        "カーボンファイバー強化"
      ],
      "desc": "POMを基にした導電性材料で、炭素繊維強化技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした導電性材料で、炭素繊維強化技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-108.webp",
      "thumbnail": "materials/esd-pom-108-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-109",
      "name": "Techinherit TE-POM109",
      "grade": "TE-POM109",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "静電気消散",
        "カーボンブラック改造"
      ],
      "desc": "POMを基にした静電気散逸材で、カーボンブラック改良技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした静電気散逸材で、カーボンブラック改良技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-109.webp",
      "thumbnail": "materials/esd-pom-109-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pom-110",
      "name": "Techinherit TE-POM110",
      "grade": "TE-POM110",
      "catalogType": "grade",
      "category": "conductive",
      "family": "POM",
      "features": [
        "導電性",
        "カーボンブラック改造"
      ],
      "desc": "POMを基にした導電性材料で、カーボンブラック改良技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ATMおよび紙幣取扱機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品",
        "focus": "POMを基にした導電性材料で、カーボンブラック改良技術を使用しています。応用方向には、ATMおよび紙幣取り扱い機器、コピー用紙接点部品、自動車部品、棒、シート、ギア、ベアリング、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pom-110.webp",
      "thumbnail": "materials/esd-pom-110-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-abs-101",
      "name": "Techinherit TE-PCABS101",
      "grade": "TE-PCABS101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC/ABS",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変",
        "難燃性オプション"
      ],
      "desc": "PC/ABSを基にした永久的な静電気防止材料で、難燃剤配合のポリマー静電気防止改修技術を使用しています。適用方法にはピンセット、電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の耐久性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8-10E10",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PC/ABSを基にした永久的な静電気防止材料で、難燃剤配合のポリマー静電気防止改修技術を使用しています。適用方法にはピンセット、電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の耐久性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-abs-101.webp",
      "thumbnail": "materials/esd-pc-abs-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-101",
      "name": "Techinherit TE-PC101",
      "grade": "TE-PC101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "PCを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。適用指示にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PCを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。適用指示にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-101.webp",
      "thumbnail": "materials/esd-pc-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-102",
      "name": "Techinherit TE-PC102",
      "grade": "TE-PC102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "PCを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。適用指示にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PCを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。適用指示にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-102.webp",
      "thumbnail": "materials/esd-pc-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-103",
      "name": "Techinherit TE-PC103",
      "grade": "TE-PC103",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "金属繊維強化"
      ],
      "desc": "PCを基にした静電気散電性材料で、金属繊維強化技術を使用しています。適用方法にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PCを基にした静電気散電性材料で、金属繊維強化技術を使用しています。適用方法にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-103.webp",
      "thumbnail": "materials/esd-pc-103-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-abs-101",
      "name": "Techinherit TE-ABS101",
      "grade": "TE-ABS101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "ABS",
      "features": [
        "導電性",
        "金属繊維強化"
      ],
      "desc": "ABSを基にした導電性材料で、金属繊維強化技術を使用しています。適用指示には、ピンセット、携帯電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "ABSを基にした導電性材料で、金属繊維強化技術を使用しています。適用指示には、ピンセット、携帯電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-abs-101.webp",
      "thumbnail": "materials/esd-abs-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-abs-102",
      "name": "Techinherit TE-ABS102",
      "grade": "TE-ABS102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "ABS",
      "features": [
        "導電性",
        "カーボンファイバー強化",
        "難燃性オプション"
      ],
      "desc": "ABSを基にした導電性材料で、カーボンファイバー強化技術を用い、難燃性配合の方向性を持っています。適用方向にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の耐久性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "ABSを基にした導電性材料で、カーボンファイバー強化技術を用い、難燃性配合の方向性を持っています。適用方向にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の耐久性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-abs-102.webp",
      "thumbnail": "materials/esd-abs-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-abs-103",
      "name": "Techinherit TE-ABS103",
      "grade": "TE-ABS103",
      "catalogType": "grade",
      "category": "conductive",
      "family": "ABS",
      "features": [
        "静電気消散",
        "カーボンファイバー強化"
      ],
      "desc": "炭素繊維強化技術を用いたABSを基にした静電気散逸性材料。適用方法にはピンセット、携帯電話およびカメラハウジング、家電用ハウジング、チップトレイ、電子部品、包装シートおよび電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "炭素繊維強化技術を用いたABSを基にした静電気散逸性材料。適用方法にはピンセット、携帯電話およびカメラハウジング、家電用ハウジング、チップトレイ、電子部品、包装シートおよび電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-abs-103.webp",
      "thumbnail": "materials/esd-abs-103-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-104",
      "name": "Techinherit TE-PC104",
      "grade": "TE-PC104",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンファイバー強化"
      ],
      "desc": "PCを基にした導電性材料で、カーボンファイバー強化技術を使用しています。適用方法にはピンセット、携帯電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PCを基にした導電性材料で、カーボンファイバー強化技術を使用しています。適用方法にはピンセット、携帯電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-104.webp",
      "thumbnail": "materials/esd-pc-104-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-105",
      "name": "Techinherit TE-PC105",
      "grade": "TE-PC105",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "カーボンブラック改造"
      ],
      "desc": "PCを基にした静電気散逸材で、カーボンブラック改良技術を使用しています。適用手順にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PCを基にした静電気散逸材で、カーボンブラック改良技術を使用しています。適用手順にはピンセット、電話・カメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-105.webp",
      "thumbnail": "materials/esd-pc-105-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-106",
      "name": "Techinherit TE-PC106",
      "grade": "TE-PC106",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンブラック改造"
      ],
      "desc": "PCを基にした導電性材料で、カーボンブラック改良技術を使用しています。適用指示にはピンセット、携帯電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PCを基にした導電性材料で、カーボンブラック改良技術を使用しています。適用指示にはピンセット、携帯電話およびカメラハウジング、家電ハウジング、チップトレイ、電子部品、包装シート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-106.webp",
      "thumbnail": "materials/esd-pc-106-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-abs-102",
      "name": "Techinherit TE-PCABS102",
      "grade": "TE-PCABS102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC/ABS",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "PC/ABSを基にした永久的な静電気防止材料で、ポリマー静電気防止改変技術を用います。適用方法にはピンセット、電話およびカメラのハウジング、家電のハウジング、チップトレイ、電子部品、電子部品、パッケージシート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E10",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "ピンセット、電話やカメラのハウジング、家電のハウジング、チップトレイ、電子部品、包装シート、電子部品",
        "focus": "PC/ABSを基にした永久的な静電気防止材料で、ポリマー静電気防止改変技術を用います。適用方法にはピンセット、電話およびカメラのハウジング、家電のハウジング、チップトレイ、電子部品、電子部品、パッケージシート、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-abs-102.webp",
      "thumbnail": "materials/esd-pc-abs-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-107",
      "name": "Techinherit TE-PC107",
      "grade": "TE-PC107",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変",
        "難燃性オプション"
      ],
      "desc": "PCを基にした永久的な静電気防止材料で、難燃剤配合のポリマー静電気修正技術を用います。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8-10E10",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした永久的な静電気防止材料で、難燃剤配合のポリマー静電気修正技術を用います。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-107.webp",
      "thumbnail": "materials/esd-pc-107-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-108",
      "name": "Techinherit TE-PC108",
      "grade": "TE-PC108",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "金属繊維強化"
      ],
      "desc": "PCに基づく静電気散電材料で、金属繊維強化技術を使用しています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCに基づく静電気散電材料で、金属繊維強化技術を使用しています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-108.webp",
      "thumbnail": "materials/esd-pc-108-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-109",
      "name": "Techinherit TE-PC109",
      "grade": "TE-PC109",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "金属繊維強化"
      ],
      "desc": "PCを基にした導電性材料で、金属繊維強化技術を用います。適用指示には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、金属繊維強化技術を用います。適用指示には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-109.webp",
      "thumbnail": "materials/esd-pc-109-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-110",
      "name": "Techinherit TE-PC110",
      "grade": "TE-PC110",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "カーボンファイバー強化",
        "難燃性オプション"
      ],
      "desc": "PCに基づく静電気散電性材料で、カーボンファイバー強化技術と難燃配合方向を用いています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCに基づく静電気散電性材料で、カーボンファイバー強化技術と難燃配合方向を用いています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-110.webp",
      "thumbnail": "materials/esd-pc-110-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-111",
      "name": "Techinherit TE-PC111",
      "grade": "TE-PC111",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンファイバー強化",
        "難燃性オプション"
      ],
      "desc": "PCを基にした導電性材料で、カーボンファイバー強化技術と難燃剤の配合方向を使用しています。適用方法には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、カーボンファイバー強化技術と難燃剤の配合方向を使用しています。適用方法には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-111.webp",
      "thumbnail": "materials/esd-pc-111-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-112",
      "name": "Techinherit TE-PC112",
      "grade": "TE-PC112",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "カーボンファイバー強化"
      ],
      "desc": "炭素繊維強化技術を用いたPCを基にした静電気散逸材料。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "炭素繊維強化技術を用いたPCを基にした静電気散逸材料。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-112.webp",
      "thumbnail": "materials/esd-pc-112-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-113",
      "name": "Techinherit TE-PC113",
      "grade": "TE-PC113",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンファイバー強化"
      ],
      "desc": "PCを基にした導電性材料で、カーボンファイバー強化技術を使用します。適用方法には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、カーボンファイバー強化技術を使用します。適用方法には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-113.webp",
      "thumbnail": "materials/esd-pc-113-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-114",
      "name": "Techinherit TE-PC114",
      "grade": "TE-PC114",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンファイバー強化",
        "低抵抗オプション"
      ],
      "desc": "PCを基にした導電性材料で、低抵抗要件を満たす炭素繊維強化技術を用いています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "<500 Ω",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、低抵抗要件を満たす炭素繊維強化技術を用いています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-114.webp",
      "thumbnail": "materials/esd-pc-114-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-115",
      "name": "Techinherit TE-PC115",
      "grade": "TE-PC115",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "カーボンブラック改造",
        "難燃性オプション"
      ],
      "desc": "PCに基づく静的散逸材料で、カーボンブラック改良技術と難燃配合方向を使用しています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCに基づく静的散逸材料で、カーボンブラック改良技術と難燃配合方向を使用しています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-115.webp",
      "thumbnail": "materials/esd-pc-115-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-116",
      "name": "Techinherit TE-PC116",
      "grade": "TE-PC116",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンブラック改造",
        "難燃性オプション"
      ],
      "desc": "PCを基にした導電性材料で、カーボンブラック改良技術と難燃剤の配合方向を使用しています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、カーボンブラック改良技術と難燃剤の配合方向を使用しています。適用方向には基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-116.webp",
      "thumbnail": "materials/esd-pc-116-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-117",
      "name": "Techinherit TE-PC117",
      "grade": "TE-PC117",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "カーボンブラック改造"
      ],
      "desc": "PCを基にした静的散逸性材料で、カーボンブラック改良技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナ、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした静的散逸性材料で、カーボンブラック改良技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナ、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-117.webp",
      "thumbnail": "materials/esd-pc-117-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-118",
      "name": "Techinherit TE-PC118",
      "grade": "TE-PC118",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "静電気消散",
        "カーボンブラック改造"
      ],
      "desc": "PCを基にした静的散逸性材料で、カーボンブラック改良技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナ、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした静的散逸性材料で、カーボンブラック改良技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナ、通信機器が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-118.webp",
      "thumbnail": "materials/esd-pc-118-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-119",
      "name": "Techinherit TE-PC119",
      "grade": "TE-PC119",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンブラック改造"
      ],
      "desc": "PCを基にした導電性材料で、カーボンブラック改変技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、カーボンブラック改変技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-119.webp",
      "thumbnail": "materials/esd-pc-119-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pc-120",
      "name": "Techinherit TE-PC120",
      "grade": "TE-PC120",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PC",
      "features": [
        "導電性",
        "カーボンブラック改造"
      ],
      "desc": "PCを基にした導電性材料で、カーボンブラック改変技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、コンテナおよび通信機器",
        "focus": "PCを基にした導電性材料で、カーボンブラック改変技術を使用しています。適用指示には、基板、シート、キャリアテープ、プロファイル、ピンセット、電子部品、電気ハウジング、容器、通信機器が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pc-120.webp",
      "thumbnail": "materials/esd-pc-120-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pbt-101",
      "name": "Techinherit TE-PBT101",
      "grade": "TE-PBT101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PBT",
      "features": [
        "永久的な静電気止め",
        "ガラス繊維補強を用いた高分子静電気改性"
      ],
      "desc": "PBTを基にした永久的な静電気防止材料で、ガラス繊維補強技術を用いたポリマー防静電気改性を用います。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "確認後",
          "available": false,
          "group": "electrical",
          "condition": "抵抗範囲は確認が必要です;指数表記、単位、試験条件を確認してください"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、電気ハウジングおよび電子部品",
        "focus": "PBTを基にした永久的な静電気防止材料で、ガラス繊維補強技術を用いたポリマー防静電気改性を用います。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "ガラス繊維補強を用いた高分子静電気改性;品位の補強成分および配合を確認する",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pbt-101.webp",
      "thumbnail": "materials/esd-pbt-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pbt-102",
      "name": "Techinherit TE-PBT102",
      "grade": "TE-PBT102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PBT",
      "features": [
        "導電性",
        "金属繊維強化"
      ],
      "desc": "PBTを基にした導電性材料で、金属繊維強化技術を使用しています。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、電気ハウジングおよび電子部品",
        "focus": "PBTを基にした導電性材料で、金属繊維強化技術を使用しています。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pbt-102.webp",
      "thumbnail": "materials/esd-pbt-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pbt-103",
      "name": "Techinherit TE-PBT103",
      "grade": "TE-PBT103",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PBT",
      "features": [
        "静電気消散",
        "カーボンファイバー強化",
        "難燃性オプション"
      ],
      "desc": "PBTに基づく静電気散逸性材料で、カーボンファイバー補強技術と難燃性配合の配合を用いています。適用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、電気ハウジングおよび電子部品",
        "focus": "PBTに基づく静電気散逸性材料で、カーボンファイバー補強技術と難燃性配合の配合を用いています。適用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pbt-103.webp",
      "thumbnail": "materials/esd-pbt-103-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pbt-104",
      "name": "Techinherit TE-PBT104",
      "grade": "TE-PBT104",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PBT",
      "features": [
        "導電性",
        "カーボンファイバー強化",
        "難燃性オプション"
      ],
      "desc": "PBTを基にした導電性材料で、カーボンファイバー強化技術と難燃性配合の方向性を用いています。適用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件を検証します。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "flammability-ul94",
          "label": "可燃性評価",
          "sourceLabel": "可燃性評価",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "標準、試料の厚さ、色、正式報告を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、電気ハウジングおよび電子部品",
        "focus": "PBTを基にした導電性材料で、カーボンファイバー強化技術と難燃性配合の方向性を用いています。適用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件を検証します。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pbt-104.webp",
      "thumbnail": "materials/esd-pbt-104-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pbt-105",
      "name": "Techinherit TE-PBT105",
      "grade": "TE-PBT105",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PBT",
      "features": [
        "静電気消散",
        "カーボンファイバー強化"
      ],
      "desc": "炭素繊維強化技術を用いたPBTを基盤とした静電気散電材料。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、電気ハウジングおよび電子部品",
        "focus": "炭素繊維強化技術を用いたPBTを基盤とした静電気散電材料。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pbt-105.webp",
      "thumbnail": "materials/esd-pbt-105-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-pbt-106",
      "name": "Techinherit TE-PBT106",
      "grade": "TE-PBT106",
      "catalogType": "grade",
      "category": "conductive",
      "family": "PBT",
      "features": [
        "導電性",
        "カーボンファイバー強化"
      ],
      "desc": "PBTを基にした導電性材料で、カーボンファイバー強化技術を使用しています。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "自動車部品、電気ハウジングおよび電子部品",
        "focus": "PBTを基にした導電性材料で、カーボンファイバー強化技術を使用しています。応用方向には自動車部品、電気ハウジング、電子部品が含まれます。グレードおよび完成品の抵抗性と加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-pbt-106.webp",
      "thumbnail": "materials/esd-pbt-106-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-mppo-mppe-101",
      "name": "Techinherit TE-MPPOMPPE101",
      "grade": "TE-MPPOMPPE101",
      "catalogType": "grade",
      "category": "conductive",
      "family": "MPPO/MPPE",
      "features": [
        "永久的な静電気止め",
        "ポリマー静電気改変"
      ],
      "desc": "MPPO/MPPEを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。適用方法にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "ナチュラル;カスタムカラーも可能です",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "永久的な静電気止め",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E8-10E10",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "チップトレイ、ターンテーブル、電子部品包装シート、ATM部品および電気部品",
        "focus": "MPPO/MPPEを基にした永久的な静電気防止材料で、ポリマー静電気防止改修技術を用います。適用方法にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "高分子静電気改性;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-mppo-mppe-101.webp",
      "thumbnail": "materials/esd-mppo-mppe-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-mppo-mppe-102",
      "name": "Techinherit TE-MPPOMPPE102",
      "grade": "TE-MPPOMPPE102",
      "catalogType": "grade",
      "category": "conductive",
      "family": "MPPO/MPPE",
      "features": [
        "導電性",
        "金属繊維強化"
      ],
      "desc": "MPPO/MPPEを基にした導電性材料で、金属繊維強化技術を使用しています。適用方向にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "グレイ",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "チップトレイ、ターンテーブル、電子部品包装シート、ATM部品および電気部品",
        "focus": "MPPO/MPPEを基にした導電性材料で、金属繊維強化技術を使用しています。適用方向にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "金属繊維補強;品位の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-mppo-mppe-102.webp",
      "thumbnail": "materials/esd-mppo-mppe-102-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-mppo-mppe-103",
      "name": "Techinherit TE-MPPOMPPE103",
      "grade": "TE-MPPOMPPE103",
      "catalogType": "grade",
      "category": "conductive",
      "family": "MPPO/MPPE",
      "features": [
        "静電気消散",
        "カーボンファイバー強化"
      ],
      "desc": "炭素繊維強化技術を用いたMPPO/MPPEを基にした静的散逸材料。適用方向にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "チップトレイ、ターンテーブル、電子部品包装シート、ATM部品および電気部品",
        "focus": "炭素繊維強化技術を用いたMPPO/MPPEを基にした静的散逸材料。適用方向にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-mppo-mppe-103.webp",
      "thumbnail": "materials/esd-mppo-mppe-103-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-mppo-mppe-104",
      "name": "Techinherit TE-MPPOMPPE104",
      "grade": "TE-MPPOMPPE104",
      "catalogType": "grade",
      "category": "conductive",
      "family": "MPPO/MPPE",
      "features": [
        "導電性",
        "カーボンファイバー強化"
      ],
      "desc": "MPPO/MPPEを基にした導電性材料で、カーボンファイバー強化技術を使用します。適用方向にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "導電性",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "チップトレイ、ターンテーブル、電子部品包装シート、ATM部品および電気部品",
        "focus": "MPPO/MPPEを基にした導電性材料で、カーボンファイバー強化技術を使用します。適用方向にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "炭素繊維補強;等級の補強含有量と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-mppo-mppe-104.webp",
      "thumbnail": "materials/esd-mppo-mppe-104-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "esd-mppo-mppe-105",
      "name": "Techinherit TE-MPPOMPPE105",
      "grade": "TE-MPPOMPPE105",
      "catalogType": "grade",
      "category": "conductive",
      "family": "MPPO/MPPE",
      "features": [
        "静電気消散",
        "カーボンブラック改造"
      ],
      "desc": "MPPO/MPPEを基にした静的散逸性材料で、カーボンブラック改良技術を使用しています。適用方法にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "素材の色",
          "sourceLabel": "素材の色",
          "value": "黒",
          "available": true,
          "group": "physical",
          "condition": "グレードの利用可能な色とバッチの外観を確認してください"
        },
        {
          "key": "static-control-type",
          "label": "静電気制御タイプ",
          "sourceLabel": "静電気制御タイプ",
          "value": "静電気消散",
          "available": true,
          "group": "electrical",
          "condition": "機能分類;プロジェクトの実際の耐性と耐久性の検証"
        },
        {
          "key": "surface-resistance-reference",
          "label": "表面抵抗の基準",
          "sourceLabel": "表面抵抗の基準",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "指数表記、単位、試験方法、電極、試料の状態、温度および湿度を確認しましょう"
        },
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "sourceLabel": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "sourceLabel": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードTDSを依頼し、方法と標本の状態を確認してください"
        },
        {
          "key": "drying-temperature",
          "label": "乾燥温度",
          "sourceLabel": "乾燥温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "sourceLabel": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードと機器の確認;試験前の処理期間を確認する"
        }
      ],
      "profile": {
        "parts": "チップトレイ、ターンテーブル、電子部品包装シート、ATM部品および電気部品",
        "focus": "MPPO/MPPEを基にした静的散逸性材料で、カーボンブラック改良技術を使用しています。適用方法にはチップトレイ、ターンテーブル、電子部品包装シート、ATM部品、電気部品が含まれます。グレードおよび完成品の抵抗および加工条件の検証を行います。",
        "process": "等級の乾燥、融解温度、型温度、停留時間を確認し、試験後に抵抗、外観、寸法を確認します。",
        "reinforcement": "カーボンブラック改良;グレードの補強成分と配合を確認してください",
        "tests": [
          "抵抗:電極を定義し、電圧、試料の状態、温度および湿度をテストします。材料試料と成形部品の両方を試験します",
          "長期的行動:調整、清掃、研磨、老化後の静的制御を評価する",
          "部品検証:意図された用途における壁厚、ファイバーの向き、組み立ておよび接地の評価"
        ]
      },
      "image": "materials/esd-mppo-mppe-105.webp",
      "thumbnail": "materials/esd-mppo-mppe-105-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-chair-base",
      "name": "人間工学チェアの5本脚ベース用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "積み込みと疲労",
        "寸法と組立",
        "成形と外観"
      ],
      "desc": "椅子のベースロード、持続的なサービス、部品の形状、サービス負荷、成形条件を中心としたキャスター組立のための材料ソリューションを開発します。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "5本脚チェアの台座、キャスターソケット、中央の荷重支え構造",
        "focus": "椅子のベースロード、持続的なサービス、部品の形状、サービス負荷、成形条件を中心としたキャスター組立のための材料ソリューションを開発します。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "荷重:意図された運用条件下および適用される試験仕様の下で、静的荷重、衝撃、周期疲労を評価します。",
          "組立:キャスターの挿入と取り外し、中央内径の適合、持続荷重後の変形を点検。",
          "状態:寸法や構造挙動を比較する際、成形状態、状態、温度、バッチを記録します。"
        ]
      },
      "applicationIds": [
        "furniture"
      ],
      "solution": {
        "requirements": [
          {
            "title": "構造荷重",
            "desc": "椅子の荷重、装填モード、サービスサイクルを定義し、肘部と中央ボアの弱い部分に焦点を当てます。"
          },
          {
            "title": "キャスター&セントラルインターフェース",
            "desc": "キャスターソケット、中央の取り付けボア、組み立ての公差を図面に照らし合わせて、調整や経年劣化も含めて確認してください。"
          },
          {
            "title": "型取りと一貫性",
            "desc": "ゲート、溶接ライン、ファイバーの配向、表面要件を通じて、成形ウィンドウとバッチの一貫性を評価します。"
          }
        ],
        "illustration": false
      },
      "image": "industry/chair-base.webp",
      "thumbnail": "industry/chair-base-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-ev-charging",
      "name": "EV充電コネクタ・充電ガン用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "電気および断熱",
        "熱と炎の必要条件",
        "密封と寸法"
      ],
      "desc": "チャージガンやコネクター用のマトリックスおよび改造システムを選択する前に、部品機能、温度上昇、壁厚、ターゲット仕様を定義してください。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "チャージングガンハウジング、コネクターボディ、マウントサポート、結合部品",
        "focus": "チャージガンやコネクター用のマトリックスおよび改造システムを選択する前に、部品機能、温度上昇、壁厚、ターゲット仕様を定義してください。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "電気:絶縁、耐電圧、関連する電気的特性を部品機能と目標仕様のために検証します。",
          "環境:温度・湿度サイクル、化学物質接触、屋外曝露後の外観と寸法を評価します。",
          "全体として、炎のターゲット、温度上昇、結合信頼性を実際の壁厚、シール、組立と一致させます。"
        ]
      },
      "applicationIds": [
        "new-energy"
      ],
      "solution": {
        "requirements": [
          {
            "title": "電気的状況",
            "desc": "導電性と絶縁の機能を別行;動作電圧、電気的間隔、検証要件を定義します。"
          },
          {
            "title": "熱と炎の必要条件",
            "desc": "持続温度、温度上昇、試料の厚さと色を定義し、プロジェクトの熱および炎の目標を確定します。"
          },
          {
            "title": "環境と密閉組立",
            "desc": "材料や組み立てを屋外曝露、洗浄薬品、シール、交配サイクルと比較して確認してください。"
          }
        ],
        "illustration": false
      },
      "image": "industry/ev-charging.webp",
      "thumbnail": "industry/ev-charging-small.webp",
      "imageWidth": 675,
      "imageHeight": 900,
      "thumbnailWidth": 300
    },
    {
      "id": "industry-fan-blades",
      "name": "冷却ファンブレード用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "回転荷重",
        "歪みとバランス",
        "熱環境"
      ],
      "desc": "ブレードの剛性、回転荷重、成形寸法を考慮し、速度、温度、ブレード形状を考慮して材料を開発します。インペラーと組み立てシステムの検証を行います。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "冷却ファンの羽根、インペラー、ハブインターフェース",
        "focus": "ブレードの剛性、回転荷重、成形寸法を考慮し、速度、温度、ブレード形状を考慮して材料を開発します。インペラーと組み立てシステムの検証を行います。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "回転:速度、サイクルの始止、構造の完全性試験をプロジェクト仕様に基づけて計画します。",
          "寸法:ブレードの形状、平らさ、ハブフィット、バランス、サーマルサイクル後の調整を確認してください。",
          "システム:実際の気流経路と取り付け装置で振動、騒音、冷却を評価します。"
        ]
      },
      "applicationIds": [
        "ai-hardware"
      ],
      "solution": {
        "requirements": [
          {
            "title": "速度と装填",
            "desc": "最大速度、スタート/ストップサイクル、ブレードの形状を定義し、ハブ、ブレードの根元、溶接領域に焦点を当てます。"
          },
          {
            "title": "寸法とバランス",
            "desc": "刃の形状、収縮、反りをチェック;バッチや成形条件のバランスを記録。"
          },
          {
            "title": "加熱と操作",
            "desc": "材料とインペラを運転温度、連続稼働、気流条件と比較して評価してください。"
          }
        ],
        "illustration": false
      },
      "image": "industry/fan-blades.webp",
      "thumbnail": "industry/fan-blades-small.webp",
      "imageWidth": 675,
      "imageHeight": 660,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-precision-gears",
      "name": "精密ギア用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "歯の形状と公差",
        "摩擦と摩耗",
        "疲労と生涯"
      ],
      "desc": "歯の精度、荷重、摩擦、潤滑、温度、騒音、耐用年数要件を考慮したトランスミッションの材料ソリューションを定義します。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "精密変速機ギア、ギアセット、シャフトボアおよび結合インターフェース",
        "focus": "歯の精度、荷重、摩擦、潤滑、温度、騒音、耐用年数要件を考慮したトランスミッションの材料ソリューションを定義します。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "幾何学:図面に対して歯の形状、同心率、シャフトボア、接合公差を検査します。",
          "操作:実際の負荷、速度、潤滑時の摩耗、温度上昇、騒音を評価する。",
          "寿命:記録サイクル、故障モード、トランスミッション寿命要件に対する環境条件。"
        ]
      },
      "applicationIds": [],
      "solution": {
        "requirements": [
          {
            "title": "伝達と装填",
            "desc": "モジュール、歯形、トルク、速度、衝撃荷重を定義し、連続的および断続的な作業を区別する。"
          },
          {
            "title": "摩擦と潤滑",
            "desc": "結合材料、潤滑、接触薬品、摩耗基準を確認しろ。"
          },
          {
            "title": "寸法とフィット",
            "desc": "歯の形状、シャフトボアフィット、ノイズターゲットを収縮、条件反射、温度変化に対して検証します。"
          }
        ],
        "illustration": false
      },
      "image": "industry/precision-gears.webp",
      "thumbnail": "industry/precision-gears-small.webp",
      "imageWidth": 900,
      "imageHeight": 866,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-ai-enclosures",
      "name": "AIハードウェア・電子機器筐体用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "外観と薄い壁",
        "衝撃と組立",
        "電気的要件"
      ],
      "desc": "AIハードウェアおよび電子ハウジングの材料は外観、薄壁成形、衝撃、熱を重視して選定し、各部品ごとに静電気制御および電磁要件を個別に指定・検証します。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "AIハードウェアハウジング、電子エンクロージャー、内部サポート、スナップフィット",
        "focus": "AIハードウェアおよび電子ハウジングの材料は外観、薄壁成形、衝撃、熱を重視して選定し、各部品ごとに静電気制御および電磁要件を個別に指定・検証します。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "外観:色、質感、溶接痕、バッチの一貫性を確認してください。",
          "構造:ドロップ、ファスナー、スナップフィットサイクル、サーマルサイクル後の組立評価。",
          "機能:材料およびシステムを定義された抵抗、電気的または電磁的目標に対して試験する。"
        ]
      },
      "applicationIds": [
        "ai-hardware",
        "electronics"
      ],
      "solution": {
        "requirements": [
          {
            "title": "外観と構造",
            "desc": "表面仕上げ、色、壁厚、スナップやファスナー、溶接痕や応力領域を定義してください。"
          },
          {
            "title": "熱と電気的機能",
            "desc": "熱、炎、断熱、静電気制御、電磁的要件を別々のプロジェクト要件として指定してください。"
          },
          {
            "title": "組み立てと環境",
            "desc": "材料と部品を滴下、洗浄、温度・湿度、内部部品配置の確認を行います。"
          }
        ],
        "illustration": false
      },
      "image": "industry/ai-enclosures.webp",
      "thumbnail": "industry/ai-enclosures-small.webp",
      "imageWidth": 639,
      "imageHeight": 630,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-outdoor-helmet",
      "name": "アウトドアスポーツ・ヘルメット部品用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "衝撃および靭性目標",
        "風化と色彩",
        "アセンブリの信頼性"
      ],
      "desc": "部品機能、衝撃モード、日光、温度変化に関する屋外スポーツおよびヘルメットアクセサリーの材料を開発します。プロジェクト内で保護機能およびその検証範囲を定義します。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "アウトドアスポーツアクセサリー、ヘルメットアタッチメント、マウント、バックル、調整パーツ",
        "focus": "部品機能、衝撃モード、日光、温度変化に関する屋外スポーツおよびヘルメットアクセサリーの材料を開発します。プロジェクト内で保護機能およびその検証範囲を定義します。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "環境:対象の日光、温度、汗、清掃後の外観と構造を評価します。",
          "使用例:調整サイクル、バックルの結合、取り付け強度、経年性能の確認。",
          "影響:完成品を意図された用途および適用される仕様と比較して評価すること;カタログ情報は保護製品の検証に代わるものではありません。"
        ]
      },
      "applicationIds": [],
      "solution": {
        "requirements": [
          {
            "title": "部品機能と範囲",
            "desc": "アクセサリー、マウント、保護部品を区別し、意図された使用と検証範囲を定義します。"
          },
          {
            "title": "屋外環境",
            "desc": "最低・最高サービス温度、日光、汗、洗浄剤、保管条件を記録します。"
          },
          {
            "title": "バックルと繰り返しの使用",
            "desc": "調整機構、ファスナー、繰り返しの結合を復習し、弱い部分や摩耗に焦点を当ててください。"
          }
        ],
        "illustration": false
      },
      "image": "industry/outdoor-helmet.webp",
      "thumbnail": "industry/outdoor-helmet-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-food-appliance",
      "name": "食品接触キッチン家電部品用材料",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "プロジェクトの確認を",
      "features": [
        "食品接触記録",
        "温度と清掃",
        "臭いと組み立て"
      ],
      "desc": "食品接触機器部品のグレードや書類を選定する前に、熱、洗浄、臭い、組み立てを考慮して、接触媒体、持続時間、温度、ターゲット市場を定義してください。",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "引張強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "notched-impact-strength",
          "label": "ノッチドインパクト強度",
          "value": "確認後",
          "available": false,
          "group": "mechanical",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "hdt-reference",
          "label": "熱偏向温度",
          "value": "確認後",
          "available": false,
          "group": "thermal",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "molding-shrinkage",
          "label": "型の収縮",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        },
        {
          "key": "melt-temperature",
          "label": "融点温度",
          "value": "確認後",
          "available": false,
          "group": "processing",
          "condition": "グレードはまだ指定されていません;プロジェクトの特性、試験方法、試料の状態を確認してください"
        }
      ],
      "profile": {
        "parts": "食品接触キッチン家電部品、容器インターフェース、蓋、シールインターフェース、駆動カップリング",
        "focus": "食品接触機器部品のグレードや書類を選定する前に、熱、洗浄、臭い、組み立てを考慮して、接触媒体、持続時間、温度、ターゲット市場を定義してください。",
        "process": "乾燥、成形、部品試験の前に、グレード、部品図面、設備を確認し、加工パラメータについては正式な文書や試験結果を用いてください。",
        "reinforcement": "部品要件のマトリックス、補強材および機能的定式を確認しましょう",
        "tests": [
          "書類:グレード、色、接触条件および範囲に一致すること;一般的な材料説明は食品接触適性の証明にはなりません。",
          "連絡先:ターゲット市場および実際の使用に対する材料および完成品の試験を確立すること。",
          "使用例:洗浄サイクル、お湯または蒸気、臭い、寸法、組み立て後のひび割れの評価。"
        ]
      },
      "applicationIds": [],
      "solution": {
        "requirements": [
          {
            "title": "食物接触条件",
            "desc": "直接または間接接触場所、接触媒体、時間・温度、繰り返し使用条件を定義してください。"
          },
          {
            "title": "成績と書類",
            "desc": "ターゲット市場向けのグレード、色、添加剤システム、利用可能な食品接触書類を確認してください。"
          },
          {
            "title": "使用と清掃",
            "desc": "温水、蒸気、洗剤、臭い、機械的適合性に関する材料および部品要件を定義してください。"
          }
        ],
        "illustration": false
      },
      "image": "industry/food-appliance.webp",
      "thumbnail": "industry/food-appliance-small.webp",
      "imageWidth": 530,
      "imageHeight": 458,
      "thumbnailWidth": 400
    }
  ],
  "applications": [
    {
      "id": "new-energy",
      "name": "新しいエネルギー",
      "en": "New energy",
      "image": "applications/new-energy.webp",
      "line": "電気的および熱的条件下で材料の挙動をバランスを取ること。",
      "desc": "バッテリーに隣接する部品、コネクター、充電装置、モーター構造については、難燃性、絶縁性、熱挙動、寸法安定性を考慮します。",
      "needs": [
        "動作電圧、温度、接触媒体を定義してください",
        "該当の厚さと試験条件で難火標的を確認",
        "断熱、耐候性、実際の組み立て要件を検証する"
      ],
      "ids": [],
      "source": "https://www.techinherit.com/new-energy-cases.html",
      "cases": [
        {
          "id": "connector",
          "title": "防水コネクター",
          "image": "cases/energy-connector.webp",
          "material": "PA6 GF30",
          "problem": "電気絶縁、密閉された組み立て、屋外曝露は同時に対処しなければなりません。",
          "approach": "企業のケースは、炎、耐候性、電気的要件を総合的に考慮したガラス繊維強化PA6を使用しています。",
          "validation": "実際の壁厚、さらにシールや耐久後の寸法での炎の挙動や電気的特性を検証します。",
          "ids": [],
          "source": "https://www.techinherit.com/new-energy-cases.html"
        },
        {
          "id": "motor-cover",
          "title": "モーターエンドカバー",
          "image": "cases/energy-motor.webp",
          "material": "PPS GF40",
          "problem": "取り付け位置、剛性、適合性は持続的な熱に対して安定していなければなりません。",
          "approach": "企業のケースは耐熱性、低水分吸収性、寸法安定性を組み合わせたPPS GF40を使用しています。",
          "validation": "変形、熱サイクル、クリープ、組み立てを実際の温度および固定荷重の下で検証し、この特定のシステムについて質問してください。",
          "ids": [],
          "source": "https://www.techinherit.com/new-energy-cases.html"
        }
      ]
    },
    {
      "id": "ai-hardware",
      "name": "AIとスマートハードウェア",
      "en": "AI & smart hardware",
      "image": "applications/ai-hardware.webp",
      "line": "精密構造と静電気に敏感な環境。",
      "desc": "スマートデバイスハウジングから内部支持、ファン関連部品まで、静的制御、熱状態、剛性、外観を一つの材料選択の枠組みの中で考慮してください。",
      "needs": [
        "静電気感度と抵抗ターゲットを定義してください",
        "熱的条件と長期的な次元挙動を考えます",
        "部品設計と加工によるファイバーの向き評価"
      ],
      "ids": [
        "esd-pa-104",
        "esd-pc-104",
        "cf-pa6"
      ],
      "source": "https://www.techinherit.com/ai-hardware-cases.html",
      "cases": [
        {
          "id": "fan-cover",
          "title": "サーバーファンカバー",
          "image": "cases/ai-fan.webp",
          "material": "PBT GF30 FR",
          "problem": "軽量薄壁構造には剛性、寸法安定性、動作信頼性が必要です。",
          "approach": "企業のケースは難燃強化PBTを使用し、流れ、補強、精密な成形を考慮しています。",
          "validation": "薄壁充填、反り、取り付け点の疲労、加熱後のクリアランスを検証し、組み立てたシステムの騒音を評価します。",
          "ids": [],
          "source": "https://www.techinherit.com/ai-hardware-cases.html"
        },
        {
          "id": "edge-box",
          "title": "エッジコンピューティングエンクロージャー",
          "image": "cases/ai-edge.webp",
          "material": "PC GF20 FR",
          "problem": "構造保護、温度上昇、電磁的要求は別々の仕様が必要です。",
          "approach": "企業のケースでは難燃ガラス繊維補強PCが使用されています。構造補強やEMCターゲットは別途検証が必要です。",
          "validation": "熱サイクル、マウント、実際の厚さでの炎の挙動、システムEMCの検証;ガラス繊維補強だけではシールドは確立されません。",
          "ids": [],
          "source": "https://www.techinherit.com/ai-hardware-cases.html"
        }
      ]
    },
    {
      "id": "electronics",
      "name": "家電",
      "en": "Consumer electronics",
      "image": "applications/electronics.webp",
      "line": "外観、構造、ユーザー体験を一体化させましょう。",
      "desc": "スマートデバイス、家電、電子ハウジングについては、外観の一貫性、衝撃挙動、電気的要件、精密な組立を考慮してください。",
      "needs": [
        "色、表面、風化要件を定義してください",
        "スナップフィット、薄壁、組み立てジオメトリの評価",
        "温度上昇や電気的条件に対する選択の検証"
      ],
      "ids": [
        "esd-abs-103"
      ],
      "source": "https://www.techinherit.com/consumer-electronics-cases.html",
      "cases": [
        {
          "id": "earbuds",
          "title": "ワイヤレスイヤホン充電ケース",
          "image": "cases/electronics-earbuds.webp",
          "material": "PC/ABS",
          "problem": "コンパクトなハウジングには、表面品質、スナップフィットの耐久性、そして正確な組み立てが必要です。",
          "approach": "企業のケースでは、PC/ABSを用いて、フロー、インパクト、外観のニーズをモールディングと一致させます。",
          "validation": "色のバリエーション、溶接痕、開口サイクル、落下後のフィットを確認し、検証に洗浄薬剤を含めてください。",
          "ids": [],
          "source": "https://www.techinherit.com/consumer-electronics-cases.html"
        },
        {
          "id": "phone-frame",
          "title": "電話の中間フレーム",
          "image": "cases/electronics-frame.webp",
          "material": "PA6 GF30",
          "problem": "細長い薄壁部品には剛性、平坦さ、精密なフィット感が必要です。",
          "approach": "企業のケースではPA6 GF30;補強、低応力成形、繊維の向きが一体として寸法に影響を与えます。",
          "validation": "乾燥状態およびコンディショニング状態における平坦度、臨界寸法、組立応力を記録し、デバイスの機能を検証します。",
          "ids": [],
          "source": "https://www.techinherit.com/consumer-electronics-cases.html"
        }
      ]
    },
    {
      "id": "furniture",
      "name": "オフィス家具",
      "en": "Office furniture",
      "image": "applications/furniture.webp",
      "line": "装填から外観まで、フルサービス寿命を考慮してください。",
      "desc": "肘掛け、椅子の背もたれ、座面支持、構造部品については、荷重、循環使用、外観、環境曝露を評価します。",
      "needs": [
        "荷重、衝撃、循環使用条件を定義してください",
        "強化材料における剛性と靭性のバランス",
        "意図された環境での色と老化を評価する"
      ],
      "ids": [
        "cf-pa66"
      ],
      "source": "https://www.techinherit.com/office-furniture-cases.html",
      "cases": [
        {
          "id": "seat-bracket",
          "title": "シートの荷重支えブラケット",
          "image": "cases/furniture-bracket.webp",
          "material": "PA66 GF30",
          "problem": "持続的な荷重、衝撃、繰り返しの使用は変形や疲労を引き起こすことがあります。",
          "approach": "企業ケースではPA66 GF30が使われ、剛性、靭性、熱安定性、反りのバランスを取っています。",
          "validation": "固定荷重、疲労、クリープ、湿度の影響が実際の構造に及ぼし、特にネジと溶接ラインに焦点を当ててテストします。",
          "ids": [],
          "source": "https://www.techinherit.com/office-furniture-cases.html"
        },
        {
          "id": "armrest",
          "title": "アームレストサポートブラケット",
          "image": "cases/furniture-armrest.webp",
          "material": "PA66 GF30",
          "problem": "組み立ての適合性、荷重剛性、繰り返しの接触摩耗はバランスが取れなければなりません。",
          "approach": "企業のケースでは、精密構造、荷重支持、摩耗要件のためにPA66 GF30が用いられています。",
          "validation": "調整サイクル、局所負荷、取り付け寸法、長時間の使用後の緩みや摩耗を確認してください。",
          "ids": [],
          "source": "https://www.techinherit.com/office-furniture-cases.html"
        }
      ]
    },
    {
      "id": "medical",
      "name": "医療機器",
      "en": "Medical devices",
      "image": "applications/medical.webp",
      "line": "材料の一貫性は明確な条件から始まります。",
      "desc": "医療機器ハウジングや精密構造物については、洗浄剤曝露、寸法安定性、トレーサビリティ、プロジェクトごとのコンプライアンス文書を検討してください。",
      "needs": [
        "接触の種類と適用される要件を定義してください",
        "清掃や消毒方法との適合性を評価する",
        "バッチ、ドキュメント、検証要件の確認"
      ],
      "ids": [
        "esd-pa-103"
      ],
      "source": "https://www.techinherit.com/medical-devices-cases.html",
      "cases": [
        {
          "id": "monitor",
          "title": "患者モニターの囲い",
          "image": "cases/medical-monitor.webp",
          "material": "PC/ABS",
          "problem": "繰り返しの拭き取り、より清潔な露出、そして一貫した外観が住宅の重要な要件です。",
          "approach": "企業のケースでは医療用途のPC/ABSが記載されています。意図された使用のグレードと書類を確認しましょう。",
          "validation": "ひび割れ、色、寸法を実際の消毒液濃度、ワイプサイクル、温度と照合してください。カタログ資料は医療承認を意味しません。",
          "ids": [],
          "source": "https://www.techinherit.com/medical-devices-cases.html"
        },
        {
          "id": "snap-fit",
          "title": "診断装置のスナップフィット",
          "image": "cases/medical-snap.webp",
          "material": "POM",
          "problem": "繰り返し組み立てを行うには、靭性、低摩擦、安定した適合性が必要です。",
          "approach": "企業のケースでは、医療用途のためにPOMが用いられています。摩擦や疲労を構造や接触のシナリオに対して検証します。",
          "validation": "スナップサイクル、挿入力、洗浄適合性の検証;患者との接触用途には、別途生体適合性と規制審査が必要です。",
          "ids": [],
          "source": "https://www.techinherit.com/medical-devices-cases.html"
        }
      ]
    },
    {
      "id": "pet",
      "name": "ペット&日常用品",
      "en": "Pet & everyday products",
      "image": "applications/pet.webp",
      "line": "物質的な詳細は重要であり、日々の接触から繰り返しの使用まで。",
      "desc": "スマートペット製品、食品接触部品やハウジングについては、臭い、耐久性、接触条件、長期使用を考慮してください。",
      "needs": [
        "食べ物に接触する部分と非接触する部分を区別する",
        "洗浄、接触媒体、サービス温度を定義してください",
        "硬度、摩耗、外観を検証する"
      ],
      "ids": [],
      "source": "https://www.techinherit.com/pet-supplies-cases.html",
      "cases": [
        {
          "id": "feeder",
          "title": "自動給餌機ハウジング",
          "image": "cases/pet-feeder.webp",
          "material": "ABS",
          "problem": "住宅は掃除が容易で、一貫した外観を保ち、食べ物に接触する場所と接触しない場所を明確にする必要があります。",
          "approach": "企業のケースでは、食品接触要件のABSが説明されています。グレード、色、接触条件を個別に確認してください。",
          "validation": "接触時間、温度、ターゲット市場の移動記録を確認し、洗浄、臭い、スナップフィット寿命も評価します。",
          "ids": [],
          "source": "https://www.techinherit.com/pet-supplies-cases.html"
        },
        {
          "id": "crate",
          "title": "ペットの旅行用クレート",
          "image": "cases/pet-crate.webp",
          "material": "PP + impact modifier",
          "problem": "落下、荷重、寒冷環境の取り扱いには構造的な耐久性が求められます。",
          "approach": "企業のケースでは、耐候性要件のある衝撃改修PPが用いられています。リブとラッチ設計で材料を評価します。",
          "validation": "目標低温での全箱の落下、ラッチ、装填をテストします。熟成後の靭性と外観をチェックします。",
          "ids": [],
          "source": "https://www.techinherit.com/pet-supplies-cases.html"
        }
      ]
    }
  ],
  "articles": [
    {
      "id": "pa6-pa66",
      "category": "selection",
      "title": "PA6 またはPA66:選考はどこから始めるべきか?",
      "intro": "ナイロンの選択は、動作条件、部品設計、加工を通じて理解します。",
      "image": "material-clear.webp",
      "sections": [
        [
          "まずサービス条件を定義してください",
          "材料を比較する前に、サービス温度、荷重、接触媒体、寸法および外観要件を記録してください。樹脂名だけでなく、エンジニアリングチームに全体の運用状況を伝えましょう。"
        ],
        [
          "強化と改造を一緒に考えてみよう",
          "同じベース樹脂でも、補強、強化、熱安定化、難燃剤などで異なる挙動を示すことがあります。特定のグレードのPA6、PA66およびそれらの改良システムを比較してください。"
        ],
        [
          "一貫した条件下で検証",
          "データを読む際は、試験方法、試料の状態、厚さを確認してください。試料検証は実際の組み立てや使用も含めるべきです。異なる条件のデータを直接比較しないでください。"
        ]
      ],
      "source": "https://www.techinherit.com/raw-materials.html"
    },
    {
      "id": "esd-selection",
      "category": "functional",
      "title": "静電気防止材料:なぜ最初に抵抗標的を定義したのか?",
      "intro": "静的制御には明確な目標と一貫した試験・運用条件が必要です。",
      "image": "material-black.webp",
      "sections": [
        [
          "静的制御の目的を定義する",
          "電子部品保護、粉塵制御、機器干渉には異なる優先事項が求められる場合があります。静電気防止材料や導電性材料について議論する前に、適用目的を明確にしてください。"
        ],
        [
          "試験条件を確認しろ",
          "表面抵抗と体積抵抗は異なる指標です。対象範囲、試験方法、温度、湿度、運用環境を共有し、材料提案を比較可能にします。"
        ],
        [
          "構造的な挙動も検証する",
          "静電気制御化合物を、衝撃、剛性、表面、加工ニーズと並べて評価します。グレード文書と申請検証を通じて最終選択を確認します。"
        ]
      ],
      "source": "https://www.techinherit.com/conductive-materials.html"
    },
    {
      "id": "flame-insulation",
      "category": "application",
      "title": "難焼性を超えて:なぜ断熱が重要なのか?",
      "intro": "電気用途では、温度、難燃性、絶縁性の要件を同時に考慮する必要があります。",
      "image": "electronics.webp",
      "sections": [
        [
          "各要件を別々にリストアップしてください",
          "難燃性と断熱は異なる目的に対応します。炎、電気、熱の要件を別々にリストアップし、すべての要件を一つのプロパティで表現するのではなく、"
        ],
        [
          "実際の部品条件を考えてみましょう",
          "試料の厚さ、形状、環境は検証計画に影響を与えます。記録された条件が実際の部品と一致しているか確認してください。"
        ],
        [
          "実際の運転条件を検証しろ",
          "書類作成に加え、組み立て、動作電圧、湿度、接触媒体、長期使用に関する計画検証も行います。"
        ]
      ],
      "source": "https://www.techinherit.com/technical/170.html"
    },
    {
      "id": "carbon-dimension",
      "category": "application",
      "title": "カーボンファイバーナイロン:重量と寸法のバランス",
      "intro": "ファイバーの配向、設計、処理条件を通じて最終部品の挙動を考慮します。",
      "image": "material-blue.webp",
      "sections": [
        [
          "構造標的から始めよう",
          "炭素繊維補強は軽量で高剛性設計の議論を支えることができます。選定は依然として荷重、壁厚、接合方法から始まります。"
        ],
        [
          "加工された部分を考えてみよう",
          "繊維の分布はジオメトリや加工によって異なることがあります。実際の成形寸法とその方向性を比較してください。"
        ],
        [
          "サンプルで応用を評価する",
          "まず寸法、剛性、環境要件を定義します。その後、試験サンプルと特定グレードデータを評価し、材料と構造を一緒に検証します。"
        ]
      ],
      "source": "https://www.techinherit.com/technical/168.html"
    },
    {
      "id": "sample-validation",
      "category": "selection",
      "title": "データからサンプルへ:材料検証チェックリスト",
      "intro": "まず目標を定義し、その後、材料のドキュメントと実際の応用成果を結びつけてください。",
      "image": "research.webp",
      "sections": [
        [
          "書類を準備しろ",
          "ベース樹脂、補強または改変、色、適用される要件および試験条件を文書化してください。TDSは材料特性、SDSは安全情報、バッチ記録はトレーサビリティや納品の議論に使います。"
        ],
        [
          "サンプル検証",
          "試料試験の後、寸法、外観、関連特性をプロジェクト計画と照らし合わせて確認してください。処理条件や試料の状態を記録し、結果を確認できるようにします。"
        ],
        [
          "計画作成",
          "生産前に、受け入れ基準、パッケージ、識別、納品計画、変更コミュニケーションについて合意してください。"
        ]
      ],
      "source": "https://www.techinherit.com/raw-materials.html"
    },
    {
      "id": "weathering",
      "category": "functional",
      "title": "風化と黄ばみ:見た目を超えて見る",
      "intro": "材料評価には紫外線曝露、熱、耐用年数を含めてください。",
      "image": "material-white.webp",
      "sections": [
        [
          "環境を正確に説明してください",
          "室内照明、屋外の紫外線曝露、熱、洗浄剤は異なる要件を生み出します。材料の方向を選ぶ前に、環境と使用寿命を定義してください。"
        ],
        [
          "外観と構造を考慮しましょう",
          "色の変化は評価の一部に過ぎません。プロジェクトで求められる経年前後の機械的挙動と寸法を評価してください。"
        ],
        [
          "実行可能な検証計画を設定する",
          "ターゲットカラー、運用環境、受容基準をエンジニアリングチームと共有し、化合物、サンプル、検証の議論を指針してください。"
        ]
      ],
      "source": "https://www.techinherit.com/anti-yellowing-aging-parts/"
    },
    {
      "id": "food-contact",
      "category": "functional",
      "title": "食品接触材料:条件と書類",
      "intro": "計画材料や完成品検証の前に接触条件とターゲット市場を定義してください。",
      "image": "material-ivory.webp",
      "sections": [
        [
          "接触条件を定義してください",
          "プロジェクトブリーフには食品の種類、温度、接触時間、繰り返し使用、清掃を含めてください。ターゲット市場に適用される要件と検証方法を確認してください。"
        ],
        [
          "ドキュメントと完成品の検証をつなげる",
          "材料のドキュメントは、すべての完成品検証に代わるものではありません。色、添加剤、加工とプロジェクトの要件を確認しましょう。"
        ],
        [
          "追跡記録を残しておけ",
          "資材のバッチ、サプライヤー文書、サンプル詳細を記録し、検証、納品、変更コミュニケーションを支援します。"
        ]
      ],
      "source": "https://www.techinherit.com/food-grade-parts/"
    },
    {
      "id": "furniture-balance",
      "category": "application",
      "title": "家具構造:剛性と靭性のバランス",
      "intro": "荷重、衝撃、繰り返し使用シナリオに基づく材料要件を定義します。",
      "image": "architecture.webp",
      "sections": [
        [
          "荷重条件を指定してください",
          "椅子の背もたれ、肘掛け、座面サポートは異なる荷重を受けます。部品の位置、荷重の方向、循環使用条件を考慮してください。"
        ],
        [
          "構造と材料を一緒に評価する",
          "補強、壁厚、リブ、組立を一緒に評価してください。単一の機械的特性だけで構造的検証に代わることはできません。"
        ],
        [
          "勤務期間を通じて有効に",
          "試験中に外観、寸法、関連特性をチェックします。プロジェクトで求められる影響、疲労、環境検証を追加してください。"
        ]
      ],
      "source": "https://www.techinherit.com/"
    }
  ],
  "faqs": [
    [
      "selection",
      "材料選定に必要な情報は何ですか?",
      "サービス温度、装填、接触媒体、寸法および外観要件、適用される規制および予想量をご提供ください。図面、現行材料、故障サンプルも参考になります。"
    ],
    [
      "selection",
      "材料化合物はカスタマイズできますか?",
      "techinherit の企業ウェブサイトには、材料の研究開発およびカスタム配合能力が記載されています。強化、靭化、熱安定性、耐候性、静電気制御について議論してください。具体的な提案や開発計画は、技術評価が必要です。"
    ],
    [
      "selection",
      "PA6とPA66はどう比較すべきでしょうか?",
      "まずは運用条件と構造要件から始め、その後特定のグレードを比較してください。ベース樹脂名だけで判断するのではなく、補強、化合物配合、湿度状態、試験方法を考慮しましょう。"
    ],
    [
      "documents",
      "TDS、SDS、またはバッチの書類をリクエストできますか?",
      "材料チームに具体的な等級と必要な書類を伝えてください。技術データシート、安全データシート、バッチ検査文書の内容と範囲を別々に確認してください。"
    ],
    [
      "testing",
      "なぜユニバーサル性能値が記載されていないのですか?",
      "特性は品位、化合物系、試料の状態、試験方法によって異なります。これらのページは材料の指示を説明し、設計および購入のために確認された公式文書と検証結果を用いてください。"
    ],
    [
      "testing",
      "静電気防止要件はどのように指定すべきでしょうか?",
      "表面または体積抵抗の目標、試験方法、環境、静電気制御の目的、さらに機械的、外観、処理要件を定義してください。"
    ],
    [
      "testing",
      "食品接触の用途で何を考慮すべきでしょうか?",
      "ターゲット市場、食品の種類、接触温度と時間、洗浄および繰り返し使用条件を指定してください。これらの要件は材料の選択と検証の指針となります。"
    ],
    [
      "delivery",
      "まずサンプルを検証できますか?",
      "まずは性能目標、必要な数量、検証計画について話し合いましょう。エンジニアリングおよび商業チームは各プロジェクトのサンプル、開発、納品の取り決めを確認します。"
    ],
    [
      "delivery",
      "価格やリードタイムをリクエストするにはどうすればいいですか?",
      "材料の方向性、予想数量、色またはカスタム要件、目的地、タイミングを提供し、チームが価格やスケジュールを評価できるようにします。"
    ]
  ],
  "contact": {
    "phone": "+86 15017150281",
    "email": "eric@techinherit.com",
    "location": "中国、広東省東莞市"
  },
  "sourceDate": "2026-10-23"
};
