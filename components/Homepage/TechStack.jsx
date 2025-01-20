import React, { useEffect, useState } from "react";

const technologies = {
  Mobile: [],
  "Web Development": [],
  Database: [],
  Cloud: [],
  "User Experience": [],
  "Project Management": [],
  "E-commerce": [],
};

const TechStack = ({ page }) => {
  const [active, setactive] = useState(page == "enterprise" ? 2 : 1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active === 7) {
        setactive(1);
      } else {
        setactive(active + 1);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [active]);

  return (
    <>
      <div className=" py-2 my-6 text-heading">
        <h1 className="text-center text-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-4xl">
          Technology <span className="text-primary"> Engagement </span>
        </h1>
        <div className="mt-4">
          <ul className="flex justify-start overflow-auto whitespace-nowrap py-4 mx-auto  md:justify-center">
            <li
              onClick={() => setactive(1)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 1 ? "buttonActive" : ""
              } `}
            >
              Mobile
            </li>
            <li
              onClick={() => setactive(2)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 2 ? "buttonActive" : ""
              } `}
            >
              Web Development
            </li>
            <li
              onClick={() => setactive(3)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 3 ? "buttonActive" : ""
              } `}
            >
              Database
            </li>
            <li
              onClick={() => setactive(4)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 4 ? "buttonActive" : ""
              } `}
            >
              Cloud
            </li>
            <li
              onClick={() => setactive(5)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 5 ? "buttonActive" : ""
              } `}
            >
              User Experience
            </li>
            <li
              onClick={() => setactive(6)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 6 ? "buttonActive" : ""
              } `}
            >
              Project Management
            </li>
            <li
              onClick={() => setactive(7)}
              className={`hover:text-primary cursor-pointer buttonStyle border-primary inline mx-4 ${
                active == 7 ? "buttonActive" : ""
              } `}
            >
              E-commerce
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <div className="flex">
            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 1 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/android.png" height={75} width={75} />{" "}
                  Android
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/apple.png" height={75} width={75} /> Apple
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/swift.png" height={75} width={75} /> Swift
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/flutter.png" height={75} width={75} />{" "}
                  Flutter
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/iconic.png" height={75} width={75} /> Iconic
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/react.png" height={75} width={75} /> React
                  Native
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/xamarin.png" height={75} width={75} />{" "}
                  Xamarin
                </div>
              </li>
            </ul>

            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 2 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/react.png" height={75} width={75} /> React
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/angular.png" height={75} width={75} />{" "}
                  Angular
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/vue.png" height={75} width={75} /> Vue
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/js.png" height={75} width={75} /> Javascript
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/lodash.png" height={75} width={75} /> Lodash
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/css.png" height={75} width={75} /> Css
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/html.png" height={75} width={75} /> Html
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/net.png" height={75} width={75} /> .Net
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/node.png" height={75} width={75} /> NodeJs
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/webpack.png" height={75} width={75} />{" "}
                  Webpack
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/jwt.png" height={75} width={75} /> JWT
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/csharp.png" height={75} width={75} /> C#
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/php.png" height={75} width={75} /> PHP
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/cpp.png" height={75} width={75} /> C++
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/net core.png" height={75} width={75} /> .Net
                  Core
                </div>
              </li>
            </ul>

            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 3 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/dynamo-db.png" height={75} width={75} />{" "}
                  Dynamo DB
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/firebase.png" height={75} width={75} />{" "}
                  Firebase
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/mongo-db.png" height={75} width={75} /> Mongo
                  DB
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/mysql.png" height={75} width={75} /> Mysql
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/postgres-sql.png" height={75} width={75} />{" "}
                  Postgres
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/sql-lite.png" height={75} width={75} />{" "}
                  Sqllite
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/sql-server.png" height={75} width={75} /> Sql
                  Server
                </div>
              </li>
            </ul>

            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 4 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/aws.png" height={75} width={75} /> AWS
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/azure.png" height={75} width={75} /> Azure
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/google-cloud.png" height={75} width={75} />{" "}
                  Google Cloud
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/docker.png" height={75} width={75} /> Docker
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/kubernets.png" height={75} width={75} />{" "}
                  kubernets
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/azure.png" height={75} width={75} /> Azure
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/gradle.png" height={75} width={75} /> Gradle
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/jenkins.png" height={75} width={75} />{" "}
                  Jenkins
                </div>
              </li>
            </ul>

            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 5 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/sketch.png" height={75} width={75} /> Sketch
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/adobexd.png" height={75} width={75} /> Adobe
                  XD
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/figma.png" height={75} width={75} /> Figma
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/photoshop.png" height={75} width={75} />{" "}
                  Adobe Photoshop
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/justinmind.png" height={75} width={75} />{" "}
                  Just in Mind
                </div>
              </li>
            </ul>

            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 6 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/scrum.png" height={75} width={75} /> Scrum
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/jira.png" height={75} width={75} /> Jira
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/trello.png" height={75} width={75} /> Trello
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/slack.png" height={75} width={75} /> Slack
                </div>
              </li>
            </ul>

            <ul
              className={`flex justify-center gap-8 flex-wrap mx-auto technologySkillContainer ${
                active === 7 ? "technologySkillContainer-active" : ""
              }`}
            >
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/woo-commerce.png" height={75} width={75} />{" "}
                  WooCommerce
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/shopify.png" height={75} width={75} />{" "}
                  Shopify
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/kentico.png" height={75} width={75} />{" "}
                  Kentico
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/nop-commerce.png" height={75} width={75} />{" "}
                  Nop Commerce
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/magento.png" height={75} width={75} />{" "}
                  Magento
                </div>
              </li>
              <li>
                <div className="flex flex-col  items-center hover:shadow-lg p-3">
                  <img src="/icons/bigcommerce.png" height={75} width={75} />{" "}
                  Big Commerce
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
