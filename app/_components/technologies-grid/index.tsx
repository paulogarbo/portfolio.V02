import Image from "next/image";
import { technologies } from "./constants";

const TechnologiesGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:gap-6">
      {technologies.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center justify-between gap-4 rounded-lg p-4 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div className="flex h-[50px] items-center justify-center">
            {tech.iconLight ? (
              <>
                <div className="dark:hidden">
                  <Image
                    src={tech.iconLight}
                    alt={tech.name}
                    width={tech.width || 50}
                    height={tech.width || 50}
                    className="transition-transform hover:scale-110"
                  />
                </div>
                <div className="hidden dark:block">
                  <Image
                    src={tech.iconDark}
                    alt={tech.name}
                    width={tech.width || 50}
                    height={tech.width || 50}
                    className="transition-transform hover:scale-110"
                  />
                </div>
              </>
            ) : (
              <Image
                src={tech.icon!}
                alt={tech.name}
                width={tech.width || 50}
                height={tech.width || 50}
                className="transition-transform hover:scale-110"
              />
            )}
          </div>
          <p className="text-center text-sm font-medium">{tech.name}</p>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesGrid;
