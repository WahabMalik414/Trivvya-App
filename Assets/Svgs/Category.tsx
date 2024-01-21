type classNameProp = {
  className?: string;
  onClick?: () => void;
};
function Category(props: classNameProp) {
  return (
    <svg
      width={120}
      height={120}
      viewBox="0 0 148 148"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M74 148c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74C33.13 0 0 33.13 0 74c0 40.869 33.13 74 74 74z"
        fill="#B3EBEB"
      />
      <path
        d="M74 138.213c36.809 0 66.648-29.561 66.648-66.027S110.809 6.159 74 6.159c-36.808 0-66.647 29.561-66.647 66.027S37.192 138.213 74 138.213z"
        fill="#135F5C"
      />
      <path
        d="M128.378 86.365l-5.442 1.098 4.392 2.005 1.528.716c-.335.86-.669 1.672-1.003 2.483l-2.005.43-10.838 2.291 7.544 3.82 1.48.764C113.721 116.729 95.198 127.9 74.048 127.9c-14.896 0-28.502-5.538-38.862-14.705l.525-2.912 1.671-9.405-4.965 5.967-1.623 2.006a53.043 53.043 0 01-2.626-3.104l1.289-2.578 7.925-15.707-13.94 5.49-2.579 1.003c-3.532-7.543-5.49-15.946-5.49-24.778 0-10.264 2.626-19.908 7.257-28.31v-.049c9.978-18.142 29.266-30.411 51.466-30.411 8.498 0 16.566 1.814 23.823 5.06.477.191.955.43 1.384.621l.43 3.247.621 4.535 1.671-3.294 1.193-2.387c.525.286 1.051.62 1.576.907l.286 3.294.191 2.1 1.241-1.145 1.91-1.814c14.752 10.646 24.348 28.024 24.348 47.646 0 5.825-.859 11.506-2.434 16.805l-1.958.382z"
        fill="#53CFD5"
      />
      <g clipPath="url(#clip0_29_4)" fill="#fff">
        <path d="M66.66 41.496H56.275a3.97 3.97 0 01-3.967-3.966V27.273a3.97 3.97 0 013.967-3.966H66.66a3.971 3.971 0 013.966 3.966V37.53a3.97 3.97 0 01-3.966 3.966zM56.275 26.38a.897.897 0 00-.895.894V37.53a.897.897 0 00.895.895H66.66a.895.895 0 00.895-.895V27.273a.895.895 0 00-.895-.894H56.275zM66.71 65.693H56.326a3.972 3.972 0 01-3.968-3.967V51.47a3.97 3.97 0 013.968-3.966H66.71a3.97 3.97 0 013.963 3.966v10.256a3.97 3.97 0 01-3.963 3.967zM56.326 50.575a.897.897 0 00-.896.895v10.256a.897.897 0 00.895.895h10.387a.897.897 0 00.894-.895V51.47a.895.895 0 00-.894-.895H56.325zM90.727 65.693H80.34a3.972 3.972 0 01-3.967-3.967V51.47a3.97 3.97 0 013.967-3.966h10.386a3.97 3.97 0 013.966 3.966v10.256a3.97 3.97 0 01-3.966 3.967zM80.34 50.58a.897.897 0 00-.896.895v10.256a.897.897 0 00.896.896h10.386a.897.897 0 00.894-.896V51.47a.895.895 0 00-.894-.895l-10.386.006zM85.54 41.496a9.09 9.09 0 119.159-9.091 9.137 9.137 0 01-9.159 9.091zm0-15.111a6.02 6.02 0 106.087 6.02 6.063 6.063 0 00-6.087-6.026v.006z" />
      </g>
      <path
        d="M41.53 89.168c-.849 0-1.6-.2-2.253-.602-.654-.41-1.162-.99-1.526-1.736-.364-.756-.546-1.652-.546-2.688 0-.999.182-1.88.546-2.646.373-.775.896-1.377 1.568-1.806.681-.439 1.474-.658 2.38-.658.467 0 .891.047 1.274.14.383.084.742.205 1.078.364l-.406 1.12a5.185 5.185 0 00-.896-.336 3.96 3.96 0 00-1.064-.126 2.9 2.9 0 00-1.61.462c-.467.308-.836.751-1.106 1.33-.27.579-.406 1.279-.406 2.1 0 .784.13 1.47.392 2.058.27.588.64 1.045 1.106 1.372.476.327 1.017.49 1.624.49.457 0 .854-.056 1.19-.168.336-.112.663-.257.98-.434l.406 1.106a6.083 6.083 0 01-1.19.476c-.439.121-.952.182-1.54.182zM45.938 89V78.64h1.26v4.242c.262-.383.593-.7.994-.952.402-.252.873-.378 1.414-.378.822 0 1.433.247 1.834.742.411.495.616 1.148.616 1.96V89h-1.26v-4.606c0-.523-.121-.943-.364-1.26-.242-.317-.583-.476-1.022-.476-.429 0-.84.154-1.232.462-.382.299-.709.653-.98 1.064V89h-1.26zm11.072.168a3.063 3.063 0 01-1.653-.462 3.354 3.354 0 01-1.19-1.302c-.289-.57-.433-1.237-.433-2.002 0-.728.144-1.381.434-1.96a3.548 3.548 0 011.218-1.372c.522-.345 1.12-.518 1.791-.518.42 0 .798.075 1.134.224.346.14.645.317.896.532v-.588h1.148v5.516c0 .355.084.588.252.7.178.103.37.154.575.154l-.267.98c-.895 0-1.437-.364-1.623-1.092a3.43 3.43 0 01-.883.826c-.364.243-.83.364-1.4.364zm.28-1.12c.354 0 .69-.084 1.008-.252.317-.177.583-.397.797-.658v-3.906a3.22 3.22 0 00-.84-.42 2.689 2.689 0 00-.951-.168c-.448 0-.845.117-1.19.35a2.304 2.304 0 00-.798.952c-.197.401-.294.873-.294 1.414 0 .523.097.99.294 1.4.196.401.466.719.812.952a2.09 2.09 0 001.161.336zm5.574.952v-7.28h1.218v1.218c.261-.392.593-.719.994-.98.41-.27.896-.406 1.456-.406.822 0 1.433.247 1.834.742.41.495.616 1.148.616 1.96V89h-1.26v-4.606c0-.523-.126-.943-.378-1.26-.243-.317-.583-.476-1.022-.476-.43 0-.835.154-1.218.462-.382.299-.71.653-.98 1.064V89h-1.26zm10.96 3.248c-.43 0-.85-.051-1.26-.154a3.622 3.622 0 01-1.079-.462l.462-1.092c.224.177.486.322.784.434.299.121.663.182 1.092.182.663 0 1.181-.177 1.554-.532.383-.345.574-.9.574-1.666v-.896c-.186.224-.457.439-.812.644-.345.196-.76.294-1.246.294-.55 0-1.073-.14-1.568-.42-.494-.29-.896-.71-1.204-1.26-.308-.55-.462-1.213-.462-1.988 0-.728.15-1.377.448-1.946a3.573 3.573 0 011.232-1.344 3.092 3.092 0 011.694-.49c.411 0 .784.07 1.12.21.336.14.626.313.868.518v-.56h1.148v7.112c0 .803-.14 1.456-.42 1.96-.28.504-.672.873-1.176 1.106-.494.233-1.078.35-1.75.35zm.35-4.368c.373 0 .709-.084 1.007-.252.299-.168.542-.364.728-.588v-3.808a3.674 3.674 0 00-.742-.406 2.591 2.591 0 00-1.008-.182c-.382 0-.742.103-1.078.308a2.333 2.333 0 00-.826.896c-.205.383-.308.854-.308 1.414 0 .532.103.994.308 1.386.215.392.49.695.826.91.336.215.7.322 1.092.322zm8.077 1.288c-1.046 0-1.876-.331-2.492-.994-.607-.672-.91-1.61-.91-2.814 0-.728.135-1.377.406-1.946a3.316 3.316 0 011.162-1.358c.494-.336 1.068-.504 1.722-.504.7 0 1.278.154 1.736.462a2.78 2.78 0 011.05 1.218c.233.513.35 1.078.35 1.694 0 .327-.014.644-.042.952h-5.096c.084.681.322 1.213.714 1.596.392.383.91.574 1.554.574.42 0 .798-.042 1.134-.126.336-.093.658-.21.966-.35l.294 1.078c-.336.15-.714.27-1.134.364-.42.103-.892.154-1.414.154zm-2.128-4.312h3.99c0-.71-.178-1.255-.532-1.638-.355-.383-.845-.574-1.47-.574-.542 0-.99.191-1.344.574-.355.373-.57.92-.644 1.638zm13.576 4.312c-.7 0-1.255-.229-1.666-.686-.401-.467-.602-1.13-.602-1.988v-3.416h-1.26v-1.092h1.288l.266-2.296h.966v2.296h2.016v1.092H92.69v3.514c0 .541.112.92.336 1.134.234.215.509.322.826.322.234 0 .453-.037.658-.112.215-.075.41-.163.588-.266l.35 1.008c-.186.112-.438.22-.756.322a2.965 2.965 0 01-.994.168zM96.715 89V78.64h1.26v4.242c.261-.383.592-.7.994-.952.401-.252.872-.378 1.414-.378.821 0 1.432.247 1.834.742.41.495.616 1.148.616 1.96V89h-1.26v-4.606c0-.523-.122-.943-.364-1.26-.243-.317-.584-.476-1.022-.476-.43 0-.84.154-1.232.462-.383.299-.71.653-.98 1.064V89h-1.26zm11.197.168c-1.045 0-1.876-.331-2.492-.994-.607-.672-.91-1.61-.91-2.814 0-.728.135-1.377.406-1.946a3.314 3.314 0 011.162-1.358c.495-.336 1.069-.504 1.722-.504.7 0 1.279.154 1.736.462.467.299.817.705 1.05 1.218a4.05 4.05 0 01.35 1.694c0 .327-.014.644-.042.952h-5.096c.084.681.322 1.213.714 1.596.392.383.91.574 1.554.574.42 0 .798-.042 1.134-.126.336-.093.658-.21.966-.35l.294 1.078c-.336.15-.714.27-1.134.364-.42.103-.891.154-1.414.154zm-2.128-4.312h3.99c0-.71-.177-1.255-.532-1.638-.355-.383-.845-.574-1.47-.574-.541 0-.989.191-1.344.574-.355.373-.569.92-.644 1.638zm-56.47 24.312c-.69 0-1.297-.159-1.82-.476a3.267 3.267 0 01-1.19-1.344c-.28-.579-.42-1.241-.42-1.988 0-.7.14-1.339.42-1.918a3.37 3.37 0 011.233-1.372c.532-.345 1.157-.518 1.876-.518.41 0 .77.037 1.078.112.317.075.62.182.91.322l-.378 1.064a3.402 3.402 0 00-.756-.28 2.92 2.92 0 00-.784-.098 2.18 2.18 0 00-1.652.714c-.439.467-.658 1.115-.658 1.946 0 .504.093.961.28 1.372.186.411.443.737.77.98.336.243.728.364 1.176.364.355 0 .658-.037.91-.112a5.8 5.8 0 00.812-.35l.392 1.064c-.29.159-.616.285-.98.378-.355.093-.76.14-1.218.14zm6.314 0a3.062 3.062 0 01-1.652-.462 3.352 3.352 0 01-1.19-1.302c-.29-.569-.434-1.237-.434-2.002 0-.728.144-1.381.434-1.96a3.544 3.544 0 011.218-1.372c.522-.345 1.12-.518 1.792-.518.42 0 .798.075 1.134.224.345.14.644.317.896.532v-.588h1.148v5.516c0 .355.084.588.252.7.177.103.368.154.574.154l-.266.98c-.896 0-1.438-.364-1.624-1.092a3.428 3.428 0 01-.882.826c-.364.243-.831.364-1.4.364zm.28-1.12c.354 0 .69-.084 1.008-.252.317-.177.583-.397.798-.658v-3.906a3.24 3.24 0 00-.84-.42 2.689 2.689 0 00-.952-.168c-.448 0-.845.117-1.19.35a2.302 2.302 0 00-.798.952c-.196.401-.294.873-.294 1.414 0 .523.098.989.294 1.4.196.401.466.719.812.952.345.224.732.336 1.162.336zm8.122 1.12c-.7 0-1.255-.229-1.666-.686-.401-.467-.602-1.129-.602-1.988v-3.416h-1.26v-1.092h1.288l.266-2.296h.966v2.296h2.016v1.092h-2.016v3.514c0 .541.112.919.336 1.134.234.215.509.322.826.322.234 0 .453-.037.658-.112.215-.075.411-.163.588-.266l.35 1.008a3.754 3.754 0 01-.756.322 2.965 2.965 0 01-.994.168zm5.655 0c-1.045 0-1.876-.331-2.492-.994-.606-.672-.91-1.61-.91-2.814 0-.728.136-1.377.406-1.946a3.317 3.317 0 011.162-1.358c.495-.336 1.069-.504 1.722-.504.7 0 1.279.154 1.736.462.467.299.817.705 1.05 1.218.234.513.35 1.078.35 1.694 0 .327-.014.644-.042.952h-5.096c.084.681.322 1.213.714 1.596.392.383.91.574 1.554.574.42 0 .798-.042 1.134-.126a6.56 6.56 0 00.966-.35l.294 1.078a5.991 5.991 0 01-1.134.364c-.42.103-.891.154-1.414.154zm-2.128-4.312h3.99c0-.709-.177-1.255-.532-1.638-.354-.383-.844-.574-1.47-.574-.541 0-.989.191-1.344.574-.354.373-.569.919-.644 1.638zm9.506 7.392c-.43 0-.85-.051-1.26-.154a3.635 3.635 0 01-1.078-.462l.462-1.092c.224.177.485.322.784.434.298.121.662.182 1.092.182.662 0 1.18-.177 1.554-.532.382-.345.574-.901.574-1.666v-.896c-.187.224-.458.439-.812.644-.346.196-.761.294-1.246.294-.551 0-1.074-.14-1.568-.42-.495-.289-.896-.709-1.204-1.26-.308-.551-.462-1.213-.462-1.988 0-.728.149-1.377.448-1.946a3.576 3.576 0 011.232-1.344 3.09 3.09 0 011.694-.49c.41 0 .784.07 1.12.21.336.14.625.313.868.518v-.56h1.148v7.112c0 .803-.14 1.456-.42 1.96-.28.504-.672.873-1.176 1.106-.495.233-1.078.35-1.75.35zm.35-4.368c.373 0 .709-.084 1.008-.252a2.58 2.58 0 00.728-.588v-3.808a3.68 3.68 0 00-.742-.406 2.597 2.597 0 00-1.008-.182c-.383 0-.742.103-1.078.308a2.33 2.33 0 00-.826.896c-.206.383-.308.854-.308 1.414 0 .532.102.994.308 1.386.214.392.49.695.826.91.336.215.7.322 1.092.322zm8.231 1.288c-.69 0-1.311-.159-1.862-.476a3.536 3.536 0 01-1.302-1.344c-.308-.579-.462-1.241-.462-1.988 0-.784.159-1.461.476-2.03a3.334 3.334 0 011.302-1.316 3.72 3.72 0 011.848-.462c.681 0 1.293.154 1.834.462.55.308.985.747 1.302 1.316.327.56.49 1.227.49 2.002 0 .775-.159 1.451-.476 2.03a3.43 3.43 0 01-1.302 1.33c-.541.317-1.157.476-1.848.476zm0-1.12c.737 0 1.311-.247 1.722-.742.41-.504.616-1.153.616-1.946 0-.485-.103-.929-.308-1.33a2.534 2.534 0 00-.84-.98 1.966 1.966 0 00-1.19-.378c-.737 0-1.311.243-1.722.728-.41.485-.616 1.129-.616 1.932 0 .485.103.938.308 1.358.205.411.48.742.826.994a2.08 2.08 0 001.204.364zm5.301.952v-7.28h1.218v1.582c.121-.308.285-.593.49-.854.206-.271.462-.485.77-.644a2.216 2.216 0 011.078-.252c.14 0 .28.009.42.028.14.009.257.028.35.056l-.378 1.302a1.61 1.61 0 00-.63-.112c-.345 0-.677.098-.994.294-.308.196-.565.499-.77.91-.196.411-.294.933-.294 1.568V109h-1.26zm5.774 3.248c-.28 0-.527-.028-.742-.084a1.891 1.891 0 01-.49-.196l.28-1.05c.112.065.252.121.42.168.168.047.355.07.56.07.392 0 .742-.126 1.05-.378.308-.252.602-.747.882-1.484l.322-.84h-.672l-2.842-6.398 1.12-.504 2.716 6.062 2.114-6.006 1.162.448-2.674 7.308c-.27.747-.565 1.33-.882 1.75-.317.42-.667.714-1.05.882a3.136 3.136 0 01-1.274.252z"
        fill="#fff"
      />
      <defs>
        <clipPath id="clip0_29_4">
          <path fill="#fff" transform="translate(52 23)" d="M0 0H43V43H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Category;
