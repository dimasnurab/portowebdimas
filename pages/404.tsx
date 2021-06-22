import { useEffect } from "react";
import { useRouter } from "next/router";

function Custom404Pages() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, []);

  return (
    <div className="container-not-found">
      <div className="containertwo-not-found">
        <div className="item-not-found1">
          <h1>
            404
          </h1>
        </div>
        <div className="item-not-found2">
          <p>
            Oooppss... I'm sorry my friends
          </p>
        </div>
      </div>

    </div>
  );
}
export default Custom404Pages;
