/*eslint-disable*/
import React from "react";
import EditorNewsPage from "components/EditorNewsPage";
import s from './MainNewsEditForm.module.css'

export default function MainNewsEditForm() {
  const html = `<p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Sapien et ligula ullamcorper malesuada 
                  proin. Tincidunt vitae semper quis lectus nulla at volutpat diam. Dolor magna eget est 
                  lorem. Pellentesque id nibh tortor id aliquet lectus proin nibh. Nibh praesent tristique 
                  magna sit amet purus gravida quis blandit. Ullamcorper eget nulla facilisi etiam dignissim 
                  diam quis enim lobortis. Et molestie ac feugiat sed lectus. Interdum velit laoreet id 
                  donec ultrices tincidunt arcu non sodales. Sociis natoque penatibus et magnis dis parturient 
                  montes nascetur ridiculus. In metus vulputate eu scelerisque felis. Elementum nisi quis 
                  eleifend quam adipiscing vitae proin. Venenatis urna cursus eget nunc. Aliquam nulla 
                  facilisi cras fermentum. Turpis tincidunt id aliquet risus feugiat in ante metus. In 
                  tellus integer feugiat scelerisque. At lectus urna duis convallis convallis.
                </p>
                <p>
                  Tincidunt id aliquet risus feugiat. Aliquam eleifend mi in nulla. Morbi enim nunc faucibus 
                  a pellentesque. Non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. A 
                  cras semper auctor neque vitae tempus quam pellentesque nec. Elit at imperdiet dui accumsan 
                  sit. Senectus et netus et malesuada fames ac. Nunc faucibus a pellentesque sit amet porttitor 
                  eget dolor morbi. Ac placerat vestibulum lectus mauris ultrices eros in cursus turpis. Morbi 
                  leo urna molestie at elementum eu facilisis sed odio. Mauris a diam maecenas sed enim ut sem 
                  viverra. Tortor posuere ac ut consequat. Ac felis donec et odio pellentesque. Proin fermentum 
                  leo vel orci porta.
                </p>
                <p>
                  Habitasse platea dictumst quisque sagittis purus sit. Netus et malesuada fames ac turpis 
                  egestas. Nunc pulvinar sapien et ligula ullamcorper malesuada. Ac odio tempor orci dapibus 
                  ultrices in iaculis nunc sed. Interdum velit euismod in pellentesque. Sit amet risus nullam 
                  eget felis. In eu mi bibendum neque egestas congue quisque egestas. Sollicitudin ac orci 
                  phasellus egestas tellus rutrum tellus pellentesque. Ultricies mi eget mauris pharetra et 
                  ultrices neque ornare aenean. Eget nunc scelerisque viverra mauris in aliquam sem. Nisl 
                  rhoncus mattis rhoncus urna neque viverra justo. Praesent elementum facilisis leo vel 
                  fringilla. Tristique senectus et netus et malesuada. Tincidunt id aliquet risus feugiat in. 
                  Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Id volutpat lacus laoreet non 
                  curabitur gravida arcu ac tortor.
                </p>
                <p>
                  Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Phasellus egestas tellus 
                  rutrum tellus pellentesque eu tincidunt tortor aliquam. Mauris augue neque gravida in. 
                  Fermentum posuere urna nec tincidunt. Vestibulum mattis ullamcorper velit sed ullamcorper 
                  morbi tincidunt ornare massa. Sed risus ultricies tristique nulla aliquet enim tortor at 
                  auctor. Ultrices eros in cursus turpis massa tincidunt dui ut. Consectetur adipiscing elit 
                  duis tristique sollicitudin. Maecenas sed enim ut sem viverra. Sed odio morbi quis commodo. 
                  Orci porta non pulvinar neque. Nunc eget lorem dolor sed viverra. Sit amet purus gravida quis 
                  blandit turpis cursus. Habitant morbi tristique senectus et netus et malesuada fames ac. 
                  Cursus in hac habitasse platea. Sollicitudin nibh sit amet commodo nulla facilisi nullam. 
                  Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut tellus 
                  elementum sagittis vitae et leo duis ut.
                </p>
                <p>
                  Volutpat diam ut venenatis tellus in metus vulputate eu scelerisque. Vestibulum morbi 
                  blandit cursus risus at ultrices mi. Odio pellentesque diam volutpat commodo sed 
                  egestas egestas fringilla phasellus. Ullamcorper eget nulla facilisi etiam dignissim diam 
                  quis. Amet commodo nulla facilisi nullam vehicula ipsum. Odio pellentesque diam volutpat 
                  commodo sed egestas egestas fringilla phasellus. Curabitur gravida arcu ac tortor dignissim 
                  convallis aenean et tortor. Orci phasellus egestas tellus rutrum tellus pellentesque eu. 
                  Viverra maecenas accumsan lacus vel facilisis volutpat est velit. Risus nullam eget felis 
                  eget nunc lobortis mattis aliquam. Sem viverra aliquet eget sit amet tellus cras adipiscing 
                  enim.
                </p>`;
  
  const onSaveHandler = () => {};

  return (
    <section className="header relative pt-16 items-center flex flex-col">
      < EditorNewsPage onSaveHandler={onSaveHandler} title="Редагувати головну новину" text={html}/>
    </section>
  );
}
