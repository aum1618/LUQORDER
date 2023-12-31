import React from "react";

function Paypal({ ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 22 21"
      {...props}
    >
      <g clipPath="url(#clip0_38_761)">
        <g clipPath="url(#clip1_38_761)">
          <path
            fill="#27346A"
            d="M16.503 2.155c-.888-1.001-2.495-1.43-4.55-1.43H5.99a.86.86 0 00-.554.201.842.842 0 00-.289.51L2.663 17.012a.508.508 0 00.506.585H6.85l.924-5.8-.028.182a.848.848 0 01.84-.713h1.75c3.437 0 6.128-1.38 6.914-5.375.023-.118.044-.233.061-.345-.099-.052-.099-.052 0 0 .234-1.476-.001-2.481-.809-3.39z"
          ></path>
          <path
            fill="#27346A"
            d="M9.184 5.014c.1-.047.21-.072.322-.072h4.676c.554 0 1.07.036 1.542.111a6.545 6.545 0 01.942.223c.232.076.448.166.646.27.234-1.477-.001-2.481-.809-3.39-.889-1.002-2.495-1.432-4.55-1.432H5.99a.851.851 0 00-.843.712L2.663 17.012a.508.508 0 00.505.585h3.683L8.769 5.565a.735.735 0 01.415-.55z"
          ></path>
          <path
            fill="#2790C3"
            d="M17.254 5.892c-.786 3.993-3.477 5.374-6.914 5.374H8.59a.847.847 0 00-.84.713L6.6 19.19a.445.445 0 00.442.512h3.103c.178 0 .35-.063.485-.177a.737.737 0 00.253-.446l.03-.156.585-3.667.038-.202a.736.736 0 01.252-.446.752.752 0 01.485-.178h.464c3.007 0 5.361-1.207 6.05-4.701.287-1.46.138-2.68-.622-3.535a2.963 2.963 0 00-.85-.649 9.52 9.52 0 01-.06.346z"
          ></path>
          <path
            fill="#1F264F"
            d="M16.488 5.222a5.79 5.79 0 00-.764-.168 9.81 9.81 0 00-1.543-.112H9.506a.745.745 0 00-.738.624l-.993 6.231-.029.182a.848.848 0 01.84-.713h1.75c3.437 0 6.129-1.38 6.915-5.375.023-.118.043-.232.06-.345a4.27 4.27 0 00-.822-.324"
          ></path>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_38_761">
          <path
            fill="#fff"
            d="M0 0H20.407V20.407H0z"
            transform="translate(.617 .163)"
          ></path>
        </clipPath>
        <clipPath id="clip1_38_761">
          <path
            fill="#fff"
            d="M0 0H16.326V19.047H0z"
            transform="translate(2.656 .673)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default Paypal;
