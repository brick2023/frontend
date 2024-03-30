import React from "react";

const features = () => {
    return <div>
    <div className="features">
      <h1 className="text-center features-title">Features</h1>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          <div className="col">
            <div className="card h-100 card-design">
              <div className="feature-circles circle-img-1" />
              <div className="card-body">
                <h2 className="card-title feature-card-title">
                  <strong>多元化學習</strong>
                </h2>
                <p className="card-text feature-card-text">
                  涵蓋多種不同領域的課程，讓同學們在一個平台上便可探索與學習不同領域的知識，建立更全面的知識基礎。
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-design">
              <div className="feature-circles circle-img-2" />
              <div className="card-body">
                <h2 className="card-title feature-card-title">
                  <strong>學習分析</strong>
                </h2>
                <p className="card-text feature-card-text">
                  透過影片觀看時長、暫停次數等進行學習行為的深度調查，讓學生檢討自學能力。
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-design">
              <div className="feature-circles circle-img-3" />
              <div className="card-body">
                <h2 className="card-title feature-card-title">
                  <strong>使用者導向</strong>
                </h2>
                <p className="card-text feature-card-text">
                  學生可在觀看後對影片進行評分與心得回饋，打造符合自己學習風格的環境。
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100 card-design">
              <div className="feature-circles circle-img-4" />
              <div className="card-body">
                <h2 className="card-title feature-card-title">
                  <strong>資源豐富</strong>
                </h2>
                <p className="card-text feature-card-text">
                  除了自己所選修的課程相關影片，學生亦可透過平台的搜尋功能，找到符合喜好領域的多元影片。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
}

export default features;