import GU1 from "assets/work/GU-1.jpg";
import GU2 from "assets/work/GU-2.jpg";

export const GU = ({ currentLanguage }: { currentLanguage: string }) => {
    return (
        <>
            {currentLanguage === "en" ? (
                <ul className="d-flex flex-column gap-3">
                    <li>
                        Developed a responsive, user-centric website for both user and admin sites aimed at enhancing
                        professional skills for Gen Z, using ReactJS, Tailwind CSS, TypeScript, Ant Design and Refine
                        Framework, React Query.
                    </li>
                    <li>
                        Collaborated with backend developers to integrate APIs, ensuring seamless data flow between the
                        user and admin sites, and optimized the system's performance. Managed data fetching and state
                        synchronization, improving performance and user experience.
                    </li>
                    <li>
                        Worked with Product Design and Product Analysis teams to align the design and functionality of
                        both sites with the target audience's needs and business objectives.
                    </li>
                </ul>
            ) : (
                <ul className="d-flex flex-column gap-3">
                    <li>
                        Phát triển một trang web đáp ứng, tập trung vào người dùng cho cả trang người dùng và trang quản
                        trị, nhằm nâng cao kỹ năng chuyên môn cho thế hệ Gen Z, sử dụng ReactJS, Tailwind CSS,
                        TypeScript, Ant Design và Refine Framework, React Query.
                    </li>
                    <li>
                        Hợp tác với các lập trình viên backend để tích hợp API, đảm bảo luồng dữ liệu liền mạch giữa
                        trang người dùng và trang quản trị, đồng thời tối ưu hóa hiệu suất hệ thống. Quản lý việc lấy dữ
                        liệu và đồng bộ hóa trạng thái, cải thiện hiệu suất và trải nghiệm người dùng.
                    </li>
                    <li>
                        Làm việc với các đội ngũ Thiết kế Sản phẩm và Phân tích Sản phẩm để đồng bộ hóa thiết kế và tính
                        năng của cả hai trang với nhu cầu của đối tượng mục tiêu và mục tiêu kinh doanh.
                    </li>
                </ul>
            )}

            <div className="d-flex flex-column gap-3 align-items-center">
                <img src={GU1} alt="img-working1" width={"70%"} />
                <img src={GU2} alt="img-working2" width={"70%"} />
            </div>
        </>
    );
};
