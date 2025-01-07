import Figo1 from "assets/work/Figo1.jpg";
import Figo2 from "assets/work/Figo2.jpg";

export const Figo = ({ currentLanguage }: { currentLanguage: string }) => {
    return (
        <>
            {currentLanguage === "en" ? (
                <ul className="d-flex flex-column gap-3">
                    <li>
                        Developed user interfaces using React, TypeScript, Zustand/Redux, React Query and Tailwind CSS
                        to build dynamic and responsive Shopify embeded apps.
                    </li>
                    <li>
                        Migrated Shopify app components from Polaris v10 to v13 and Shopify App Bridge v3 to v4 in the
                        Swift app.
                    </li>
                    <li>
                        Developed core features like Spin The Wheel and point management (Earning and Redeeming) in the
                        OneLoyalty app.
                    </li>
                    <li>
                        Worked cross-functionally with Backend and Design teams to ensure feature alignment and
                        consistency.
                    </li>
                    <li>
                        Improved overall app performance by reducing unnecessary re-renders, optimizing API calls, and
                        refining state management
                    </li>
                </ul>
            ) : (
                <ul className="d-flex flex-column gap-3">
                    <li>
                        Phát triển giao diện người dùng sử dụng React, TypeScript, Zustand/Redux, React Query và
                        Tailwind CSS để xây dựng các ứng dụng Shopify nhúng động và đáp ứng.
                    </li>
                    <li>
                        Nâng cấp các Component trong Shopify Polaris từ Polaris v10 lên v13 và từ Shopify App Bridge v3
                        lên v4 trong ứng dụng Swift.
                    </li>
                    <li>
                        Phát triển các tính năng cốt lõi như Spin The Wheel và quản lý điểm (Kiếm và Đổi điểm) trong ứng
                        dụng OneLoyalty.
                    </li>
                    <li>
                        Làm việc chéo chức năng với các đội ngũ Backend và Thiết kế để đảm bảo sự đồng bộ và nhất quán
                        của các tính năng.
                    </li>
                    <li>
                        Cải thiện hiệu suất tổng thể của ứng dụng bằng cách giảm thiểu các lần render không cần thiết,
                        tối ưu hóa các cuộc gọi API và cải thiện quản lý trạng thái.
                    </li>
                </ul>
            )}

            <div className="d-flex flex-column gap-3 align-items-center">
                <img src={Figo1} alt="img-working1" width={"70%"} />
                <img src={Figo2} alt="img-working2" width={"70%"} />
            </div>
        </>
    );
};
