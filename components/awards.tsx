"use client";

export default function Awards() {
  return (
    <section id="awards" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* 섹션 제목 */}
        <h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight mb-12">
          Achievements &amp; Experience
        </h2>

        {/* 2컬럼 레이아웃 */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* 왼쪽 카드: 자격/수상 */}
          <div className="bg-white/80 rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Awards &amp; Certifications
            </h3>
            <p className="text-sm md:text-base text-neutral-500 mb-4">
              학업 성취와 실무 기본기를 보여주는 자격·수상 내역입니다.
            </p>
            <ul className="space-y-2 text-sm md:text-base text-neutral-800 leading-relaxed">
              <li>
                <span className="font-medium">Dean&apos;s List</span> — Outstanding
                Academic Achievement
              </li>
              <li>
                <span className="font-medium">TOEIC 890</span>
              </li>
              <li>
                <span className="font-medium">TOEFL 96</span>
              </li>
              <li>
                <span className="font-medium">
                  MOS Office Specialist (Excel · PowerPoint · Word)
                </span>{" "}
                — Full Certification
              </li>
              <li>
                <span className="font-medium">
                  우수상 — 단러닝클럽 Best Practice 선정
                </span>
              </li>
            </ul>
          </div>

          {/* 오른쪽 카드: 활동/경험 */}
          <div className="bg-white/80 rounded-2xl shadow-sm border border-neutral-200 p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Activities &amp; Experience
            </h3>
            <p className="text-sm md:text-base text-neutral-500 mb-4">
              전공과 연계된 프로젝트와 대외활동을 통해 쌓은 실무형 경험입니다.
            </p>

            <div className="space-y-5 text-sm md:text-base text-neutral-800 leading-relaxed">
              {/* GMU 프로젝트 */}
              <div>
                <h4 className="font-medium mb-1">
                  GMU Coursework Projects (English-based Research)
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    Urban Policy · International Economy · Conflict Studies 관련
                    프로젝트 수행
                  </li>
                </ul>
              </div>

              {/* UNESCO 프로그램 */}
              <div>
                <h4 className="font-medium mb-1">
                  Global Leadership Program — UNESCO Korea Commission
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>UNESCO 청소년 글로벌 민주시민 프로그램 스태프 참여</li>
                  <li>교육 운영, 행사 기획, 콘텐츠 개발, 참가자 관리 담당</li>
                  <li>
                    국제 프로그램 운영 경험을 통해 책임감과 조직 조정 능력 강화
                  </li>
                </ul>
              </div>

              {/* RT 동아리 */}
              <div>
                <h4 className="font-medium mb-1">
                  R.T Real Estate Trust Club — Vice President
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>신탁·법 구조 스터디 운영 및 발표</li>
                  <li>프로젝트 자료 취합 및 정리</li>
                  <li>실무형 문서 템플릿 제작 및 공유</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
