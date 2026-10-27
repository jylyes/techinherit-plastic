/* Localized material catalog. Shared grade identifiers and reference values. */
window.TechMaterials={
  "categories": [
    {
      "id": "transparent-nylon",
      "name": "투명 나일론 12",
      "en": "Transparent nylon 12",
      "intro": "빛 투과성, 인성, 화학물질 저항성, 성형 치수를 고려해 투명 나일론 솔루션을 선택하세요.",
      "image": "materials/nylon-tn900.webp",
      "thumbnail": "materials/nylon-tn900-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "long-chain-nylon",
      "name": "장쇄 나일론",
      "en": "Long-chain nylon",
      "intro": "수분 흡수, 치수 안정성, 화학적 노출 및 가공을 통해 롱체인 나일론을 탐구합니다.",
      "image": "materials/nylon-pa610.webp",
      "thumbnail": "materials/nylon-pa610-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "bio-based-nylon",
      "name": "바이오 기반 나일론",
      "en": "Bio-based nylon",
      "intro": "바이오 기반 재료 옵션을 부품 요구사항, 가공 및 프로젝트 문서와 일치시키세요.",
      "image": "materials/nylon-tn955.webp",
      "thumbnail": "materials/nylon-tn955-small.webp",
      "imageWidth": 1200,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "conductive",
      "name": "전도성 및 정전기 방지 소재",
      "en": "Conductive & antistatic",
      "image": "materials/esd-pa-101.webp",
      "intro": "저항 표적, 시험 환경, 정적 제어와 기계적 거동의 균형을 맞추기 위한 조건을 포함하세요.",
      "thumbnail": "materials/esd-pa-101-small.webp",
      "imageWidth": 600,
      "imageHeight": 450,
      "thumbnailWidth": 400
    },
    {
      "id": "carbon",
      "name": "탄소섬유 복합소재",
      "en": "Carbon-fiber composites",
      "image": "materials/cf-pa6.webp",
      "intro": "경량 설계, 강성 및 구조적 응용을 위한 탄소 섬유 강화 수지 시스템을 탐색해 보세요.",
      "thumbnail": "materials/cf-pa6-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400
    },
    {
      "id": "industry-specific",
      "name": "산업별 전용 소재",
      "en": "Industry-specific materials",
      "image": "industry/chair-base.webp",
      "thumbnail": "industry/chair-base-small.webp",
      "imageWidth": 900,
      "imageHeight": 900,
      "thumbnailWidth": 400,
      "intro": "산업 서비스 조건과 적용 요구에 맞춘 재료 선택 및 변형 솔루션."
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
        "광학 선명도",
        "강인함과 회복력",
        "화학 저항성"
      ],
      "desc": "투명 나일론 12은 투명 구조물, 전자기기 및 산업용 제품의 광학 투명성, 탄력성, 인성을 고려한 선택을 위한 것입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "light-transmittance",
          "label": "빛 투과성",
          "sourceLabel": "빛 투과성",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "몰딩의 수축, 평행",
          "sourceLabel": "몰딩의 수축, 평행",
          "value": "0.4 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "성형 수축, 횡방향",
          "sourceLabel": "성형 수축, 횡방향",
          "value": "0.5 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "인장 탄성 계수",
          "value": "1500 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "160 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "굽힘 계수",
          "value": "1500 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "65 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "샤르피 충돌, 노치 상태 확인",
          "sourceLabel": "샤르피 충돌, 노치 상태 확인",
          "value": "18 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "melt-flow-reference",
          "label": "녹는 흐름, 조건 확인",
          "sourceLabel": "녹는 흐름, 조건 확인",
          "value": "3 g/min",
          "available": true,
          "group": "processing",
          "condition": "용융유동 방법, 온도, 하중 및 시간 단위 확인"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT (1.8 MPa)",
          "sourceLabel": "HDT (1.8 MPa)",
          "value": "105 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "HDT (0.45 MPa)",
          "value": "120 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 · 두께, 색상 및 적용 가능한 수정 확인"
        }
      ],
      "profile": {
        "parts": "투명 하우징, 광학 부품, 전자 및 포장 부품",
        "focus": "투명 나일론 12은 투명 구조물, 전자기기 및 산업용 제품의 광학 투명성, 탄력성, 인성을 고려한 선택을 위한 것입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "광학 및 외관: 실제 두께에서 투과, 헤이즈 및 표면을 검증합니다",
          "화학물질 및 응력: 조립 상태에서 세정제와 응력 균열을 점검하세요",
          "온도 및 충격: 열 노출, 낙하 및 수명을 검증합니다"
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
      "family": "투명 PA",
      "features": [
        "광학 선명도",
        "강인함과 회복력",
        "화학 저항성"
      ],
      "desc": "자동차, 전자기기, 포장 용도에 적합한 강성, 낮은 수분 흡수, 화학 저항성을 결합한 비정질 투명 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1020 kg/m³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "water-absorption",
          "label": "수분 흡수",
          "sourceLabel": "수분 흡수",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "light-transmittance",
          "label": "빛 투과성",
          "sourceLabel": "빛 투과성",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "몰딩의 수축, 평행",
          "sourceLabel": "몰딩의 수축, 평행",
          "value": "0.2 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4, 2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "성형 수축, 횡방향",
          "sourceLabel": "성형 수축, 횡방향",
          "value": "0.3 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4, 2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "인장 탄성 계수",
          "value": "1600 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "150 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "굽힘 계수",
          "value": "1580 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "70 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "샤르피 충돌, 노치 상태 확인",
          "sourceLabel": "샤르피 충돌, 노치 상태 확인",
          "value": "30 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "melt-flow-reference",
          "label": "녹는 흐름, 조건 확인",
          "sourceLabel": "녹는 흐름, 조건 확인",
          "value": "2.8 g/min",
          "available": true,
          "group": "processing",
          "condition": "용융유동 방법, 온도, 하중 및 시간 단위 확인"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT (1.8 MPa)",
          "sourceLabel": "HDT (1.8 MPa)",
          "value": "125 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "HDT (0.45 MPa)",
          "value": "135 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 · 두께, 색상 및 적용 가능한 수정 확인"
        }
      ],
      "profile": {
        "parts": "투명 하우징, 광학 부품, 전자 및 포장 부품",
        "focus": "자동차, 전자기기, 포장 용도에 적합한 강성, 낮은 수분 흡수, 화학 저항성을 결합한 비정질 투명 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "광학 및 외관: 실제 두께에서 투과, 헤이즈 및 표면을 검증합니다",
          "화학물질 및 응력: 조립 상태에서 세정제와 응력 균열을 점검하세요",
          "온도 및 충격: 열 노출, 낙하 및 수명을 검증합니다"
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
        "광학 선명도",
        "강인함과 회복력",
        "화학 저항성"
      ],
      "desc": "광학 부품, 투명 하우징 및 산업용 부품의 인체성과 응력 균열 저항성을 평가하기 위한 고투과율 투명 나일론 12.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "light-transmittance",
          "label": "빛 투과성",
          "sourceLabel": "빛 투과성",
          "value": "≥92 %",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "몰딩의 수축, 평행",
          "sourceLabel": "몰딩의 수축, 평행",
          "value": "0.4 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "성형 수축, 횡방향",
          "sourceLabel": "성형 수축, 횡방향",
          "value": "0.5 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "62 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "인장 탄성 계수",
          "value": "1580 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "170 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "굽힘 계수",
          "value": "1580 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "72 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "샤르피 충돌, 노치 상태 확인",
          "sourceLabel": "샤르피 충돌, 노치 상태 확인",
          "value": "18 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "melt-flow-reference",
          "label": "녹는 흐름, 조건 확인",
          "sourceLabel": "녹는 흐름, 조건 확인",
          "value": "3 g/min",
          "available": true,
          "group": "processing",
          "condition": "용융유동 방법, 온도, 하중 및 시간 단위 확인"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT (1.8 MPa)",
          "sourceLabel": "HDT (1.8 MPa)",
          "value": "105 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "HDT (0.45 MPa)",
          "value": "120 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 · 두께, 색상 및 적용 가능한 수정 확인"
        }
      ],
      "profile": {
        "parts": "투명 하우징, 광학 부품, 전자 및 포장 부품",
        "focus": "광학 부품, 투명 하우징 및 산업용 부품의 인체성과 응력 균열 저항성을 평가하기 위한 고투과율 투명 나일론 12.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "광학 및 외관: 실제 두께에서 투과, 헤이즈 및 표면을 검증합니다",
          "화학물질 및 응력: 조립 상태에서 세정제와 응력 균열을 점검하세요",
          "온도 및 충격: 열 노출, 낙하 및 수명을 검증합니다"
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
      "family": "투명 PA",
      "features": [
        "바이오 기반 옵션",
        "광학 선명도",
        "강인함과 회복력"
      ],
      "desc": "자동차, 전자 및 프리미엄 포장 부품의 강성, 낮은 물 흡수, 가수분해 저항성을 평가하기 위한 생체 기반 투명 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "light-transmittance",
          "label": "빛 투과성",
          "sourceLabel": "빛 투과성",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "몰딩의 수축, 평행",
          "sourceLabel": "몰딩의 수축, 평행",
          "value": "0.6 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4, 2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "성형 수축, 횡방향",
          "sourceLabel": "성형 수축, 횡방향",
          "value": "0.8 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4, 2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "인장 탄성 계수",
          "value": "1680 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "160 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "굽힘 계수",
          "value": "1589 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "샤르피 충돌, 노치 상태 확인",
          "sourceLabel": "샤르피 충돌, 노치 상태 확인",
          "value": "15 kJ/㎡",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "melt-flow-reference",
          "label": "녹는 흐름, 조건 확인",
          "sourceLabel": "녹는 흐름, 조건 확인",
          "value": "3 g/min",
          "available": true,
          "group": "processing",
          "condition": "용융유동 방법, 온도, 하중 및 시간 단위 확인"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT (1.8 MPa)",
          "sourceLabel": "HDT (1.8 MPa)",
          "value": "120 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "HDT (0.45 MPa)",
          "value": "135 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "가연성 (UL 94)",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 · 1.5 mm · 두께, 색상 및 적용 가능한 수정 확인"
        }
      ],
      "profile": {
        "parts": "투명 하우징, 광학 부품, 전자 및 포장 부품",
        "focus": "자동차, 전자 및 프리미엄 포장 부품의 강성, 낮은 물 흡수, 가수분해 저항성을 평가하기 위한 생체 기반 투명 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "광학 및 외관: 실제 두께에서 투과, 헤이즈 및 표면을 검증합니다",
          "화학물질 및 응력: 조립 상태에서 세정제와 응력 균열을 점검하세요",
          "온도 및 충격: 열 노출, 낙하 및 수명을 검증합니다"
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
        "광학 선명도",
        "강인함과 회복력",
        "화학 저항성"
      ],
      "desc": "용기, 전자 부품, 광학 부품의 내열성, 인성, 투명한 외관을 위한 투명 나일론 12; 의도된 용도에 맞는 접촉 준수를 확인합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "ISO 1183 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "2 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "light-transmittance",
          "label": "빛 투과성",
          "sourceLabel": "빛 투과성",
          "value": "≥90 %",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "molding-shrinkage-parallel",
          "label": "몰딩의 수축, 평행",
          "sourceLabel": "몰딩의 수축, 평행",
          "value": "0.3 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "molding-shrinkage-transverse",
          "label": "성형 수축, 횡방향",
          "sourceLabel": "성형 수축, 횡방향",
          "value": "0.4 %",
          "available": true,
          "group": "processing",
          "condition": "ISO 294-4,2577 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "인장 탄성 계수",
          "value": "1600 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "150 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "굽힘 계수",
          "value": "1600 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "70 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "charpy-impact-state-pending",
          "label": "샤르피 충돌, 노치 상태 확인",
          "sourceLabel": "샤르피 충돌, 노치 상태 확인",
          "value": "30 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "melt-flow-reference",
          "label": "녹는 흐름, 조건 확인",
          "sourceLabel": "녹는 흐름, 조건 확인",
          "value": "2.8 g/min",
          "available": true,
          "group": "processing",
          "condition": "용융유동 방법, 온도, 하중 및 시간 단위 확인"
        },
        {
          "key": "hdt-1-8-mpa",
          "label": "HDT (1.8 MPa)",
          "sourceLabel": "HDT (1.8 MPa)",
          "value": "125 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "HDT (0.45 MPa)",
          "value": "135 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 75-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "HB",
          "available": true,
          "group": "thermal",
          "condition": "UL 94 · 두께, 색상 및 적용 가능한 수정 확인"
        }
      ],
      "profile": {
        "parts": "투명 하우징, 광학 부품, 전자 및 포장 부품",
        "focus": "용기, 전자 부품, 광학 부품의 내열성, 인성, 투명한 외관을 위한 투명 나일론 12; 의도된 용도에 맞는 접촉 준수를 확인합니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "광학 및 외관: 실제 두께에서 투과, 헤이즈 및 표면을 검증합니다",
          "화학물질 및 응력: 조립 상태에서 세정제와 응력 균열을 점검하세요",
          "온도 및 충격: 열 노출, 낙하 및 수명을 검증합니다"
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
        "바이오 기반 옵션",
        "수분 흡수 감소",
        "차원 안정성"
      ],
      "desc": "모노필라멘트, 케이블 코팅 및 기계 부품에서 낮은 수분 흡수, 저온 인성 및 치수 안정성을 갖춘 바이오 기반 롱체인 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "점도 옵션",
          "sourceLabel": "점도 옵션",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "녹는점",
          "value": "224 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "58 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "＞100 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "65 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "pellet-count",
          "label": "펠릿 카운트",
          "sourceLabel": "펠릿 카운트",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "loss-on-drying",
          "label": "건조 손실",
          "sourceLabel": "건조 손실",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.08 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "노치 없는 충격 강도",
          "sourceLabel": "노치 없는 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "6 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "3 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        }
      ],
      "profile": {
        "parts": "모노필라멘트, 튜빙, 케이블 코팅, 계측기 및 기계 부품",
        "focus": "모노필라멘트, 케이블 코팅 및 기계 부품에서 낮은 수분 흡수, 저온 인성 및 치수 안정성을 갖춘 바이오 기반 롱체인 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "수분 흡수 및 치수: 건조 및 조절 임계 치수 비교",
          "냉동 및 부하: 목표 온도에서의 충격 및 부하 시험",
          "화학 및 가공: 오일 노출, 수축 및 처리 창구 점검"
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
        "수분 흡수 감소",
        "차원 안정성",
        "오일 저항"
      ],
      "desc": "튼인성, 오일 저항성 및 솔, 모노필라멘트, 케이블 코팅 및 계기 부품 등 전기적 용도를 위한 롱체인 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "점도 옵션",
          "sourceLabel": "점도 옵션",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "녹는점",
          "value": "218 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "58 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "＞150 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "62 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "pellet-count",
          "label": "펠릿 카운트",
          "sourceLabel": "펠릿 카운트",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "loss-on-drying",
          "label": "건조 손실",
          "sourceLabel": "건조 손실",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.06 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "노치 없는 충격 강도",
          "sourceLabel": "노치 없는 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "6 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "2.8 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        }
      ],
      "profile": {
        "parts": "모노필라멘트, 튜빙, 케이블 코팅, 계측기 및 기계 부품",
        "focus": "튼인성, 오일 저항성 및 솔, 모노필라멘트, 케이블 코팅 및 계기 부품 등 전기적 용도를 위한 롱체인 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "수분 흡수 및 치수: 건조 및 조절 임계 치수 비교",
          "냉동 및 부하: 목표 온도에서의 충격 및 부하 시험",
          "화학 및 가공: 오일 노출, 수축 및 처리 창구 점검"
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
        "바이오 기반 옵션",
        "수분 흡수 감소",
        "차원 안정성"
      ],
      "desc": "자동차, 기기 및 산업 부품에서 인성, 강도, 낮은 수분 흡수 및 수축 조절을 위한 바이오 기반 롱체인 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "점도 옵션",
          "sourceLabel": "점도 옵션",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "녹는점",
          "value": "200 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "55 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "＞160 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "60 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "pellet-count",
          "label": "펠릿 카운트",
          "sourceLabel": "펠릿 카운트",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "loss-on-drying",
          "label": "건조 손실",
          "sourceLabel": "건조 손실",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.04 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "노치 없는 충격 강도",
          "sourceLabel": "노치 없는 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "10 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "2.5 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        }
      ],
      "profile": {
        "parts": "모노필라멘트, 튜빙, 케이블 코팅, 계측기 및 기계 부품",
        "focus": "자동차, 기기 및 산업 부품에서 인성, 강도, 낮은 수분 흡수 및 수축 조절을 위한 바이오 기반 롱체인 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "수분 흡수 및 치수: 건조 및 조절 임계 치수 비교",
          "냉동 및 부하: 목표 온도에서의 충격 및 부하 시험",
          "화학 및 가공: 오일 노출, 수축 및 처리 창구 점검"
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
        "수분 흡수 감소",
        "차원 안정성",
        "오일 저항"
      ],
      "desc": "압출, 사출 성형, 블로우 성형, 튜빙에서 낮은 수분 흡수, 오일 저항성, 치수 안정성을 갖춘 롱체인 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "점도 옵션",
          "sourceLabel": "점도 옵션",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "녹는점",
          "value": "192 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "52 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "＞200 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "58 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "pellet-count",
          "label": "펠릿 카운트",
          "sourceLabel": "펠릿 카운트",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "loss-on-drying",
          "label": "건조 손실",
          "sourceLabel": "건조 손실",
          "value": "＜1 ‰",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "노치 없는 충격 강도",
          "sourceLabel": "노치 없는 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "15 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "2 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        }
      ],
      "profile": {
        "parts": "모노필라멘트, 튜빙, 케이블 코팅, 계측기 및 기계 부품",
        "focus": "압출, 사출 성형, 블로우 성형, 튜빙에서 낮은 수분 흡수, 오일 저항성, 치수 안정성을 갖춘 롱체인 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "수분 흡수 및 치수: 건조 및 조절 임계 치수 비교",
          "냉동 및 부하: 목표 온도에서의 충격 및 부하 시험",
          "화학 및 가공: 오일 노출, 수축 및 처리 창구 점검"
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
        "수분 흡수 감소",
        "차원 안정성",
        "오일 저항"
      ],
      "desc": "저온 인성, 낮은 수분 흡수, 압출, 사출 성형, 블로우 성형 및 분말 가공 시 치수 안정성을 갖춘 롱체인 나일론입니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "viscosity-options",
          "label": "점도 옵션",
          "sourceLabel": "점도 옵션",
          "value": "Ⅰ Ⅱ Ⅲ",
          "available": true,
          "group": "processing",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "녹는점",
          "value": "180-190 °C",
          "available": true,
          "group": "thermal",
          "condition": "ISO 11357-1/-3 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "≥43 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "파손 시 신장",
          "value": "＞298 %",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 527-1/-2 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "굽힘 강도",
          "value": "≥34 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "ISO 178 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인하세요"
        },
        {
          "key": "pellet-count",
          "label": "펠릿 카운트",
          "sourceLabel": "펠릿 카운트",
          "value": "40-60 pellets/g",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "loss-on-drying",
          "label": "건조 손실",
          "sourceLabel": "건조 손실",
          "value": "＜1.0 ‰",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "density",
          "label": "밀도",
          "sourceLabel": "밀도",
          "value": "1.02 g/cm³",
          "available": true,
          "group": "physical",
          "condition": "시험 방법과 시편 상태 확인"
        },
        {
          "key": "unnotched-impact-strength",
          "label": "노치 없는 충격 강도",
          "sourceLabel": "노치 없는 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "notched-impact-strength-method-pending",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "20 kJ/m²",
          "available": true,
          "group": "mechanical",
          "condition": "노치 상태, 충격 방법 및 시편 상태 확인"
        },
        {
          "key": "saturated-water-absorption",
          "label": "포화 수분 흡수",
          "sourceLabel": "포화 수분 흡수",
          "value": "2 %",
          "available": true,
          "group": "physical",
          "condition": "ISO 62 · 시료 상태, 온도, 습도 및 전체 시험 조건을 확인"
        }
      ],
      "profile": {
        "parts": "모노필라멘트, 튜빙, 케이블 코팅, 계측기 및 기계 부품",
        "focus": "저온 인성, 낮은 수분 흡수, 압출, 사출 성형, 블로우 성형 및 분말 가공 시 치수 안정성을 갖춘 롱체인 나일론입니다.",
        "process": "등급별 건조, 용융 및 몰드 설정을 확인하고; 시험 중 수축, 외관, 치수를 확인하세요.",
        "reinforcement": "보강되지 않은 나일론; 등급 조성법을 확인해",
        "tests": [
          "수분 흡수 및 치수: 건조 및 조절 임계 치수 비교",
          "냉동 및 부하: 목표 온도에서의 충격 및 부하 시험",
          "화학 및 가공: 오일 노출, 수축 및 처리 창구 점검"
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
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PPS 기반의 탄소-섬유 복합재 방향. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "160 - 220 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "160 - 220 MPa"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "15000 - 22000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "15000 - 22000 MPa"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "1.5 - 3%",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "1.5 - 3%"
        },
        {
          "key": "flexural-strength",
          "label": "굽힘 강도",
          "sourceLabel": "Flexural Strength",
          "value": "250 -350 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "250 -350 MPa"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "14000 - 20000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "14000 - 20000 MPa"
        },
        {
          "key": "rockwell-hardness",
          "label": "록웰 경도",
          "sourceLabel": "Hardness (Rockwell)",
          "value": "M90 - M120",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "M90 - M120"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "280 - 290 °C",
          "available": true,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "280 - 290 °C"
        },
        {
          "key": "hdt-1-82-mpa",
          "label": "HDT (1.82 MPa)",
          "sourceLabel": "HDT (1.82 MPa)",
          "value": "260 - 280 °C",
          "available": true,
          "group": "thermal",
          "condition": "속성 이름에 명시된 하중; 기타 방법과 조건 세부사항은 명시되지 않음",
          "sourceValue": "260 - 280 °C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Use Temp",
          "value": "200 - 240 °C",
          "available": true,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "200 - 240 °C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "V-0",
          "available": true,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "V-0"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "120 - 150°C",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "120 - 150°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "3 - 5 hrs",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "3 - 5 hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "300 - 340 °C",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "300 - 340 °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "120 - 160 °C",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "120 - 160 °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "100 - 180 MPa",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "100 - 180 MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pc",
      "name": "탄소 섬유 강화 PC",
      "category": "carbon",
      "family": "PC",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PC 기반의 탄소-섬유 복합재 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-etfe",
      "name": "탄소 섬유 강화 ETFE",
      "category": "carbon",
      "family": "ETFE",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "ETFE 기반의 탄소-섬유 복합재 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pa6",
      "name": "탄소 섬유 강화 PA6",
      "category": "carbon",
      "family": "PA6",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PA6 기반의 탄소-섬유 복합재 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pa66",
      "name": "탄소 섬유 강화 PA66",
      "category": "carbon",
      "family": "PA66",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PA66 기반의 탄소-섬유 복합재 방향. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pa12",
      "name": "탄소 섬유 강화 PA12",
      "category": "carbon",
      "family": "PA12",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PA12 기반의 탄소-섬유 복합재 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-peek",
      "name": "탄소 섬유 강화 PEEK",
      "category": "carbon",
      "family": "PEEK",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PEEK를 기반으로 한 탄소-섬유 복합재 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pvdf",
      "name": "탄소 섬유 강화 PVDF",
      "category": "carbon",
      "family": "PVDF",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PVDF를 기반으로 한 탄소-섬유 복합 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pei",
      "name": "탄소 섬유 강화 PEI",
      "category": "carbon",
      "family": "PEI",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PEI를 기반으로 한 탄소-섬유 복합재 방향. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가하세요.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-1",
          "label": "녹는점",
          "sourceLabel": "Melting Point",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-load-unspecified",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-load-unspecified-2",
          "label": "HDT (부하 미정)",
          "sourceLabel": "Heat Deflection Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "Melt Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "cf-pfa",
      "name": "탄소 섬유 강화 PFA",
      "category": "carbon",
      "family": "PFA",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "PFA를 기반으로 한 탄소-섬유 복합재 방향. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "--"
        },
        {
          "key": "melting-point-pa66",
          "label": "녹는점 (PA66)",
          "sourceLabel": "Melting Point (PA66)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "-- °C"
        },
        {
          "key": "melting-point-pa6",
          "label": "녹는점 (PA6)",
          "sourceLabel": "Melting Point (PA6)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--- °C"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 0.45 MPa",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "속성 이름에 명시된 하중; 기타 방법과 조건 세부사항은 명시되지 않음",
          "sourceValue": "--°C"
        },
        {
          "key": "hdt-1-82-mpa",
          "label": "HDT (1.82 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 1.82 MPa",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "속성 이름에 명시된 하중; 기타 방법과 조건 세부사항은 명시되지 않음",
          "sourceValue": "--°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "--°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "--"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "--hrs"
        },
        {
          "key": "melt-temperature-pa66",
          "label": "녹는 온도 (PA66)",
          "sourceLabel": "Melt Temperature (PA66)",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "-- MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
      }
    },
    {
      "id": "long-carbon",
      "name": "긴 탄소섬유 복합재",
      "category": "carbon",
      "family": "열가소성 수지",
      "features": [
        "탄소 섬유 보강",
        "경량 설계",
        "높은 강성"
      ],
      "desc": "열가소성 수지를 기반으로 한 탄소-섬유 복합재 방향입니다. 섬유 분포, 구조 설계 및 공정을 고려하여 경량과 강성 요구사항을 함께 평가합니다.",
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
          "label": "인장 강도",
          "sourceLabel": "Tensile Strength",
          "value": "200 - 300 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "200 - 300 MPa"
        },
        {
          "key": "tensile-modulus",
          "label": "인장 탄성 계수",
          "sourceLabel": "Tensile Modulus",
          "value": "15,000–35,000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "15,000–35,000 MPa"
        },
        {
          "key": "elongation-at-break",
          "label": "파손 시 신장",
          "sourceLabel": "Elongation at Break",
          "value": "1-3%",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "1-3%"
        },
        {
          "key": "flexural-modulus",
          "label": "굽힘 계수",
          "sourceLabel": "Flexural Modulus",
          "value": "15,000–30,000 MPa",
          "available": true,
          "group": "mechanical",
          "condition": "시험 방법, 시료 상태 및 조건 미표지",
          "sourceValue": "15,000–30,000 MPa"
        },
        {
          "key": "melting-point-pa66",
          "label": "녹는점 (PA66)",
          "sourceLabel": "Melting Point (PA66)",
          "value": "255 - 265 °C",
          "available": true,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "255 - 265 °C"
        },
        {
          "key": "melting-point-pa6",
          "label": "녹는점 (PA6)",
          "sourceLabel": "Melting Point (PA6)",
          "value": "220 - 225 °C",
          "available": true,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "220 - 225 °C"
        },
        {
          "key": "hdt-0-45-mpa",
          "label": "HDT (0.45 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 0.45 MPa",
          "value": "200–250°C",
          "available": true,
          "group": "thermal",
          "condition": "속성 이름에 명시된 하중; 기타 방법과 조건 세부사항은 명시되지 않음",
          "sourceValue": "200–250°C"
        },
        {
          "key": "hdt-1-82-mpa",
          "label": "HDT (1.82 MPa)",
          "sourceLabel": "Heat Deflection Temperature, 1.82 MPa",
          "value": "180–230°C",
          "available": true,
          "group": "thermal",
          "condition": "속성 이름에 명시된 하중; 기타 방법과 조건 세부사항은 명시되지 않음",
          "sourceValue": "180–230°C"
        },
        {
          "key": "continuous-use-temperature",
          "label": "연속 사용 온도",
          "sourceLabel": "Continuous Service Temperature",
          "value": "100–150°C",
          "available": true,
          "group": "thermal",
          "condition": "방법은 명시되어 있지 않음; 서비스 온도를 부하와 수명에 대해 확인하기",
          "sourceValue": "100–150°C"
        },
        {
          "key": "flammability-ul-94",
          "label": "가연성 (UL 94)",
          "sourceLabel": "Flammability (UL94)",
          "value": "HB (V-0 grades available)",
          "available": true,
          "group": "thermal",
          "condition": "시료 두께와 등급은 명시되지 않음; 인증 청구항이 아님",
          "sourceValue": "HB (V-0 grades available)"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "Drying Temperature",
          "value": "80 - 100°C",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "80 - 100°C"
        },
        {
          "key": "drying-time",
          "label": "말릴 시간",
          "sourceLabel": "Drying Time",
          "value": "4 - 8hrs",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "4 - 8hrs"
        },
        {
          "key": "melt-temperature-pa66",
          "label": "녹는 온도 (PA66)",
          "sourceLabel": "Melt Temperature (PA66)",
          "value": "280 - 310 °C",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "280 - 310 °C"
        },
        {
          "key": "mold-temperature",
          "label": "곰팡이 온도",
          "sourceLabel": "Mold Temperature",
          "value": "80 - 100 °C",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "80 - 100 °C"
        },
        {
          "key": "injection-pressure",
          "label": "주입 압력",
          "sourceLabel": "Injection Pressure",
          "value": "80–140 MPa",
          "available": true,
          "group": "processing",
          "condition": "웹사이트 처리 참고; 등급, 장비 및 부품 시험과 함께 검증하세요",
          "sourceValue": "80–140 MPa"
        }
      ],
      "profile": {
        "parts": "경량 지지대, 정밀 프레임 및 고강성 구조",
        "focus": "구조와 가공을 평가하기 전에 매트릭스, 탄소섬유 함량, 섬유 길이를 정의하세요.",
        "process": "섬유 길이, 방향, 장비 마모 및 외관을 검토합니다; 매트릭스와 섬유 제형을 구분합니다.",
        "tests": [
          "강성 및 질량: 기하학과 하중이 일치하는 하중을 고려한 무게 감소 평가",
          "이방성: 흐름 방향과 횡방향 특성을 각각 검증",
          "가공 및 치수: 섬유 상태, 휘음 및 조립 상태 확인"
        ],
        "reinforcement": "탄소 섬유; 내용 확인 예정"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형",
        "난연성 옵션"
      ],
      "desc": "PA 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용하며 난연성 조성 방향을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용하며 난연성 조성 방향을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 판, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E10",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 판, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 판, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E7",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 판, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "유리섬유 보강을 이용한 고분자 정전기 방지 변형"
      ],
      "desc": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 변형과 유리섬유 보강 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 변형과 유리섬유 보강 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "유리섬유 강화가 적용된 고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인함",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "유리섬유 보강을 이용한 고분자 정전기 방지 변형"
      ],
      "desc": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 변형과 유리섬유 보강 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 변형과 유리섬유 보강 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "유리섬유 강화가 적용된 고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인함",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "금속 섬유 강화"
      ],
      "desc": "금속 섬유 강화 기술을 사용한 PA 기반 정전기 방전 재료. 적용 분야에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E5-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "금속 섬유 강화 기술을 사용한 PA 기반 정전기 방전 재료. 적용 분야에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "금속 섬유 강화"
      ],
      "desc": "PA 기반의 전도성 재료로, 금속-섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 판, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 전도성 재료로, 금속-섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 판, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "전도성 변형",
        "저항이 낮은 옵션"
      ],
      "desc": "PA 기반의 전도성 재료로, 저저항 요구사항을 위한 전도성 변형 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "50-500Ω",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 전도성 재료로, 저저항 요구사항을 위한 전도성 변형 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "전도성 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화"
      ],
      "desc": "PA 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E5-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화",
        "난연성 옵션"
      ],
      "desc": "PA 기반의 정적 소산 재료로, 난연성 조성 방향의 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E5-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 정적 소산 재료로, 난연성 조성 방향의 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화"
      ],
      "desc": "PA 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향은 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트, 스타일러스 등을 포함합니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향은 자동차 부품, 광산 장비, 전동 공구, 용기, 봉, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트, 스타일러스 등을 포함합니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화",
        "저항이 낮은 옵션"
      ],
      "desc": "PA 기반의 전도성 재료로, 저저항 요구사항을 위한 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "50-500Ω",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 전도성 재료로, 저저항 요구사항을 위한 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형"
      ],
      "desc": "PA 기반의 정적 소산 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 정적 소산 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "카본 블랙 변형"
      ],
      "desc": "PA 기반의 전도성 재료로, 탄소 검정 변형 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA 기반의 전도성 재료로, 탄소 검정 변형 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화",
        "저항이 낮은 옵션"
      ],
      "desc": "PA12 기반의 전도성 재료로, 저저항 요구사항을 위해 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E2",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스",
        "focus": "PA12 기반의 전도성 재료로, 저저항 요구사항을 위해 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 자동차 부품, 광산 장비, 전동 공구, 용기, 막대, 시트, 전기 하우징, 튜빙, 산업용 캐스터, 모노필라멘트 및 스타일러스 등이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "POM 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "POM 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E7",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "POM 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 영구 정전기 방지 재료로, 고분자 정전기 방지 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "금속 섬유 강화"
      ],
      "desc": "POM 기반의 정적 소산 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 정적 소산 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "금속 섬유 강화"
      ],
      "desc": "POM 기반의 전도성 재료로, 금속-섬유 강화 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 로드, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 전도성 재료로, 금속-섬유 강화 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 로드, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "전도성 변형",
        "저항이 낮은 옵션"
      ],
      "desc": "POM 기반의 전도성 재료로, 저저항 요구사항을 위한 전도성 변형 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 로드, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품에 대한 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "50-500Ω",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 전도성 재료로, 저저항 요구사항을 위한 전도성 변형 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 로드, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품에 대한 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "전도성 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화"
      ],
      "desc": "POM 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 ATM 및 지폐 취급 장비, 복사지 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 ATM 및 지폐 취급 장비, 복사지 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화"
      ],
      "desc": "POM 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향에는 ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형"
      ],
      "desc": "POM 기반의 정적 소산 재료로, 탄소 검은색 변형 기술을 사용합니다. 적용 지침에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 로드, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 정적 소산 재료로, 탄소 검은색 변형 기술을 사용합니다. 적용 지침에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 로드, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "카본 블랙 변형"
      ],
      "desc": "POM 기반의 전도성 재료로, 탄소 검색 변형 기술을 사용합니다. 적용 지침에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 막대, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "ATM 및 지폐 취급 장비, 복사기 종이 접점 부품, 자동차 부품, 봉, 시트, 기어, 베어링 및 전기 부품",
        "focus": "POM 기반의 전도성 재료로, 탄소 검색 변형 기술을 사용합니다. 적용 지침에는 ATM 및 지폐 취급 장비, 복사기 접점 부품, 자동차 부품, 막대, 시트, 기어, 베어링 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형",
        "난연성 옵션"
      ],
      "desc": "PC/ABS 기반의 영구 정전기 방지 재료로, 난연성 조성 방향의 폴리머 정전기 방지 변형 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8-10E10",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "PC/ABS 기반의 영구 정전기 방지 재료로, 난연성 조성 방향의 폴리머 정전기 방지 변형 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "PC 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "PC 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "PC 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "PC 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "금속 섬유 강화"
      ],
      "desc": "금속 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 핀셋, 전화 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "금속 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 핀셋, 전화 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "금속 섬유 강화"
      ],
      "desc": "ABS 기반의 전도성 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "ABS 기반의 전도성 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화",
        "난연성 옵션"
      ],
      "desc": "ABS 기반의 전도성 재료로, 난연성 조성 방향의 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "ABS 기반의 전도성 재료로, 난연성 조성 방향의 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화"
      ],
      "desc": "ABS 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "ABS 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화"
      ],
      "desc": "PC 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "PC 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형"
      ],
      "desc": "탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 핀셋, 전화 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 핀셋, 전화 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장 시트 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "카본 블랙 변형"
      ],
      "desc": "PC 기반의 전도성 재료로, 탄소 검색 변형 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "PC 기반의 전도성 재료로, 탄소 검색 변형 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "PC/ABS 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E10",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품",
        "focus": "PC/ABS 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 기술을 사용합니다. 적용 지침에는 핀셋, 휴대폰 및 카메라 하우징, 가전제품 하우징, 칩 트레이, 전자 부품, 포장지 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형",
        "난연성 옵션"
      ],
      "desc": "PC 기반의 영구 정전기 방지 재료로, 고분 정전기 방지 변형 기술을 사용하며 난연성 조성 방향을 사용합니다. 적용 방향에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8-10E10",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 영구 정전기 방지 재료로, 고분 정전기 방지 변형 기술을 사용하며 난연성 조성 방향을 사용합니다. 적용 방향에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "금속 섬유 강화"
      ],
      "desc": "금속 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "금속 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "금속 섬유 강화"
      ],
      "desc": "PC 기반의 전도성 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화",
        "난연성 옵션"
      ],
      "desc": "난연성 배합 지침을 가진 탄소 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "난연성 배합 지침을 가진 탄소 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화",
        "난연성 옵션"
      ],
      "desc": "PC 기반의 전도성 재료로, 탄소 섬유 강화 기술과 난연성 조성 방향을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성 부품의 저항성 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 탄소 섬유 강화 기술과 난연성 조성 방향을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성 부품의 저항성 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화"
      ],
      "desc": "탄소 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "탄소 섬유 강화 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화"
      ],
      "desc": "PC 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화",
        "저항이 낮은 옵션"
      ],
      "desc": "PC 기반의 전도성 재료로, 저저항 요구사항을 위해 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "<500 Ω",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 저저항 요구사항을 위해 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형",
        "난연성 옵션"
      ],
      "desc": "난연성 배합 지침을 가진 탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "난연성 배합 지침을 가진 탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "카본 블랙 변형",
        "난연성 옵션"
      ],
      "desc": "PC 기반의 전도성 재료로, 난연성 조성 방향의 탄소 흑색 변형 기술을 사용합니다. 적용 방향에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 난연성 조성 방향의 탄소 흑색 변형 기술을 사용합니다. 적용 방향에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형"
      ],
      "desc": "탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형"
      ],
      "desc": "탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "탄소 블랙 변형 기술을 사용한 PC 기반 정전기 방전 재료. 적용 분야에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "카본 블랙 변형"
      ],
      "desc": "PC 기반의 전도성 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "카본 블랙 변형"
      ],
      "desc": "PC 기반의 전도성 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 컨테이너 및 통신 장비",
        "focus": "PC 기반의 전도성 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 지침에는 보드, 시트, 캐리어 테이프, 프로파일, 핀셋, 전자 부품, 전기 하우징, 용기 및 통신 장비가 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "유리섬유 보강을 이용한 고분자 정전기 방지 변형"
      ],
      "desc": "PBT 기반의 영구 정전기 방지 재료로, 유리섬유 보강 기술을 결합한 폴리머 정전기 방지 변형을 사용합니다. 적용 방향은 자동차 부품, 전기 하우징 및 전자 부품을 포함하며; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "확인 예정",
          "available": false,
          "group": "electrical",
          "condition": "저항 범위는 검토가 필요하며; 지수 표기법, 단위 및 시험 조건을 확인하세요"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 전기 하우징 및 전자 부품",
        "focus": "PBT 기반의 영구 정전기 방지 재료로, 유리섬유 보강 기술을 결합한 폴리머 정전기 방지 변형을 사용합니다. 적용 방향은 자동차 부품, 전기 하우징 및 전자 부품을 포함하며; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "유리섬유 강화가 적용된 고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인함",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "금속 섬유 강화"
      ],
      "desc": "PBT 기반의 금속-섬유 강화 기술을 사용하는 전도성 재료. 적용 방향은 자동차 부품, 전기 하우징 및 전자 부품을 포함하며; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 전기 하우징 및 전자 부품",
        "focus": "PBT 기반의 금속-섬유 강화 기술을 사용하는 전도성 재료. 적용 방향은 자동차 부품, 전기 하우징 및 전자 부품을 포함하며; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화",
        "난연성 옵션"
      ],
      "desc": "난연성 배합 지침을 가진 탄소 섬유 강화 기술을 사용한 PBT 기반 정전기 방전 재료. 적용 분야에는 자동차 부품, 전기 하우징 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 전기 하우징 및 전자 부품",
        "focus": "난연성 배합 지침을 가진 탄소 섬유 강화 기술을 사용한 PBT 기반 정전기 방전 재료. 적용 분야에는 자동차 부품, 전기 하우징 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화",
        "난연성 옵션"
      ],
      "desc": "PBT 기반의 전도성 재료로, 탄소 섬유 강화 기술과 난연성 조제 방향을 사용합니다. 적용 방향에는 자동차 부품, 전기 하우징 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "flammability-ul94",
          "label": "가연성 등급",
          "sourceLabel": "가연성 등급",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "표준, 시편 두께, 색상 및 공식 보고서 확인"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 전기 하우징 및 전자 부품",
        "focus": "PBT 기반의 전도성 재료로, 탄소 섬유 강화 기술과 난연성 조제 방향을 사용합니다. 적용 방향에는 자동차 부품, 전기 하우징 및 전자 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화"
      ],
      "desc": "탄소 섬유 강화 기술을 사용한 PBT 기반 정전기 방전 재료. 적용 분야에는 자동차 부품, 전기 하우징 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 전기 하우징 및 전자 부품",
        "focus": "탄소 섬유 강화 기술을 사용한 PBT 기반 정전기 방전 재료. 적용 분야에는 자동차 부품, 전기 하우징 및 전자 부품이 포함됩니다; 등급 및 완제품에 대한 저항성과 가공 조건을 확인하십시오.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화"
      ],
      "desc": "PBT 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향은 자동차 부품, 전기 하우징 및 전자 부품을 포함하며; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "자동차 부품, 전기 하우징 및 전자 부품",
        "focus": "PBT 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 방향은 자동차 부품, 전기 하우징 및 전자 부품을 포함하며; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "영구 정전기 방지",
        "고분자 정전기 방지 변형"
      ],
      "desc": "MPPO/MPPE 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 변형 기술. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "내추럴; 맞춤 색상 선택 가능",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "영구 정전기 방지",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E8-10E10",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품",
        "focus": "MPPO/MPPE 기반의 영구 정전기 방지 재료로, 폴리머 정전기 방지 변형 기술. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "고분자 정전기 방지 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "금속 섬유 강화"
      ],
      "desc": "MPPO/MPPE 기반의 전도성 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장지, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "회색",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품",
        "focus": "MPPO/MPPE 기반의 전도성 재료로, 금속 섬유 강화 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장지, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "금속섬유 강화; 등급에 맞는 강화 함량과 제형을 확인해",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "탄소 섬유 강화"
      ],
      "desc": "MPPO/MPPE 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장지, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품",
        "focus": "MPPO/MPPE 기반의 정적 소산 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장지, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "전도성",
        "탄소 섬유 강화"
      ],
      "desc": "MPPO/MPPE 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장지, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "전도성",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E3-10E5",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품",
        "focus": "MPPO/MPPE 기반의 전도성 재료로, 탄소 섬유 강화 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장지, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "탄소섬유 강화; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
        "정전기 소산",
        "카본 블랙 변형"
      ],
      "desc": "MPPO/MPPE 기반의 정적 소산 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "material-color",
          "label": "재질 색상",
          "sourceLabel": "재질 색상",
          "value": "검정",
          "available": true,
          "group": "physical",
          "condition": "등급에 맞는 사용 가능한 색상과 배치 형태를 확인하세요"
        },
        {
          "key": "static-control-type",
          "label": "정전기 제어 타입",
          "sourceLabel": "정전기 제어 타입",
          "value": "정전기 소산",
          "available": true,
          "group": "electrical",
          "condition": "기능 분류; 프로젝트의 실제 저항력과 내구성 검증"
        },
        {
          "key": "surface-resistance-reference",
          "label": "표면 저항 참조",
          "sourceLabel": "표면 저항 참조",
          "value": "10E6-10E9",
          "available": true,
          "group": "electrical",
          "condition": "지수 표기법, 단위, 시험 방법, 전극, 시료 상태, 온도 및 습도를 확인"
        },
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "sourceLabel": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "sourceLabel": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급 TDS을 요청하고 방법과 시료 상태를 확인하세요"
        },
        {
          "key": "drying-temperature",
          "label": "건조 온도",
          "sourceLabel": "건조 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "sourceLabel": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급과 장비 확인; 시험 전 처리 창을 확인하세요"
        }
      ],
      "profile": {
        "parts": "칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품",
        "focus": "MPPO/MPPE 기반의 정적 소산 재료로, 탄소 흑색 변형 기술을 사용합니다. 적용 지침에는 칩 트레이, 턴테이블, 전자 부품 포장 시트, ATM 부품 및 전기 부품이 포함됩니다; 등급 및 완성된 부품의 저항 및 가공 조건을 검증합니다.",
        "process": "건조, 용융 온도, 몰드 온도, 숙제 시간을 확인하고; 시운전 후 저항, 외관, 치수를 점검합니다.",
        "reinforcement": "카본블랙 변형; 등급에 맞는 강화 함량과 제형을 확인",
        "tests": [
          "저항: 전극 정의, 전압, 시료 상태, 온도, 습도 시험; 재료 시료와 성형 부품 모두를 시험하세요",
          "장기 행동: 컨디셔닝, 청소, 마모 및 노화 후 정적 제어 평가",
          "부품 검증: 의도된 적용 분야에서 벽 두께, 섬유 방향, 조립 및 접지 평가"
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
      "name": "인체공학 의자 5발 베이스용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "로딩과 피로",
        "치수 및 조립",
        "몰딩 및 외관"
      ],
      "desc": "부품 기하학, 서비스 하중 및 성형 조건을 중심으로 의자 받침대 하중, 지속적인 서비스 및 주조기 조립을 위한 재료 솔루션을 개발합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "5발형 의자 받침대, 캐스터 소켓, 중앙 하중 지지 구조물",
        "focus": "부품 기하학, 서비스 하중 및 성형 조건을 중심으로 의자 받침대 하중, 지속적인 서비스 및 주조기 조립을 위한 재료 솔루션을 개발합니다.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "하중: 의도된 서비스 조건과 적용 시험 규격 하에서 정적 하중, 충격 및 주기적 피로를 평가합니다.",
          "조립: 캐스터 삽입 및 제거, 중앙 보어 맞춤 및 지속적인 하중 후 변형 점검.",
          "상태: 치수와 구조 거동을 비교할 때 성형 상태, 조절, 온도, 배치를 기록합니다."
        ]
      },
      "applicationIds": [
        "furniture"
      ],
      "solution": {
        "requirements": [
          {
            "title": "구조적 하중",
            "desc": "의자 하중, 하중 모드, 서비스 주기를 정의하며, 팔과 중앙 구경 주변의 약한 부위에 집중하세요."
          },
          {
            "title": "캐스터 및 중앙 인터페이스",
            "desc": "캐스터 소켓, 중앙 장착 보어, 조립 공차를 도면과 대비하여 조건 및 노화 등을 확인하세요."
          },
          {
            "title": "몰딩 및 일관성",
            "desc": "몰딩 윈도우와 게이트, 용접선, 섬유 방향 및 표면 요구사항을 평가합니다."
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
      "name": "전기차 충전 커넥터 및 충전건용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "전기 및 절연",
        "열 및 불꽃 요구 사항",
        "밀봉 및 치수"
      ],
      "desc": "부품 기능, 온도 상승, 벽 두께 및 목표물 사양을 정의한 후 장전 총과 커넥터의 매트릭스 및 개조 시스템을 선택하세요.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "차징 건 하우징, 커넥터 바디, 장착 지지대 및 결합 부품",
        "focus": "부품 기능, 온도 상승, 벽 두께 및 목표물 사양을 정의한 후 장전 총과 커넥터의 매트릭스 및 개조 시스템을 선택하세요.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "전기: 절연, 저항 및 관련 전기적 특성을 부품 기능과 목표 사양에 맞게 검증합니다.",
          "환경: 온도/습도 주기, 화학 접촉 및 야외 노출 후의 외관과 치수를 평가합니다.",
          "전체 부분: 화염 목표, 온도 상승, 결합 신뢰성을 실제 벽 두께, 밀봉 및 조립과 검증합니다."
        ]
      },
      "applicationIds": [
        "new-energy"
      ],
      "solution": {
        "requirements": [
          {
            "title": "전기 상태",
            "desc": "전도성 및 절연 기능을 분리하고; 작동 전압, 전기 간격 및 검증 요구사항을 정의합니다."
          },
          {
            "title": "열 및 불꽃 요구 사항",
            "desc": "지속 온도, 온도 상승, 시료 두께 및 색상을 정의합니다; 프로젝트의 열 및 화염 목표 확정."
          },
          {
            "title": "환경 및 밀폐 조립",
            "desc": "재료와 조립을 외부 노출, 세척 화학물질, 밀봉 및 교합 주기에 대해 검토하세요."
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
      "name": "냉각 팬 블레이드용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "회전 하중",
        "워페이지와 밸런스",
        "열 환경"
      ],
      "desc": "블레이드 강성, 회전 하중, 성형 치수를 기준으로 재료 개발, 속도, 온도, 블레이드 형상을 고려합니다; 임펠러와 조립된 시스템을 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "냉각 팬 블레이드, 임펠러 및 허브 인터페이스",
        "focus": "블레이드 강성, 회전 하중, 성형 치수를 기준으로 재료 개발, 속도, 온도, 블레이드 형상을 고려합니다; 임펠러와 조립된 시스템을 검증합니다.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "회전: 프로젝트 사양에 따라 속도, 사이클 시작/정지 및 구조적 완전성 테스트를 계획합니다.",
          "치수: 블레이드 기하학, 평평도, 허브 맞춤, 밸런스 및 열 사이클링 후 변화를 점검합니다.",
          "시스템: 실제 공기 흐름 경로와 장착부를 통해 진동, 소음, 냉각을 평가합니다."
        ]
      },
      "applicationIds": [
        "ai-hardware"
      ],
      "solution": {
        "requirements": [
          {
            "title": "속도 및 장전",
            "desc": "최대 속도, 시작/정지 사이클, 블레이드 형하학을 정의하며, 허브, 블레이드 뿌리, 용접 영역에 중점을 둡니다."
          },
          {
            "title": "치수와 균형",
            "desc": "칼날 형상, 수축 및 휨 상태를 점검하고; 배치와 성형 조건 간 균형을 기록합니다."
          },
          {
            "title": "열 및 작동",
            "desc": "재료와 임펠러를 작동 온도, 연속 작동 및 공기 흐름 조건에 대해 평가하세요."
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
      "name": "정밀 기어용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "치아 기하학 및 공차",
        "마찰과 마모",
        "피로와 수명"
      ],
      "desc": "이빨 정확도, 하중 및 마찰, 윤활, 온도, 소음 및 수명 요구사항을 포함한 변속기 소재 솔루션을 정의합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "정밀 변속기 기어, 기어 세트, 샤프트 보어 및 맞물리기 인터페이스",
        "focus": "이빨 정확도, 하중 및 마찰, 윤활, 온도, 소음 및 수명 요구사항을 포함한 변속기 소재 솔루션을 정의합니다.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "기하학: 도면에 대한 치아 프로파일, 동심도, 샤프트 보어 및 맞물리 공차를 점검합니다.",
          "작업: 실제 부하, 속도, 윤활 하에서의 마모, 온도 상승 및 소음을 평가한다.",
          "수명: 기록적인 사이클, 고장 모드, 변속기 수명 요구사항에 따른 환경 조건."
        ]
      },
      "applicationIds": [],
      "solution": {
        "requirements": [
          {
            "title": "전송 및 장전",
            "desc": "모듈, 톱니 프로파일, 토크, 속도 및 충격 하중을 정의한다; 연속 및 간헐적 작업을 구분한다."
          },
          {
            "title": "마찰 및 윤활",
            "desc": "맞물리는 재료, 윤활, 접촉 화학물질 및 마모 기준 확인"
          },
          {
            "title": "치수 및 적합성",
            "desc": "치아 기하학, 샤프트 보어 맞춤, 소음 목표가 수축, 조절, 온도 변화에 대해 검증됩니다."
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
      "name": "AI 하드웨어 및 전자기기 하우징용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "외관과 얇은 벽",
        "영향 및 조립",
        "전기 요구 사항"
      ],
      "desc": "외관, 얇은 벽 몰딩, 충격 및 열 중심의 AI 하드웨어 및 전자 하우징 소재를 선정하고; 각 부품별로 정적 제어 및 전자기 요구사항을 별도로 명시하고 검증합니다.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "AI 하드웨어 하우징, 전자 인클로저, 내부 지지대 및 스냅 핏",
        "focus": "외관, 얇은 벽 몰딩, 충격 및 열 중심의 AI 하드웨어 및 전자 하우징 소재를 선정하고; 각 부품별로 정적 제어 및 전자기 요구사항을 별도로 명시하고 검증합니다.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "외관: 색상, 질감, 용접 자국, 배치 농도를 확인하세요.",
          "구조: 방울 검사, 고정장치, 스냅 핏 사이클 및 열 사이클링 후 조립 상태를 평가합니다.",
          "기능: 재료와 시스템을 정의된 저항, 전기 또는 전자기 목표에 대해 시험합니다."
        ]
      },
      "applicationIds": [
        "ai-hardware",
        "electronics"
      ],
      "solution": {
        "requirements": [
          {
            "title": "외관 및 구조",
            "desc": "표면 마감, 색상, 벽 두께, 스냅 및 고정 장치, 용접 자국과 응력 영역을 정의하세요."
          },
          {
            "title": "열 및 전기 기능",
            "desc": "열, 화염, 단열, 정전기 제어, 전자기 요구사항을 별도의 프로젝트 요구사항으로 명시하세요."
          },
          {
            "title": "조립 및 환경",
            "desc": "재료와 부품을 드롭, 세척, 온도/습도, 내부 부품 배치 등을 검토하세요."
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
      "name": "아웃도어 스포츠 및 헬멧 부품용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "충격 및 인구 목표",
        "풍화와 색감",
        "조립 신뢰성"
      ],
      "desc": "부품 기능, 충격 모드, 햇빛 및 온도 변화를 중심으로 야외 스포츠 및 헬멧 액세서리용 재료를 개발하세요. 프로젝트 내에서 보호 기능과 그 검증 범위를 정의하세요.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "야외 스포츠 액세서리, 헬멧 부착물, 마운트, 버클 및 조정 부품",
        "focus": "부품 기능, 충격 모드, 햇빛 및 온도 변화를 중심으로 야외 스포츠 및 헬멧 액세서리용 재료를 개발하세요. 프로젝트 내에서 보호 기능과 그 검증 범위를 정의하세요.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "환경: 목표 햇빛, 온도, 땀, 청소 노출 후 외관과 구조를 평가합니다.",
          "사용: 조정 주기, 버클 결합, 장착 강도 및 노후 성능 점검.",
          "영향: 완성된 부품을 의도된 용도와 적용 가능한 규격에 따라 평가합니다; 카탈로그 정보는 보호 제품 검증을 대체하지 않습니다."
        ]
      },
      "applicationIds": [],
      "solution": {
        "requirements": [
          {
            "title": "부분 기능 및 범위",
            "desc": "액세서리, 마운트 및 보호 부품을 구분하고; 의도된 사용과 검증 범위를 정의합니다."
          },
          {
            "title": "야외 환경",
            "desc": "최소 및 최대 서비스 온도, 햇빛, 땀, 세제, 보관 조건을 기록하세요."
          },
          {
            "title": "버클과 반복 사용",
            "desc": "조정 메커니즘, 고정장치, 반복 결합을 검토하며, 약한 부분과 마모에 집중하세요."
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
      "name": "식품 접촉 주방가전 부품용 소재",
      "catalogType": "solution",
      "category": "industry-specific",
      "family": "프로젝트 승인",
      "features": [
        "음식 접촉 문서",
        "온도 및 청소",
        "냄새 및 조립"
      ],
      "desc": "접점 매체, 지속 시간, 온도, 목표 시장을 정의한 후, 열, 세척, 향기, 조립 등을 고려하여 식품 접촉 기기 부품의 등급과 문서를 선택하세요.",
      "source": "",
      "reference": {
        "accessed": "2026-10-24"
      },
      "properties": [
        {
          "key": "tensile-strength",
          "label": "인장 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "notched-impact-strength",
          "label": "노치 충격 강도",
          "value": "확인 예정",
          "available": false,
          "group": "mechanical",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "hdt-reference",
          "label": "열 편향 온도",
          "value": "확인 예정",
          "available": false,
          "group": "thermal",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "molding-shrinkage",
          "label": "몰딩 수축",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        },
        {
          "key": "melt-temperature",
          "label": "녹는 온도",
          "value": "확인 예정",
          "available": false,
          "group": "processing",
          "condition": "등급은 아직 명시되지 않음; 프로젝트의 특성, 시험 방법 및 시료 상태를 확인한다"
        }
      ],
      "profile": {
        "parts": "음식 접촉 주방 가전제품 부품, 용기 인터페이스, 뚜껑, 밀봉 인터페이스 및 구동 커플링",
        "focus": "접점 매체, 지속 시간, 온도, 목표 시장을 정의한 후, 열, 세척, 향기, 조립 등을 고려하여 식품 접촉 기기 부품의 등급과 문서를 선택하세요.",
        "process": "건조, 성형 및 부품 시험 전 등급, 부품 도면 및 장비 확인; 처리 매개변수는 공식 문서와 시험 결과 사용",
        "reinforcement": "부품 요구 사항에 대한 매트릭스, 보강재 및 기능성 조성 확인",
        "tests": [
          "문서: 등급, 색상, 접촉 조건 및 범위에 일치함; 일반적인 재료 설명은 식품 접촉 적합성을 증명하지 않습니다.",
          "연락처: 목표 시장 및 실제 사용을 위한 재료 및 완제품 테스트 설정",
          "사용: 세척 사이클, 온수 또는 증기, 냄새, 치수, 조립 후 균열 상태 평가."
        ]
      },
      "applicationIds": [],
      "solution": {
        "requirements": [
          {
            "title": "음식 접촉 조건",
            "desc": "직접 또는 간접 접촉 위치, 접촉 매체, 시간/온도 및 반복 사용 조건을 정의하세요."
          },
          {
            "title": "성적 및 서류",
            "desc": "목표 시장의 등급, 색상, 첨가 시스템 및 이용 가능한 식품 접촉 문서를 확인하세요."
          },
          {
            "title": "사용 및 청소",
            "desc": "온수, 증기, 세제, 악취, 기계적 적합성 등 재료와 부품 요구사항을 정의하세요."
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
      "name": "새로운 에너지",
      "en": "New energy",
      "image": "applications/new-energy.webp",
      "line": "전기적 및 열 조건에서 재료 거동을 균형 있게 조정하세요.",
      "desc": "배터리 인접 부품, 커넥터, 충전 장비 및 모터 구조의 경우, 난연성, 절연성, 열 거동 및 치수 안정성을 고려합니다.",
      "needs": [
        "작동 전압, 온도, 접촉 매체를 정의하세요",
        "해당 두께와 시험 조건에서 화염 방지 표적을 확인하라",
        "단열, 풍후 및 실제 조립 요구사항을 검증하세요"
      ],
      "ids": [],
      "source": "https://www.techinherit.com/new-energy-cases.html",
      "cases": [
        {
          "id": "connector",
          "title": "방수 커넥터",
          "image": "cases/energy-connector.webp",
          "material": "PA6 GF30",
          "problem": "전기 절연, 밀폐된 조립체, 그리고 야외 노출을 함께 해결해야 합니다.",
          "approach": "기업 케이스는 유리섬유 강화 PA6을 사용하며, 화염, 풍화, 전기 요구사항을 함께 고려합니다.",
          "validation": "실제 벽 두께에서 화염 거동과 전기적 특성을 검증하고, 시화 후 밀봉 및 치수도 확인하세요.",
          "ids": [],
          "source": "https://www.techinherit.com/new-energy-cases.html"
        },
        {
          "id": "motor-cover",
          "title": "모터 끝 덮개",
          "image": "cases/energy-motor.webp",
          "material": "PPS GF40",
          "problem": "장착 위치, 강성 및 적합성은 지속적인 열에 안정적으로 유지되어야 합니다.",
          "approach": "기업 케이스는 내열성, 낮은 습기 흡수, 치수 안정성을 결합한 PPS GF40를 사용합니다.",
          "validation": "변형, 열 사이클링, 크리프 및 조립 상태를 실제 온도 및 고정 하중에서 검증합니다; 이 특정 시스템에 대해 문의하세요.",
          "ids": [],
          "source": "https://www.techinherit.com/new-energy-cases.html"
        }
      ]
    },
    {
      "id": "ai-hardware",
      "name": "AI 및 스마트 하드웨어",
      "en": "AI & smart hardware",
      "image": "applications/ai-hardware.webp",
      "line": "정밀 구조와 정전기 민감 환경.",
      "desc": "스마트 기기 하우징부터 내부 지지대, 팬 관련 부품에 이르기까지, 정적 제어, 열 상태, 강성 및 외관을 하나의 재료 선택 프레임워크 내에서 고려하세요.",
      "needs": [
        "정전기 감도 및 저항 타겟을 정의하세요",
        "열 조건 및 장기 치수 변형 고려",
        "부품 설계 및 가공 시 섬유 방향 평가"
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
          "title": "서버 팬 커버",
          "image": "cases/ai-fan.webp",
          "material": "PBT GF30 FR",
          "problem": "경량 얇은 벽 구조물은 강성, 치수 안정성, 그리고 작동 신뢰성이 필요합니다.",
          "approach": "기업 케이스는 난연성 강화 PBT을 사용하며, 흐름, 보강, 정밀 성형을 함께 고려합니다.",
          "validation": "얇은 벽 충전, 휨, 장착점 피로 및 가열 후 간격을 검증합니다; 조립된 시스템의 소음을 평가합니다.",
          "ids": [],
          "source": "https://www.techinherit.com/ai-hardware-cases.html"
        },
        {
          "id": "edge-box",
          "title": "엣지 컴퓨팅 인클로저",
          "image": "cases/ai-edge.webp",
          "material": "PC GF20 FR",
          "problem": "구조 보호, 온도 상승 및 전자기 요구사항은 별도의 사양이 필요합니다.",
          "approach": "기업 사례는 난연성 유리섬유 강화 PC을 사용한다; 구조 보강과 EMC 타깃은 별도의 검증이 필요하다.",
          "validation": "열 사이클링, 마운트, 실제 두께에서의 화염 거동, 시스템 EMC를 검증하세요; 유리섬유 보강만으로는 차폐를 확립할 수 없습니다.",
          "ids": [],
          "source": "https://www.techinherit.com/ai-hardware-cases.html"
        }
      ]
    },
    {
      "id": "electronics",
      "name": "소비자 전자제품",
      "en": "Consumer electronics",
      "image": "applications/electronics.webp",
      "line": "외관, 구조, 사용자 경험을 결합하세요.",
      "desc": "스마트 기기, 가전제품 및 전자 하우징의 경우, 일관된 외관, 충격 동작, 전기 요구사항 및 정밀 조립을 고려하세요.",
      "needs": [
        "색상, 표면 및 풍화 요구사항을 정의하세요",
        "스냅 핏, 얇은 벽 및 조립 형상을 평가하세요",
        "온도 상승과 전기 조건에 따른 선택을 검증합니다"
      ],
      "ids": [
        "esd-abs-103"
      ],
      "source": "https://www.techinherit.com/consumer-electronics-cases.html",
      "cases": [
        {
          "id": "earbuds",
          "title": "무선 이어버드 충전 케이스",
          "image": "cases/electronics-earbuds.webp",
          "material": "PC/ABS",
          "problem": "컴팩트 하우징은 표면 품질, 스냅 핏 견인함, 정확한 조립이 필요합니다.",
          "approach": "기업 사례는 PC/ABS을 사용하여 흐름, 임팩트, 외관 요구를 몰딩과 일치시킵니다.",
          "validation": "색상 변화, 용접 자국, 개폐 주기, 드롭 후 맞춤 여부를 확인하세요; 검증에 청소 화학물질을 포함하세요.",
          "ids": [],
          "source": "https://www.techinherit.com/consumer-electronics-cases.html"
        },
        {
          "id": "phone-frame",
          "title": "전화 중간 프레임",
          "image": "cases/electronics-frame.webp",
          "material": "PA6 GF30",
          "problem": "가느다란 얇은 벽 부품은 강성, 평면성, 정밀한 맞춤이 필요합니다.",
          "approach": "기업 사례에서는 PA6 GF30; 보강, 저응력 성형, 섬유 배열이 치수에 공동으로 영향을 미칩니다.",
          "validation": "건조 상태와 조건 상태에서의 평탄성, 임계 치수, 조립 응력을 기록한 후 장치 기능을 검증합니다.",
          "ids": [],
          "source": "https://www.techinherit.com/consumer-electronics-cases.html"
        }
      ]
    },
    {
      "id": "furniture",
      "name": "사무용 가구",
      "en": "Office furniture",
      "image": "applications/furniture.webp",
      "line": "하중부터 외관까지 전체 사용 수명 고려",
      "desc": "팔걸이, 의자 등받이, 좌석 지지대 및 구조 부품의 경우, 하중, 순환 사용, 외관, 환경 노출을 평가합니다.",
      "needs": [
        "하중, 충격 및 순환 사용 조건을 정의하세요",
        "강화 재료의 강성과 인성의 균형",
        "의도된 환경에서 색상과 노화 상태를 평가하세요"
      ],
      "ids": [
        "cf-pa66"
      ],
      "source": "https://www.techinherit.com/office-furniture-cases.html",
      "cases": [
        {
          "id": "seat-bracket",
          "title": "좌석 하중 지지 브래킷",
          "image": "cases/furniture-bracket.webp",
          "material": "PA66 GF30",
          "problem": "지속적인 하중, 충격, 반복 사용은 변형과 피로를 유발할 수 있습니다.",
          "approach": "기업 케이스는 PA66 GF30을 사용하여 강성, 인성, 열 안정성, 휨을 균형 있게 처리합니다.",
          "validation": "정적 하중, 피로, 크리프, 습도가 실제 구조물에 미치는 영향을 테스트하며, 주로 나사와 용접선에 집중합니다.",
          "ids": [],
          "source": "https://www.techinherit.com/office-furniture-cases.html"
        },
        {
          "id": "armrest",
          "title": "팔걸이 지지대",
          "image": "cases/furniture-armrest.webp",
          "material": "PA66 GF30",
          "problem": "조립 적합, 하중 강성, 반복 접촉 마모는 균형을 이루어야 합니다.",
          "approach": "기업 사례에서는 정밀 구조, 하중 지지 및 마모 요구를 위해 PA66 GF30를 사용합니다.",
          "validation": "조정 주기, 국부 하중, 장착 치수, 장기간 사용 후 느슨함이나 마모 여부를 확인하세요.",
          "ids": [],
          "source": "https://www.techinherit.com/office-furniture-cases.html"
        }
      ]
    },
    {
      "id": "medical",
      "name": "의료기기",
      "en": "Medical devices",
      "image": "applications/medical.webp",
      "line": "재료 일관성은 맑은 조건에서 시작됩니다.",
      "desc": "의료기기 하우징 및 정밀 구조물의 경우, 세척제 노출, 치수 안정성, 추적성 및 프로젝트별 준수 문서를 고려하세요.",
      "needs": [
        "접촉 유형과 적용 가능한 요구사항을 정의하세요",
        "청소 및 소독 방법과의 적합성 평가",
        "배치, 문서 및 검증 요구사항 확인"
      ],
      "ids": [
        "esd-pa-103"
      ],
      "source": "https://www.techinherit.com/medical-devices-cases.html",
      "cases": [
        {
          "id": "monitor",
          "title": "환자-모니터 격리",
          "image": "cases/medical-monitor.webp",
          "material": "PC/ABS",
          "problem": "반복적인 닦기, 더 깨끗한 노출, 일관된 외관이 주요 주거 요건입니다.",
          "approach": "기업 사례는 의료 용도로 PC/ABS을 설명하며; 의도된 용도에 대한 등급과 문서를 검증하세요.",
          "validation": "균열, 색상, 치수를 실제 소독제 농도, 닦는 주기, 온도와 비교하세요; 카탈로그 자료는 의료 승인을 의미하지 않습니다.",
          "ids": [],
          "source": "https://www.techinherit.com/medical-devices-cases.html"
        },
        {
          "id": "snap-fit",
          "title": "진단 장치 스냅 핏",
          "image": "cases/medical-snap.webp",
          "material": "POM",
          "problem": "반복 조립은 인체성, 낮은 마찰, 안정적인 적합성이 필요합니다.",
          "approach": "기업 사례에서는 POM를 의료적 용도로 사용합니다; 구조 및 접촉 시나리오에 대한 마찰과 피로를 검증합니다.",
          "validation": "스냅 사이클, 삽입력, 세척 적합성을 검증합니다; 환자 접촉 용도는 별도의 생체 적합성과 규제 검토가 필요합니다.",
          "ids": [],
          "source": "https://www.techinherit.com/medical-devices-cases.html"
        }
      ]
    },
    {
      "id": "pet",
      "name": "애완동물 및 일상용품",
      "en": "Pet & everyday products",
      "image": "applications/pet.webp",
      "line": "일상적인 접촉부터 반복 사용까지 물질적 세부사항이 중요합니다.",
      "desc": "스마트 애완동물 제품, 식품 접촉 부품 및 하우징의 경우, 냄새, 내구성, 접촉 조건 및 장기 사용을 고려하세요.",
      "needs": [
        "음식 접촉 부분과 비접촉 부분을 구분하세요",
        "세척, 접촉 매체, 서비스 온도를 정의하세요",
        "경도, 마모, 외관을 검증하세요"
      ],
      "ids": [],
      "source": "https://www.techinherit.com/pet-supplies-cases.html",
      "cases": [
        {
          "id": "feeder",
          "title": "자동 급식 하우징",
          "image": "cases/pet-feeder.webp",
          "material": "ABS",
          "problem": "주택은 쉽게 청소하고 일관된 외관을 유지해야 하며, 음식 접촉 구역과 비접촉 구역이 명확히 명확히 표시되어야 합니다.",
          "approach": "기업 사례는 식품 접촉 요구사항에 대한 ABS을 설명합니다; 등급, 색상, 접촉 조건을 개별적으로 검증하세요.",
          "validation": "접촉 시간, 온도 및 목표 시장에 대한 이동 문서 확인; 또한 청소, 냄새 및 스냅핏 수명 평가",
          "ids": [],
          "source": "https://www.techinherit.com/pet-supplies-cases.html"
        },
        {
          "id": "crate",
          "title": "애완용 여행용 상자",
          "image": "cases/pet-crate.webp",
          "material": "PP + impact modifier",
          "problem": "낙하, 하중 및 냉랭 환경에서는 구조적 견고함이 필요합니다.",
          "approach": "기업 사례는 충격 변형 PP을 사용하며, 내상 요구사항을 포함합니다; 리브와 래치 설계를 포함한 재료를 평가합니다.",
          "validation": "목표 저온에서 전체 상자의 낙하, 걸쇠, 하중을 테스트합니다; 숙성 후 인성과 외관을 점검합니다.",
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
      "title": "PA6 혹은 PA66: 선발은 어디서 시작해야 할까요?",
      "intro": "작동 조건, 부품 설계 및 공정을 통해 나일론 선택을 이해하세요.",
      "image": "material-clear.webp",
      "sections": [
        [
          "먼저 서비스 조건을 정의하세요",
          "재료를 비교하기 전에 서비스 온도, 적재, 접촉 매체, 치수 및 외관 요구사항을 기록하세요. 수지 이름만 비교하는 것이 아니라 엔지니어링 팀에 전체 운영 상황을 제공하세요."
        ],
        [
          "보강재와 수정 함께 고려",
          "동일한 기본 수지가 보강, 강인, 열 안정화 또는 난연 화합물로 인해 다르게 작용할 수 있습니다. 특정 등급의 PA6, PA66 및 그 변형된 시스템을 비교하세요."
        ],
        [
          "일관된 조건에서 검증",
          "데이터를 읽을 때 테스트 방법, 시료 상태 및 두께를 확인하세요. 시료 검증은 실제 조립과 사용도 포함해야 하며; 서로 다른 조건의 데이터를 직접 비교하지 마십시오."
        ]
      ],
      "source": "https://www.techinherit.com/raw-materials.html"
    },
    {
      "id": "esd-selection",
      "category": "functional",
      "title": "정전기 방지 재료: 왜 저항 타겟을 먼저 정의하는가?",
      "intro": "정적 제어는 명확한 목표와 일관된 시험 및 작동 조건을 필요로 합니다.",
      "image": "material-black.webp",
      "sections": [
        [
          "정적 제어의 목적을 정의하라",
          "전자 부품 보호, 먼지 제어, 장비 간섭은 서로 다른 우선순위가 필요할 수 있습니다. 정전기 또는 전도성 재료에 대해 논의하기 전에 적용 목적을 정의하세요."
        ],
        [
          "시험 조건 확인",
          "표면 저항과 부피 저항은 서로 다른 측정 방법입니다. 목표 범위, 시험 방법, 온도, 습도, 운영 환경을 공유하여 재료 제안을 비교 가능하게 만듭니다."
        ],
        [
          "구조적 행동도 검증하세요",
          "정전기 제어 화합물을 충격, 강성, 표면 및 처리 요구와 함께 평가합니다. 등급 문서화와 적용 검증을 통해 최종 선택을 확정합니다."
        ]
      ],
      "source": "https://www.techinherit.com/conductive-materials.html"
    },
    {
      "id": "flame-insulation",
      "category": "application",
      "title": "난연성을 넘어서: 단열재가 왜 중요한가요?",
      "intro": "전기적 응용은 온도, 난연성 및 절연 요구사항을 함께 고려해야 합니다.",
      "image": "electronics.webp",
      "sections": [
        [
          "각 요구사항을 별도로 나열하세요",
          "난연성과 단열은 서로 다른 목적을 다룹니다. 화염, 전기, 열 요구사항을 하나의 속성으로 모든 요구사항을 나타내지 말고 별도로 나열하세요."
        ],
        [
          "실제 부품 상태 고려",
          "시료 두께, 형상, 환경은 검증 계획에 영향을 미칩니다. 문서화된 조건이 실제 부품과 일치하는지 확인하세요."
        ],
        [
          "실제 작동 조건을 검증해",
          "문서화와 함께 조립, 작동 전압, 습도, 접촉 매체 및 장기 사용에 관한 계획 검증도 포함됩니다."
        ]
      ],
      "source": "https://www.techinherit.com/technical/170.html"
    },
    {
      "id": "carbon-dimension",
      "category": "application",
      "title": "탄소 섬유 나일론: 무게와 치수의 균형",
      "intro": "섬유 방향, 설계 및 가공 조건을 통해 최종 부품 거동 고려",
      "image": "material-blue.webp",
      "sections": [
        [
          "구조물 표적부터 시작해",
          "탄소섬유 보강은 경량, 고강성 설계에 대한 논의를 뒷받침할 수 있습니다. 선정은 여전히 하중, 벽 두께, 접합 방식에서 시작됩니다."
        ],
        [
          "가공 부품 고려",
          "섬유 분포는 형상과 가공 방식에 따라 달라질 수 있습니다. 실제 성형 크기와 방향성 거동을 비교해 보세요."
        ],
        [
          "샘플로 적용 평가",
          "먼저 치수, 강성 및 환경 요구사항을 정의하세요. 그 다음 시험 샘플과 특정 등급 데이터를 평가하여 재료와 구조를 함께 검증합니다."
        ]
      ],
      "source": "https://www.techinherit.com/technical/168.html"
    },
    {
      "id": "sample-validation",
      "category": "selection",
      "title": "데이터에서 샘플로: 재료 검증 체크리스트",
      "intro": "먼저 목표를 정의한 후, 재료 문서를 실제 적용 결과와 연결하세요.",
      "image": "research.webp",
      "sections": [
        [
          "서류 준비",
          "기본 수지, 보강 또는 변형, 색상, 적용 요구사항 및 시험 조건을 문서화하세요. TDS는 재료 특성, SDS은 안전 정보, 배치 기록은 추적 및 납품 논의를 위해 사용하세요."
        ],
        [
          "샘플 검증",
          "샘플 시험 후에는 치수, 외관 및 관련 특성을 프로젝트 계획과 대조하여 확인하세요. 처리 조건과 샘플 상태를 기록하여 결과를 검토할 수 있도록 하세요."
        ],
        [
          "계획 생산",
          "생산 전에 수락 기준, 포장, 식별, 납품 계획 및 변경 커뮤니케이션에 합의하세요."
        ]
      ],
      "source": "https://www.techinherit.com/raw-materials.html"
    },
    {
      "id": "weathering",
      "category": "functional",
      "title": "풍화와 노랗게 변함: 겉모습 너머로 보기",
      "intro": "자외선 노출, 열 및 수명을 재료 평가에 포함하세요.",
      "image": "material-white.webp",
      "sections": [
        [
          "환경을 정확히 묘사해 주세요",
          "실내 조명, 야외 자외선 노출, 열, 청소제는 서로 다른 요구사항을 만듭니다. 재료 방향을 선택하기 전에 환경과 수명을 정의하세요."
        ],
        [
          "외관과 구조 고려",
          "색상 변화는 평가의 한 부분에 불과합니다. 프로젝트에 따라 노화 전후의 기계적 거동과 치수를 평가하세요."
        ],
        [
          "실행 가능한 검증 계획을 세우세요",
          "목표 색상, 운영 환경, 수용 기준을 엔지니어링 팀과 공유하여 화합물, 샘플 및 검증 논의를 안내합니다."
        ]
      ],
      "source": "https://www.techinherit.com/anti-yellowing-aging-parts/"
    },
    {
      "id": "food-contact",
      "category": "functional",
      "title": "식품 접촉 재료: 조건 및 문서",
      "intro": "계획 자료와 완성 부품 검증 전에 접촉 조건과 목표 시장을 정의하세요.",
      "image": "material-ivory.webp",
      "sections": [
        [
          "접촉 조건을 정의하세요",
          "프로젝트 브리프에는 식품 종류, 온도, 접촉 시간, 반복 사용 및 세척 횟수를 포함하세요. 목표 시장에 적용 가능한 요구사항과 검증 방법을 확인하세요."
        ],
        [
          "문서를 완제품 검증과 연결",
          "재료 문서화가 모든 완성 부품 검증을 대체하지는 않습니다. 색상, 첨가제, 가공 사항을 프로젝트 요구사항과 함께 확인하세요."
        ],
        [
          "추적 기록을 유지하세요",
          "자재 배치, 공급업체 문서, 샘플 세부 정보를 기록하여 검증, 납품 및 변경 커뮤니케이션을 지원합니다."
        ]
      ],
      "source": "https://www.techinherit.com/food-grade-parts/"
    },
    {
      "id": "furniture-balance",
      "category": "application",
      "title": "가구 구조: 강성과 강인함의 균형",
      "intro": "하중, 충격 및 반복 사용 시나리오를 통해 재료 요구량을 정의합니다.",
      "image": "architecture.webp",
      "sections": [
        [
          "적재 조건을 명시하세요",
          "의자 등받이, 팔걸이, 좌석 지지대는 각각 다른 하중을 받습니다. 부품 위치, 하중 방향, 순환 사용 조건을 고려하세요."
        ],
        [
          "구조와 재료를 함께 평가하세요",
          "보강, 벽 두께, 리브 및 조립부를 함께 평가하세요. 단일 기계적 특성만으로는 구조적 검증을 대체할 수 없습니다."
        ],
        [
          "복무 기간 내내 인정받으세요",
          "시험 중 외관, 치수 및 관련 특성을 점검합니다. 프로젝트에 따라 충격, 피로, 환경 검증을 추가하세요."
        ]
      ],
      "source": "https://www.techinherit.com/"
    }
  ],
  "faqs": [
    [
      "selection",
      "재료 선정에 필요한 정보는 무엇인가요?",
      "서비스 온도, 적재, 접촉 매체, 치수 및 외관 요구사항, 적용 규정 및 예상 수량을 제공해 주세요. 도면, 현재 자재, 고장 샘플도 도움이 될 수 있습니다."
    ],
    [
      "selection",
      "재료 화합물을 맞춤 설정할 수 있나요?",
      "techinherit의 기업 웹사이트는 소재 연구개발 및 맞춤 혼합 능력을 설명하고 있습니다. 강화, 강화 처리, 열 안정성, 기후 영향 또는 정전기 제어에 대해 논의하십시오; 특정 제안과 개발 계획은 엔지니어링 평가가 필요합니다."
    ],
    [
      "selection",
      "PA6와 PA66 어떻게 비교해야 할까요?",
      "우선 작동 조건과 구조적 요구사항부터 시작한 후 특정 등급을 비교하세요. 기본 수지 이름만으로 결정하기보다는 보강, 화합물 조성, 습도 상태 및 시험 방법을 고려하세요."
    ],
    [
      "documents",
      "TDS, SDS 또는 배치 문서를 요청할 수 있나요?",
      "필요한 구체적인 등급과 문서를 자재팀에 알려주세요. 기술 데이터시트, 안전 데이터시트, 배치 검사 문서의 내용과 범위를 별도로 확인하세요."
    ],
    [
      "testing",
      "왜 보편적 성능 값은 목록에 없나요?",
      "특성은 등급, 화합물 시스템, 시료 상태 및 시험 방법에 따라 다릅니다. 이 페이지들은 재료 지침을 설명합니다; 설계 및 구매에 검증된 공식 문서와 검증 결과를 활용합니다."
    ],
    [
      "testing",
      "정전기 방지 요구사항은 어떻게 명시해야 할까요?",
      "표면 또는 부피 저항 목표, 시험 방법, 환경 및 정적 제어 목적, 기계적, 외관 및 가공 요구사항을 정의합니다."
    ],
    [
      "testing",
      "식품 접촉 적용 시 무엇을 고려해야 할까요?",
      "목표 시장, 식품 종류, 접촉 온도와 지속 시간, 세척 및 반복 사용 조건을 명시하세요. 이 요구사항은 재료 선택과 검증을 안내합니다."
    ],
    [
      "delivery",
      "먼저 샘플을 검증할 수 있을까요?",
      "먼저 성능 목표, 요구량, 검증 계획을 논의하세요. 엔지니어링 및 상업 팀이 각 프로젝트의 샘플, 개발 및 납품 계획을 확인합니다."
    ],
    [
      "delivery",
      "가격과 리드 타임을 어떻게 요청하나요?",
      "자재 방향, 예상 수량, 색상 또는 맞춤 요구사항, 목적지 및 시기를 제공하여 팀이 가격과 일정을 평가할 수 있도록 하세요."
    ]
  ],
  "contact": {
    "phone": "+86 15017150281",
    "email": "eric@techinherit.com",
    "location": "중국 광둥 동관에"
  },
  "sourceDate": "2026-10-23"
};
