"use client"

import * as React from "react"
import { useState, useEffect } from "react"
import { X, Plus, Upload, ChevronDown, LayoutGrid } from "lucide-react"
import { EditableText } from "@/components/editable/editable-text"
import { EditableMedia } from "@/components/editable/editable-media"
import { EditableBackground } from "@/components/editable/editable-background"
import { useInlineEditor } from "@/contexts/inline-editor-context"
import { COMMON_STYLES } from "@/lib/constants"

export function Projects() {
  const { getData, saveData, isEditMode, saveToFile } = useInlineEditor()
  // 기본 데이터
  const defaultInfo = {
    title: "Projects & Presentations",
    subtitle: "프로젝트",
    initialDisplay: 18,
    loadMoreCount: 3,
    background: {"image":"","video":"","color":"","opacity":0.1},
    projects: [{"image":"/uploads/project-1765026019014-1765026019457.png","video":"","title":"1. Seongsu Urban & Location Analysis (성수동 입지·도시분석)","description":"\n•\t성수동 상권 변화, 젠트리피케이션 압력, 개발 가능성 등 핵심 쟁점을 도시적 관점에서 정리\n•\t상권 구조, 배후 수요, 공공·민간 개발 이슈를 항목별로 구조화\n•\t입지 해석·도시 흐름 파악·시각적 정리 능력을 보여주는 대표 프로젝트\n"},{"image":"/uploads/project-1765026084386-1765026084422.png","video":"","title":"2. Sinchon Commercial District Analysis (신촌 상권·입지분석)","description":"•\t유동인구, 매출, 점포 생태 등 상권의 정량·정성 요소를 체계적으로 분석\n•\t변화 원인(지하철 리모델링·경의선숲길 등)과 향후 개선 가능성을 정리\n•\t데이터 기반 상권 분석 및 구조화\n"},{"image":"/uploads/project-1765026187192-1765026187224.jpg","video":"","title":"3. Real Estate Trust Structure Project (부동산 신탁 구조 분석)","description":"\n• 혼합형(관리형+차입형) 신탁의 계약 구조·자금 흐름·책임 범위를 도식화해 전체 구조를 명확히 정리\n• 위탁자–수탁자–시공사–금융기관 간의 역할, 리스크 지점, 법적·재무적 연결 관계를 실무 관점에서 분석\n• 복잡한 법·제도 구조를 한눈에 보이는 구조도로 재구성 \n"},{"image":"/uploads/project-1765031183373-1765031183440.png","video":"","title":"4. Commercial Property Auction Analysis(상업용 부동산 경매 분석)","description":"• 마곡지구 상업용 부동산의 입지·수익성·개발 호재를 종합적으로 분석\n• 지도 기반으로 교통·생활편의·배후수요를 시각화해 미래가치 판단\n• 법인 공동투자 구조와 자본금·대출·임대수익을 포함한 재무 시나리오 직접 설계\n• 상업시설의 위험요인·수익 안정성을 평가해 투자 타당성을 도출\n"},{"image":"/uploads/project-1765031214797-1765031214870.png","video":"","title":"5. Sustainable & High-Tech Housing Study (친환경 첨단주택 분석)","description":"\n• 패시브·액티브 기술(단열·환기·태양열 등)을 구조적으로 정리\n• 국내·해외 사례 비교를 통해 기술별 성능 차이 도출\n• 에너지 자립·환경성·운영효율 중심의 지속가능 주택 모델 제안\n"},{"image":"/uploads/project-1765031382338-1765031382445.png","video":"","title":"6. ZARA Store Location Study (자라 매장 입지 분석)","description":"\n•\t소비자·상권·유동동선 기반으로 입지 타당성 평가\n•\t브랜드 특성과 지역 상권 구조의 상호작용 분석\n"},{"image":"/uploads/project-1765031582647-1765031582700.png","video":"","title":"7. Property Asset Management Case Study (부동산 자산관리)","description":"\n• IRR 기반의 수익성 분석과 현금흐름 구조를 정리하여 자산 매입 타당성 판단\n• 시나리오별 자산관리 전략(보유/매각/리모델링 옵션) 비교\n• 수익성·리스크·운영 요소를 구조적으로 정리\n"},{"image":"/uploads/project-7-1765031619309.png","video":"","title":"8. Shinchon Station Redevelopment Study(청년주택 및 주거단지 계획연구)","description":"\n• 공실·운영상 한계 등 현황을 진단하고 활용 방안 제시\n• 상권 쇠퇴·보행 단절·청년 주거 부족을 해결하기 위해 청년주택 + 상업시설 + 보행 네트워크 중심의 재생 모델을 설계\n• 입지·상권·정책·공간계획을 통합적으로 검토한 도시개발 연구\n"},{"image":"/uploads/project-1765031675215-1765031675286.png","video":"","title":"9.Housing Policy Analysis for Youth, Newlyweds & Seniors(주택정책 보고서)","description":"\n• 생애주기별 주거 실태·취약 요인을 비교하고 정책 한계 구조화\n• 국토부 실태조사 기반으로 기존 제도의 효과 검토\n• 청년 주거안정 중심의 개선안(소득연동 월세지원·공공임대·주거+일자리 연계 등) 제안\n"},{"image":"/uploads/project-9-1765031988819.png","video":"","title":"10. Land Economics Report(토지 분석보고서)","description":"\n\n• 토지 수요·공급·지가 형성 원리 이해\n• 개발 가능성 및 정책적 의미를 실제 사례에 적용\n• 경제적 논리를 실무적 관점으로 재해석한 보고서\n"},{"image":"/uploads/project-1765032020698-1765032020814.png","video":"","title":"11. PropTech Industry Analysis — Real Estate Investment & Capital Services((부동산 프롭테크 산업·투자 구조 분석 보고서)","description":"• 국내 프롭테크 산업 성장 요인·정부 정책·투자 구조 분석\n• 부동산 금융·투자 서비스 중심의 플랫폼 모델 비교\n• 기술·데이터가 부동산 시장에 미치는 영향 정리\n"},{"image":"/uploads/project-1765032080622-1765032080686.png","video":"","title":"12. 1·2·3기 New Town Development Study (신도시 비교 분석)","description":"\n• 초기 계획·도시 구조·수요·교통 등을 기준으로 3개 신도시 비교\n• 개선 필요 요소(교통·밀도·균형 개발 등) 도출\n\n"},{"image":"/uploads/project-1765032113268-1765032113382.png","video":"","title":" 13. Urban Policy & Regulation Improvement Report (도시계획·임대차 제도 개선 연구)","description":"• 임대차 시장 구조적 문제(계약 미작성·보증 미가입 등) 진단\n• 전세보증금 반환보증 확대, 임대인 재정상태 검증, 공공조직 설립 등 정책적 해결책을 단계별로 제안\n\n"},{"image":"/uploads/project-13-1765035287031.png","video":"","title":"14. Residential Auction Case Study ( 아파트 경매 분석)","description":"\n• 관악구 ○○동 아파트 경매 사건(2024타경○○)에 대해 권리관계, 임차인 현황, 인수금액, 리스크 요소를 검토\n• 낙찰가율·최저매각가·배당 가능성·대지권 비율 등 핵심 지표를 산출하여 투자 타당성 분석\n• 토지·건물 이용현황, 시세 비교, 주변 개발이슈를 종합해 예상 수익성과 안정성을 평가한 실무형 분석"},{"image":"/uploads/project-14-1765050835225.png","video":"","title":"15. GMU Policy Research Paper — U.S.–China Trade Analysis","description":"\n• 20페이지 분량의 영문 정책 분석 보고서\n• 미·중 무역갈등, 글로벌 공급망, 국제 경제질서 변화를 종합적으로 검토\n• 국제정책·거시적 분석 역량을 보여주는 학술 프로젝트\n"},{"image":"/uploads/project-1765051731910-1765051732078.png","video":"","title":"16. R.T Corporate Trust Analysis Project (부동산신탁 분석 프로젝트)","description":"·신탁·법 구조 스터디 운영 과정에서 작성한 실무형 분석 보고서\n·관리·담보·분양·토지 신탁 등 신탁 구조·법적 요건·계약서 사례 기반 정리\n·월별 주제(10·11·12월)에 따라 실제 계약·사례를 조사해 실무형 레포트로 정리\n·스터디 운영(부회장) 역할 수행의 증빙 문서로 활용되는 프로젝트"},{"image":"/uploads/project-1765051875229-1765051875395.png","video":"","title":"17. Real Estate Big Data Analysis Project (단러닝클럽 우수 프로젝트)","description":"•부동산 시장 의사결정을 위한 핵심 변수(수요·대출·가격)를 데이터 기반으로 분석\n•미래 시나리오별 가격 변동성 검토 및 정책적 시사점 도출\n•결과를 발표자료·보고서로 구조화하여 실무형 분석 프로세스 수행\n•프로젝트 완성도를 인정받아 우수상 수상"},{"image":"/uploads/project-1765102409572-1765102410234.png","video":"","title":"🏆 Award — Best Practice 우수상","description":"17번 Real Estate Big Data Analysis Project는\n단러닝클럽이 주관한 Best Practice 평가에서 우수 프로젝트로 선정되었습니다."}] as Array<{ image: string; video?: string; title: string; description: string }>
  }

  const [projectsInfo, setProjectsInfo] = useState(defaultInfo)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageAspects, setImageAspects] = useState<{ [key: string]: string }>({})
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [displayCount, setDisplayCount] = useState(defaultInfo.initialDisplay)
  const [showDisplaySettings, setShowDisplaySettings] = useState(false)
  const [newProject, setNewProject] = useState({
    image: "",
    title: "",
    description: ""
  })
  const [backgroundData, setBackgroundData] = useState(
    defaultInfo.background
  )
  
  // localStorage에서 데이터 로드 - 편집 모드가 변경될 때마다 실행
  useEffect(() => {
    const savedData = getData('projects-info') as typeof defaultInfo | null
    if (savedData) {
      const mergedData = { ...defaultInfo, ...savedData }
      setProjectsInfo(mergedData)
      setDisplayCount(mergedData.initialDisplay || defaultInfo.initialDisplay)
      // background 데이터가 있으면 설정
      if (savedData.background) {
        setBackgroundData(savedData.background)
      }
    }
    
    const savedBg = getData('projects-background') as { image: string; video: string; color: string; opacity: number } | null
    if (savedBg) {
      setBackgroundData(savedBg)
    }
  }, [isEditMode]) // isEditMode가 변경될 때마다 데이터 다시 로드
  
  const updateProjectsInfo = async (key: string, value: string | number | boolean | typeof projectsInfo.projects) => {
    const newInfo = { ...projectsInfo, [key]: value }
    setProjectsInfo(newInfo)
    saveData('projects-info', newInfo)
    // 파일에도 자동 저장
    await saveToFile('projects', 'Info', newInfo)
  }
  
  const updateProject = async (index: number, field: string, value: string) => {
    const newProjects = [...projectsInfo.projects]
    newProjects[index] = { ...newProjects[index], [field]: value }
    await updateProjectsInfo('projects', newProjects)
  }
  
  
  const removeProject = async (index: number) => {
    // 삭제할 프로젝트의 이미지/비디오 파일 경로 가져오기
    const projectToRemove = projectsInfo.projects[index]
    
    // 이미지가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.image && projectToRemove.image.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.image })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 이미지 삭제 완료: ${projectToRemove.image}`)
        }
      } catch (error) {
        console.error('프로젝트 이미지 삭제 실패:', error)
      }
    }
    
    // 비디오가 있고 uploads 폴더의 파일인 경우 삭제
    if (projectToRemove.video && projectToRemove.video.includes('/uploads/')) {
      try {
        const response = await fetch('/api/delete-image', {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ imagePath: projectToRemove.video })
        })
        if (response.ok) {
          console.log(`✅ 프로젝트 비디오 삭제 완료: ${projectToRemove.video}`)
        }
      } catch (error) {
        console.error('프로젝트 비디오 삭제 실패:', error)
      }
    }
    
    // 프로젝트 목록에서 제거
    const newProjects = projectsInfo.projects.filter((_, i) => i !== index)
    await updateProjectsInfo('projects', newProjects)
  }
  
  // 표시할 프로젝트들
  const validProjects = projectsInfo.projects
  const visibleProjects = isEditMode ? validProjects : validProjects.slice(0, displayCount)
  const hasMoreProjects = validProjects.length > displayCount
  
  // 더보기 버튼 클릭
  const loadMore = () => {
    setDisplayCount(prev => Math.min(prev + projectsInfo.loadMoreCount, validProjects.length))
  }
  
  // 이미지 비율 감지 함수
  const detectImageAspect = (src: string) => {
    if (!src) return // 빈 이미지 경로는 무시
    
    const img = new Image()
    img.onload = () => {
      const ratio = img.width / img.height
      let aspectClass: string
      
      // 일반적인 이미지 비율들 감지
      if (ratio >= 1.7 && ratio <= 1.8) {
        aspectClass = 'aspect-video' // 16:9 (1.777...)
      } else if (ratio >= 1.3 && ratio <= 1.35) {
        aspectClass = 'aspect-[4/3]' // 4:3 (1.333...)
      } else if (ratio >= 0.95 && ratio <= 1.05) {
        aspectClass = 'aspect-square' // 1:1 (1.0)
      } else if (ratio >= 0.74 && ratio <= 0.76) {
        aspectClass = 'aspect-[3/4]' // 3:4 (0.75)
      } else if (ratio >= 0.55 && ratio <= 0.57) {
        aspectClass = 'aspect-[9/16]' // 9:16 (0.5625)
      } else if (ratio >= 1.4 && ratio <= 1.45) {
        aspectClass = 'aspect-[3/2]' // 3:2 (1.5)
      } else if (ratio >= 0.65 && ratio <= 0.67) {
        aspectClass = 'aspect-[2/3]' // 2:3 (0.666...)
      } else if (ratio > 1.8) {
        aspectClass = 'aspect-[21/9]' // 초광각
      } else if (ratio < 0.55) {
        aspectClass = 'aspect-[1/2]' // 매우 세로
      } else {
        // 기타 비율은 가장 가까운 것으로
        if (ratio > 1) {
          aspectClass = 'aspect-video' // 기본 가로
        } else {
          aspectClass = 'aspect-[3/4]' // 기본 세로
        }
      }
      
      setImageAspects(prev => ({ ...prev, [src]: aspectClass }))
    }
    img.src = src
  }
  
  // 모든 이미지 비율 감지
  useEffect(() => {
    validProjects.forEach(project => {
      detectImageAspect(project.image)
    })
  }, [validProjects.length]) // 유효한 projects 개수가 변경되면 다시 실행

  // ESC 키로 모달 닫기
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null)
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <>
      <EditableBackground
        image={backgroundData.image}
        video={backgroundData.video}
        color={backgroundData.color}
        opacity={backgroundData.opacity}
        onChange={(data) => {
          const newData = { ...backgroundData, ...data }
          setBackgroundData(newData)
          saveData('projects-background', newData)
          
          // projectsInfo도 업데이트 (파일 저장을 위해)
          const updatedProjectsInfo = { ...projectsInfo, background: newData }
          setProjectsInfo(updatedProjectsInfo)
          saveData('projects-info', updatedProjectsInfo)
        }}
        storageKey="projects-background"
        className="relative"
      >
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 제목 */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              <EditableText
                value={projectsInfo.title}
                onChange={(value) => updateProjectsInfo('title', value)}
                storageKey="projects-title"
              />
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              <EditableText
                value={projectsInfo.subtitle}
                onChange={(value) => updateProjectsInfo('subtitle', value)}
                storageKey="projects-subtitle"
              />
            </p>
          </div>

          {/* 프로젝트가 없을 때 */}
          {validProjects.length === 0 && !isEditMode ? (
            <div className="text-center py-20">
              <span className="text-6xl block mb-4">🚀</span>
              <p className="text-xl text-muted-foreground">준비 중입니다</p>
            </div>
          ) : (
            /* 프로젝트 그리드 */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => {
                
                return (
                  <div 
                    key={index}
                    className="group flex flex-col relative cursor-pointer"
                    onClick={() => !isEditMode && setSelectedImage(project.video || project.image)}
                  >
                    {isEditMode && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          removeProject(index)
                        }}
                        className={COMMON_STYLES.deleteButton}
                      >
                        <X className={COMMON_STYLES.deleteIcon} />
                      </button>
                    )}
                    
                    {/* 이미지/비디오 영역 */}
                    <div className="relative aspect-[4/3] rounded-lg bg-muted mb-3 overflow-hidden">
                      {project.video ? (
                        <video
                          src={project.video}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          autoPlay
                          loop
                          muted
                          playsInline
                        />
                      ) : (
                        <EditableMedia
                          src={project.image || ""}
                          onChange={(src) => updateProject(index, 'image', src)}
                          type="auto"
                          storageKey={`project-${index}-image`}
                          className="absolute inset-0 w-full h-full object-contain bg-muted transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                          purpose={`project-${index}`}
                        />
                      )}
                    </div>
                    
                    {/* 텍스트 영역 */}
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground mb-1">
                        <EditableText
                          value={project.title || "프로젝트 제목"}
                          onChange={(value) => updateProject(index, 'title', value)}
                          storageKey={`project-${index}-title`}
                        />
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <EditableText
                          value={project.description || "프로젝트 설명"}
                          onChange={(value) => updateProject(index, 'description', value)}
                          storageKey={`project-${index}-description`}
                          multiline
                        />
                      </p>
                    </div>
                  </div>
                )
              })}
              
              {/* 편집 버튼 */}
              {isEditMode && (
                <div 
                  className="h-64 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center cursor-pointer hover:border-primary hover:bg-primary/5 transition-all"
                  onClick={() => setShowProjectModal(true)}
                >
                  <div className="text-center">
                    <Plus className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">프로젝트 추가</p>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* 더보기 버튼 */}
          {hasMoreProjects && !isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={loadMore}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all inline-flex items-center gap-2"
              >
                <ChevronDown className="h-5 w-5" />
                더 많은 프로젝트 보기 ({validProjects.length - displayCount}개 더)
              </button>
            </div>
          )}
          
          {/* 표시 설정 버튼 (편집 모드에서만) */}
          {isEditMode && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowDisplaySettings(true)}
                className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-lg transition-all inline-flex items-center gap-2"
              >
                <LayoutGrid className="h-5 w-5" />
                더보기 설정
              </button>
            </div>
          )}
          </div>
        </section>
      </EditableBackground>

      {/* 이미지 확대 모달 */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/70 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* 모달 컨테이너 */}
          <div 
            className="relative bg-background rounded-lg shadow-2xl max-w-4xl max-h-[85vh] w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 닫기 버튼 */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 z-10 p-2 rounded-full bg-background/80 hover:bg-background shadow-lg transition-all hover:scale-110"
              aria-label="닫기"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* 확대된 이미지/비디오 */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
              {selectedImage && (selectedImage.includes('.mp4') || selectedImage.includes('.webm') || selectedImage.includes('youtube')) ? (
                <video
                  src={selectedImage}
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  controls
                  autoPlay
                  loop
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="확대된 프로젝트 이미지"
                  className="max-w-full max-h-[75vh] object-contain rounded"
                  onError={(e) => {
                    const target = e.currentTarget
                    target.style.display = 'none'
                    const parent = target.parentElement
                    if (parent) {
                      const placeholder = document.createElement('div')
                      placeholder.className = 'text-muted-foreground text-center py-20'
                      placeholder.innerHTML = '<span class="text-6xl">📁</span><p class="mt-4">미디어를 불러올 수 없습니다</p>'
                      parent.appendChild(placeholder)
                    }
                  }}
                />
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* 프로젝트 추가 모달 */}
      {showProjectModal && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <div className="bg-background border rounded-lg p-6 max-w-2xl w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">새 프로젝트 추가</h3>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              {/* 이미지/비디오 업로드 */}
              <div>
                <label className="text-sm font-medium mb-2 block">프로젝트 이미지/비디오</label>
                <div className="h-48 rounded-lg overflow-hidden bg-muted">
                  {newProject.image ? (
                    <div className="relative h-full">
                      {newProject.image.includes('.mp4') || newProject.image.includes('.webm') ? (
                        <video 
                          src={newProject.image} 
                          className="w-full h-full object-cover"
                          autoPlay 
                          loop 
                          muted 
                          playsInline
                        />
                      ) : (
                        <img 
                          src={newProject.image} 
                          alt="프로젝트 미리보기"
                          className="w-full h-full object-cover"
                        />
                      )}
                      <button
                        onClick={() => setNewProject({...newProject, image: ""})}
                        className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="h-full flex flex-col items-center justify-center gap-2">
                      <input
                        id="project-upload"
                        type="file"
                        accept="image/*,video/mp4,video/webm"
                        onChange={async (e) => {
                          const file = e.target.files?.[0]
                          if (!file) return
                          
                          const isVideo = file.type.includes('video')
                          const maxSize = isVideo ? 20 * 1024 * 1024 : 5 * 1024 * 1024
                          
                          if (file.size > maxSize) {
                            alert(`파일 크기는 ${isVideo ? '20MB' : '5MB'} 이하여야 합니다`)
                            return
                          }
                          
                          const formData = new FormData()
                          formData.append('file', file)
                          formData.append('purpose', `project-${Date.now()}`)
                          
                          try {
                            const response = await fetch(isVideo ? '/api/upload-video' : '/api/upload-image', {
                              method: 'POST',
                              body: formData
                            })
                            
                            const result = await response.json()
                            
                            if (result.success) {
                              setNewProject({...newProject, image: result.path})
                            } else {
                              alert(`❌ ${result.error}`)
                            }
                          } catch {
                            alert('업로드 중 오류가 발생했습니다')
                          }
                        }}
                        className="hidden"
                      />
                      <label
                        htmlFor="project-upload"
                        className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 cursor-pointer"
                      >
                        <Upload className="h-4 w-4 inline mr-2" />
                        파일 업로드
                      </label>
                      <input
                        type="text"
                        value={newProject.image}
                        onChange={(e) => setNewProject({...newProject, image: e.target.value})}
                        placeholder="또는 URL 입력 (https://...)"
                        className="px-3 py-2 border rounded-lg bg-background text-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
              
              {/* 프로젝트 제목 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 제목</label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                  placeholder="예: 브랜드 리뉴얼 프로젝트"
                  className="w-full px-3 py-2 border rounded-lg bg-background"
                />
              </div>
              
              {/* 프로젝트 설명 */}
              <div>
                <label className="text-sm font-medium mb-1 block">프로젝트 설명</label>
                <textarea
                  value={newProject.description}
                  onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                  placeholder="예: 스타트업 A사의 전체 브랜딩 리뉴얼 및 UI/UX 개선"
                  className="w-full px-3 py-2 border rounded-lg bg-background resize-none"
                  rows={3}
                />
              </div>
            </div>
            
            <div className="mt-6 flex gap-2">
              <button
                onClick={async () => {
                  if (newProject.title && newProject.description) {
                    // 비디오 URL 체크 및 처리
                    const isVideo = newProject.image && (newProject.image.includes('.mp4') || newProject.image.includes('.webm'))
                    const projectData = {
                      image: isVideo ? '' : newProject.image,
                      video: isVideo ? newProject.image : '',
                      title: newProject.title,
                      description: newProject.description
                    }
                    const updatedProjects = [...projectsInfo.projects, projectData]
                    const updatedInfo = {...projectsInfo, projects: updatedProjects}
                    setProjectsInfo(updatedInfo)
                    saveData('projects-info', updatedInfo)
                    
                    // 파일에도 저장
                    const success = await saveToFile('projects', 'Info', updatedInfo)
                    if (success) {
                      alert('✅ 프로젝트가 추가되고 파일에 저장되었습니다!')
                    }
                    
                    setNewProject({ image: "", title: "", description: "" })
                    setShowProjectModal(false)
                  } else {
                    alert('제목과 설명을 입력해주세요')
                  }
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                추가
              </button>
              <button
                onClick={async () => {
                  // 업로드된 이미지가 있으면 삭제
                  if (newProject.image && newProject.image.includes('/uploads/')) {
                    try {
                      await fetch('/api/delete-image', {
                        method: 'DELETE',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ imagePath: newProject.image })
                      })
                    } catch (error) {
                      console.error('Failed to delete uploaded file:', error)
                    }
                  }
                  setNewProject({ image: "", title: "", description: "" })
                  setShowProjectModal(false)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* 표시 설정 모달 */}
      {showDisplaySettings && isEditMode && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100]">
          <div className="bg-background border rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">더보기 설정</h3>
              <button
                onClick={() => setShowDisplaySettings(false)}
                className="p-1 hover:bg-muted rounded-lg"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-6">
              {/* 초기 표시 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  처음에 보여줄 프로젝트 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => {
                        updateProjectsInfo('initialDisplay', num)
                        setDisplayCount(Math.min(displayCount, num))
                      }}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.initialDisplay === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.initialDisplay}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('initialDisplay', value)
                      setDisplayCount(Math.min(displayCount, value))
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 더보기 클릭 시 추가 개수 */}
              <div>
                <label className="text-sm font-medium mb-2 block">
                  더보기 클릭 시 추가로 보여줄 개수
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[3, 6, 9, 12].map(num => (
                    <button
                      key={num}
                      onClick={() => updateProjectsInfo('loadMoreCount', num)}
                      className={`py-2 px-3 rounded-lg border transition-all ${
                        projectsInfo.loadMoreCount === num 
                          ? 'bg-primary text-primary-foreground border-primary' 
                          : 'hover:bg-muted'
                      }`}
                    >
                      {num}개
                    </button>
                  ))}
                </div>
                <div className="mt-2">
                  <input
                    type="number"
                    value={projectsInfo.loadMoreCount}
                    onChange={(e) => {
                      const value = Math.max(1, parseInt(e.target.value) || 1)
                      updateProjectsInfo('loadMoreCount', value)
                    }}
                    min="1"
                    max="100"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    placeholder="직접 입력 (1-100)"
                  />
                </div>
              </div>
              
              {/* 현재 상태 미리보기 */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <p className="text-sm font-medium mb-2">현재 설정:</p>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>• 전체 프로젝트: {validProjects.length}개</p>
                  <p>• 처음 표시: {projectsInfo.initialDisplay}개</p>
                  <p>• 더보기 클릭당: {projectsInfo.loadMoreCount}개씩 추가</p>
                  {validProjects.length > projectsInfo.initialDisplay && (
                    <p className="text-primary mt-2">
                      → 더보기 버튼 {Math.ceil((validProjects.length - projectsInfo.initialDisplay) / projectsInfo.loadMoreCount)}번 클릭 필요
                    </p>
                  )}
                </div>
              </div>
              
              {/* 팁 */}
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-xs font-medium mb-1">💡 추천 설정:</p>
                <p className="text-xs text-muted-foreground">
                  • 프로젝트가 많은 경우: 6개 표시, 3개씩 추가<br/>
                  • 프로젝트가 적은 경우: 3개 표시, 3개씩 추가<br/>
                  • 모바일 고려: 3의 배수로 설정 권장
                </p>
              </div>
            </div>
            
            <div className="flex gap-2 mt-6">
              <button
                onClick={() => {
                  // 초기화
                  updateProjectsInfo('initialDisplay', 6)
                  updateProjectsInfo('loadMoreCount', 3)
                  setDisplayCount(6)
                }}
                className="flex-1 py-2 border rounded-lg hover:bg-muted"
              >
                기본값으로 초기화
              </button>
              <button
                onClick={async () => {
                  // 파일에 저장
                  const success = await saveToFile('projects', 'Info', projectsInfo)
                  if (success) {
                    alert('✅ 프로젝트 설정이 파일에 저장되었습니다!')
                  }
                  setShowDisplaySettings(false)
                }}
                className="flex-1 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90"
              >
                📁 저장 & 완료
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}