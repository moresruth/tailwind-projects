import React from "react";

const Features = () => {
  return (
    <section id="features">
      {/* flex container */}
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y12 md:space-y-0 md:flex-row">
        {/* item 1 */}
        <div className="flex flex-col space-y-12 md:w-1/2 ">
          <h2 className="max-w-md text-4xl font-bold text-center md:text-left">
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </h2>
          <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            nostrum natus blanditiis dolorum sed dolores labore, quas doloremque
            voluptas ex.
          </p>
        </div>

        {/* number list*/}
        <div className="flex flex-col py-6 space-y-8 md:w-1/2">
          {/* item 1 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* text heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  01
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis veniam sequi et dicta aperiam alias, eligendi aliquam
                accusamus odit, quod nisi suscipit reiciendis dolor dignissimos
                corporis eaque. Voluptatem, alias sapiente.
              </p>
            </div>
          </div>
          {/* end of item 1 */}

          {/* item 2 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* text heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  02
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis veniam sequi et dicta aperiam alias, eligendi aliquam
                accusamus odit, quod nisi suscipit reiciendis dolor dignissimos
                corporis eaque. Voluptatem, alias sapiente.
              </p>
            </div>
          </div>
          {/* end of item 2 */}

          {/* item 3 */}
          <div className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row">
            {/* text heading */}
            <div className="rounded-l-full bg-brightRedSupLight md:bg-transparent">
              <div className="flex items-center space-x-2">
                <div className="px-4 py-2 text-white rounded-full md:py-1 bg-brightRed">
                  03
                </div>
                <h3 className="text-base font-bold md:mb-4 md:hidden">
                  Lorem ipsum dolor sit amet.
                </h3>
              </div>
            </div>
            <div>
              <h3 className="hidden mb-4 text-lg font-bold md:block">
                Lorem ipsum dolor sit amet.
              </h3>
              <p className="text-darkGrayishBlue">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis veniam sequi et dicta aperiam alias, eligendi aliquam
                accusamus odit, quod nisi suscipit reiciendis dolor dignissimos
                corporis eaque. Voluptatem, alias sapiente.
              </p>
            </div>
          </div>
          {/* end of item 3 */}
        </div>
      </div>
    </section>
  );
};

export default Features;
