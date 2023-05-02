import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function DropdownLanguage() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  border-none outline-none   text-sm font-semibold text-gray-900  px-1 py-2 0">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      
    >
      <defs>
        <clipPath id="clip-path">
          <path d="M0 0H21.836V21.843H0z" data-name="Rectangle 4027"></path>
        </clipPath>
      </defs>
      <g data-name="Group 18101" transform="translate(-1808.861 -47.06)">
        <path
         fill='none'
          d="M0 0H24V24H0z"
          data-name="Rectangle 4028"
          transform="translate(1808.861 47.06)"
        ></path>
        <g data-name="Group 18047" transform="translate(1809.943 48.138)">
          <g clipPath="url(#clip-path)" data-name="Group 18046">
            <path
              d="M0 10.925a10.918 10.918 0 1110.9 10.918A10.921 10.921 0 010 10.925m7.719-2.137a17.948 17.948 0 00.012 4.328.273.273 0 00.2.168c2.1.009 4.207.006 6.311.01.165 0 .222-.065.233-.222.025-.371.088-.74.09-1.111 0-1.052-.013-2.105-.022-3.172zm6.366-2.128c-.016-.092-.025-.169-.044-.244a15.408 15.408 0 00-1.615-3.95.548.548 0 00-.507-.317c-.576-.007-1.153-.023-1.729-.008a.462.462 0 00-.334.2c-.367.69-.749 1.376-1.05 2.1s-.5 1.454-.76 2.219zm-.053 8.774H8.159A14.42 14.42 0 009.918 19.6a.289.289 0 00.213.112c.644 0 1.288-.014 1.93-.044a.422.422 0 00.288-.189c.246-.421.487-.847.7-1.287a13.506 13.506 0 00.984-2.753M2.388 8.8a.757.757 0 00-.056.131 9.037 9.037 0 00.044 4.185c.044.179.143.195.295.194H5.4a1.868 1.868 0 00.191-.014V8.8zm14.22 4.507c.871 0 1.778 0 2.685-.009.063 0 .16-.123.181-.2A8.791 8.791 0 0019.54 9c-.036-.168-.1-.223-.273-.219-.449.01-.9 0-1.349 0h-1.31zM7.083 2.983a8.8 8.8 0 00-3.889 3.7c.919 0 1.777 0 2.636-.008.06 0 .148-.109.171-.183.071-.233.1-.478.176-.71.294-.928.6-1.852.907-2.8M7.062 18.86c-.338-1.1-.671-2.2-1.018-3.3a.294.294 0 00-.226-.147 99.42 99.42 0 00-2.317 0 .8.8 0 00-.155.038 8.81 8.81 0 003.716 3.41m9.253-12.2h2.344a9 9 0 00-3.425-3.446l1.082 3.446m-1.159 12.025a8.947 8.947 0 003.373-3.276c-.774 0-1.476-.006-2.178.009-.075 0-.188.116-.214.2-.136.447-.234.907-.377 1.352-.177.554-.385 1.1-.6 1.715"
              data-name="Path 23113"
            ></path>
          </g>
        </g>
      </g>
    </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 English
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Urdu
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  China
                </a>
              )}
            </Menu.Item>
            <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    France
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
