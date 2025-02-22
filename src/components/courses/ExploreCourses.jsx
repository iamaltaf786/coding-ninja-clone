import React from "react";

function ExploreCourses() {
  return (
    <>
      <div className="flex flex-col items-center h-[600px]">
        <div className="w-[80%] flex flex-col items-center">
          <h2 className="font-bold text-8xl text-[#e3e3e3] py-[70px] px-[110px]">
            OUR OFFERINGS
          </h2>

          <div className="absolute">
            <img
              className="relative right-[480px] top-[215px]"
              src="https://files.codingninjas.com/bootcampicon-32524.svg"
              alt="Side Tracker icon"
            />
          </div>

          <div className="w-full">
            <div className="flex">
              <h3 className="font-bold pl-[170px] pr-[10px] py-[10px]">
                Job Bootcamp
              </h3>
              <p className="bg-[#e6ecfc] font-[500] px-[20px] m-[8px] rounded-r-[15px]">
                For Graduates
              </p>
            </div>
          </div>

          <div className="w-full">
            <div className="flex ml-[170px] gap-[15px] mt-[20px]">
              <div className="w-[440px] bg-white rounded-[15px] shadow-lg">
                <div className="flex bg-[#f5f7fe] items-center h-[125px] rounded-t-[15px]">
                  <img
                    className="w-[75px] bg-white p-[15px] rounded-[40px] mx-[10px] "
                    src="https://files.codingninjas.com/layer-1-1734090969.svg"
                    alt="Full Stack Web Development with GenAI"
                  />
                  <p className="text-xl">
                    Full Stack Web Development with GenAI
                  </p>
                </div>
                <div className="flex px-[10px] py-[20px] justify-between">
                  <p>140+ Hrs of Content</p>
                  <p>600+ Problems</p>
                  <p>10k+ Lerners</p>
                </div>
              </div>

              <div className="w-[440px] bg-white rounded-[15px] shadow-lg">
                <div className="flex bg-[#f5f7fe] items-center h-[125px] rounded-t-[15px]">
                  <img
                    className="w-[75px] bg-white p-[15px] rounded-[40px] mx-[10px] "
                    src="https://files.codingninjas.com/data-analytics-1-1734090968.svg"
                    alt="Data Analytics with GenAI"
                  />
                  <p className="text-xl"> Data Analytics with GenAI </p>
                </div>
                <div className="flex px-[10px] py-[20px] justify-between">
                  <p>100+ Hrs of Content</p>
                  <p>300+ Problems</p>
                  <p>2000+ Lerners</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full bg-[#fffbf5]">
            <div className="w-full mt-[200px] pl-[170px] h-[1100px]">
              <div>
                <h3 className="font-bold mb-[20px]">IIT Certifications</h3>

                <div className="absolute">
                  <img
                    className="relative top-[-53px] left-[-60px]"
                    src="https://files.codingninjas.com/frame-1000004112-1733471037.svg"
                    alt="Side Tracker icon"
                  />
                </div>
                {/* <p className="bg-[#745e39] px-[20px] py-[3px] mt-[10px] w-[128px] text-white rounded-[15px] text-sm">
                  For graduates
                </p> */}
              </div>
              <div>
                <div className="flex flex-col">
                  <p className="bg-[#745e39] px-[20px] py-[3px] mt-[10px] w-[128px] text-white rounded-[15px] text-sm">
                    For graduates
                  </p>
                  <div className="w-[90%] mt-[20px] flex justify-evenly">
                    {/* card-1 */}
                    <div className="bg-white w-[270px] h-[370px] rounded-[10px]">
                      {/* container */}
                      <div className="p-[15px]">
                        {/* upper part */}
                        <div>
                          <img
                            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                            alt="course-banner"
                          />
                          <div className="absolute">
                            <img
                              className="relative bg-white p-[6px] rounded-[8px] left-[6px] top-[-32px]"
                              src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                              alt="course-logo"
                            />
                          </div>
                          <p className="mt-[40px] font-semibold text-xl mb-[40px]">
                            PG Certification in Data Analytics with GenAI
                          </p>
                          <p className="text-[#745e39] bg-[#fffbf4] rounded-r-[6px] mb-[50px]">
                            E&ICT Academy, IIT Guwahati
                          </p>
                        </div>
                        {/* lower part */}
                        <div className="flex justify-between">
                          <div className="flex w-[90px] gap-[10px]">
                            <img
                              src="https://files.codingninjas.com/chatgpt-home-page-v3-1733408297.webp"
                              alt="course-additional-logo-0"
                            />
                            <img
                              src="https://files.codingninjas.com/home-page-v3-app-1733395395.svg"
                              alt="course-additional-logo-1"
                            />
                            <img
                              src="https://files.codingninjas.com/google-analytics-1733395394.svg"
                              alt="course-additional-logo-2"
                            />
                          </div>
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>
                    {/* card-2 */}
                    <div className="bg-white w-[270px] h-[370px] rounded-[10px]">
                      {/* container */}
                      <div className="p-[15px]">
                        {/* upper part */}
                        <div>
                          <img
                            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                            alt="course-banner"
                          />
                          <div className="absolute">
                            <img
                              className="relative bg-white p-[6px] rounded-[8px] left-[6px] top-[-32px]"
                              src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                              alt="course-logo"
                            />
                          </div>
                          <p className="mt-[40px] font-semibold text-xl mb-[15px]">
                            Professional Certificate in Full Stack Web
                            Development with GenAI
                          </p>
                          <p className="text-[#745e39] bg-[#fffbf4] rounded-r-[6px] mb-[45px]">
                            IITM Pravartak, TIH IIT Madras
                          </p>
                        </div>
                        {/* lower part */}
                        <div className="flex justify-between">
                          <div className="flex w-[24px] gap-[10px]">
                            <img
                              src="https://files.codingninjas.com/image-7-1733478713.webp"
                              alt="course-additional-logo-0"
                            />
                            <img
                              src="https://files.codingninjas.com/image-8-1733478712.webp"
                              alt="course-additional-logo-1"
                            />
                            <img
                              src="https://files.codingninjas.com/image-9-1733478711.webp"
                              alt="course-additional-logo-2"
                            />
                            <img
                              src="https://files.codingninjas.com/image-591-1733478709.webp"
                              alt="course-additional-logo-3"
                            />
                          </div>
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>

                    {/* card-3 */}
                    <div className="bg-white w-[270px] h-[370px] rounded-[10px]">
                      {/* container */}
                      <div className="p-[15px]">
                        {/* upper part */}
                        <div>
                          <img
                            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                            alt="course-banner"
                          />
                          <div className="absolute">
                            <img
                              className="relative bg-white p-[6px] rounded-[8px] left-[6px] top-[-32px]"
                              src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                              alt="course-logo"
                            />
                          </div>
                          <p className="mt-[40px] font-semibold text-xl mb-[15px]">
                            PG Certification in Full Stack Web Development with
                            GenAI
                          </p>
                          <p className="text-[#745e39] bg-[#fffbf4] rounded-r-[6px] mb-[45px]">
                            E&ICT Academy, IIT Guwahati
                          </p>
                        </div>
                        {/* lower part */}
                        <div className="flex justify-between">
                          <div className="flex w-[24px] gap-[10px]">
                            <img
                              src="https://files.codingninjas.com/image-7-1733478713.webp"
                              alt="course-additional-logo-0"
                            />
                            <img
                              src="https://files.codingninjas.com/image-8-1733478712.webp"
                              alt="course-additional-logo-1"
                            />
                            <img
                              src="https://files.codingninjas.com/image-9-1733478711.webp"
                              alt="course-additional-logo-2"
                            />
                            <img
                              src="https://files.codingninjas.com/image-591-1733478709.webp"
                              alt="course-additional-logo-3"
                            />
                          </div>
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mt-[20px]">
                  <p className="bg-[#745e39] px-[20px] py-[3px] mt-[10px] w-[165px] text-white rounded-[15px] text-sm">
                    For college students
                  </p>
                  <div className="w-[90%] mt-[20px] flex justify-evenly">
                    {/* card-1 */}
                    <div className="bg-white w-[270px] h-[370px] rounded-[10px]">
                      {/* container */}
                      <div className="p-[15px]">
                        {/* upper part */}
                        <div>
                          <img
                            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                            alt="course-banner"
                          />
                          <div className="absolute">
                            <img
                              className="relative bg-white p-[6px] rounded-[8px] left-[6px] top-[-32px]"
                              src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                              alt="course-logo"
                            />
                          </div>
                          <p className="mt-[40px] font-semibold text-xl mb-[15px]">
                            Training and Internship Certification in Advanced
                            DSA
                          </p>
                          <p className="text-[#745e39] bg-[#fffbf4] rounded-r-[6px] mb-[45px]">
                            IITM Pravartak, TIH IIT Madras
                          </p>
                        </div>
                        {/* lower part */}
                        <div className="flex justify-between">
                          <div className="flex w-[24px] gap-[10px]">
                            <img
                              src="https://files.codingninjas.com/image-7-1733478713.webp"
                              alt="course-additional-logo-0"
                            />
                            <img
                              src="https://files.codingninjas.com/image-8-1733478712.webp"
                              alt="course-additional-logo-1"
                            />
                            <img
                              src="https://files.codingninjas.com/image-9-1733478711.webp"
                              alt="course-additional-logo-2"
                            />
                            <img
                              src="https://files.codingninjas.com/image-591-1733478709.webp"
                              alt="course-additional-logo-3"
                            />
                          </div>
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>
                    {/* card-2 */}
                    <div className="bg-white w-[270px] h-[370px] rounded-[10px]">
                      {/* container */}
                      <div className="p-[15px]">
                        {/* upper part */}
                        <div>
                          <img
                            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                            alt="course-banner"
                          />
                          <div className="absolute">
                            <img
                              className="relative bg-white p-[6px] rounded-[8px] left-[6px] top-[-32px]"
                              src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                              alt="course-logo"
                            />
                          </div>
                          <p className="mt-[40px] font-semibold text-xl mb-[15px]">
                            Training and Internship Certification in Data
                            Analytics
                          </p>
                          <p className="text-[#745e39] bg-[#fffbf4] rounded-r-[6px] mb-[45px]">
                            E&ICT Academy, IIT Guwahati
                          </p>
                        </div>
                        {/* lower part */}
                        <div className="flex justify-between">
                          <div className="flex w-[24px] gap-[10px]">
                            <img
                              src="https://files.codingninjas.com/microsoft-excel-1727278090.webp"
                              alt="course-additional-logo-0"
                            />
                            <img
                              src="https://files.codingninjas.com/mysql-1727278092.webp"
                              alt="course-additional-logo-1"
                            />
                            <img
                              src="https://files.codingninjas.com/python-1727278094.webp"
                              alt="course-additional-logo-2"
                            />
                            <img
                              src="https://files.codingninjas.com/power-bi-1727278093.webp"
                              alt="course-additional-logo-3"
                            />
                          </div>
                          <p>6 months</p>
                        </div>
                      </div>
                    </div>

                    {/* card-3 */}
                    <div className="bg-white w-[270px] h-[370px] rounded-[10px]">
                      {/* container */}
                      <div className="p-[15px]">
                        {/* upper part */}
                        <div>
                          <img
                            src="https://files.codingninjas.com/space-gray-from-figma-1733395549.webp"
                            alt="course-banner"
                          />
                          <div className="absolute">
                            <img
                              className="relative bg-white p-[6px] rounded-[8px] left-[6px] top-[-32px]"
                              src="https://files.codingninjas.in/frame-2087323803-1731448120.svg"
                              alt="course-logo"
                            />
                          </div>
                          <p className="mt-[40px] font-semibold text-xl mb-[15px]">
                            Training and Internship Certification in Full Stack
                            Web Development
                          </p>
                          <p className="text-[#745e39] bg-[#fffbf4] rounded-r-[6px] mb-[45px]">
                            IITM Pravartak, TIH IIT Madras
                          </p>
                        </div>
                        {/* lower part */}
                        <div className="flex justify-between">
                          <div className="flex w-[24px] gap-[10px]">
                            <img
                              src="https://files.codingninjas.com/image-7-1733478713.webp"
                              alt="course-additional-logo-0"
                            />
                            <img
                              src="https://files.codingninjas.com/image-8-1733478712.webp"
                              alt="course-additional-logo-1"
                            />
                            <img
                              src="https://files.codingninjas.com/image-9-1733478711.webp"
                              alt="course-additional-logo-2"
                            />
                            <img
                              src="https://files.codingninjas.com/image-591-1733478709.webp"
                              alt="course-additional-logo-3"
                            />
                          </div>
                          <p>9 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreCourses;
