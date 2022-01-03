const SAMPLE_NOTES_JSON = [
  {
    id: 1,
    content:
      '<p>"</p>\n<p><img src="https://dog.ceo/api/breeds/image/random Fetch" alt="" width="NaN" height="NaN" /><img src="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1721.jpg" alt="" width="390" height="263" /></p>\n<p>This is <span style="text-decoration: line-through;">my </span><span style="text-decoration: underline;">dog</span>. His <strong>name&nbsp;</strong>is <span style="text-decoration: line-through; background-color: #2dc26b;">Lucky</span>.<span style="font-family: georgia, palatino, serif;"> I love Lucky.</span></p>\n<p style="padding-left: 40px;">Sample Paragraphing</p>\n<ol>\n<li>One</li>\n<li>Two</li>\n<li>Three</li>\n<li>Four</li>\n<li>Five</li>\n<li>Six</li>\n<li>Seven</li>\n</ol>\n<table style="border-collapse: collapse; width: 100.048%;" border="1">\n<tbody>\n<tr>\n<td style="width: 31.6303%;">Test</td>\n<td style="width: 31.6303%;">test</td>\n<td style="width: 31.6319%;">Test</td>\n</tr>\n<tr>\n<td style="width: 31.6303%;">test</td>\n<td style="width: 31.6303%;">test test</td>\n<td style="width: 31.6319%;">test</td>\n</tr>\n<tr>\n<td style="width: 31.6303%;">test</td>\n<td style="width: 31.6303%;">\n<p>test</p>\n<p>&nbsp;</p>\n</td>\n<td style="width: 31.6319%;">test</td>\n</tr>\n</tbody>\n</table>\n<p>&nbsp;</p>\n<p><iframe src="https://www.youtube.com/embed/L7OLY4HCctQ" width="560" height="314" allowfullscreen="allowfullscreen"></iframe></p>\n<p><span class="mce-annotation" data-mce-annotation-uid="fae14318-5eb3-462c-95a5-a509baf8f29f" data-mce-annotation="difficult" data-tagging-comment="difficult stuff!">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet metus rhoncus, vestibulum odio at, porttitor nisi. Duis libero est, congue luctus scelerisque sed, commodo non ipsum. Nam eros leo, mattis ut dui id, efficitur finibus arcu. Mauris in iaculis lectus, eget convallis ligula. Donec sit amet ultricies nulla. Aenean at mi diam. Donec ornare, urna et eleifend egestas, ante sem dictum ipsum, vitae laci</span>nia velit diam non dui.</p>\n<p>Integer sit amet malesuada lectus. Praes<span class="mce-annotation" data-mce-annotation-uid="9d4f5c97-d149-4408-8368-9422aa1bbb03" data-mce-annotation="important" data-tagging-comment="this is important">ent tincidunt, felis eget laoreet varius, massa velit mattis odio, at lobortis lacus elit vel elit. Etiam ut nulla efficitur, aliquet nulla sed, molestie risus. Pellentesque iaculis eleifend volutpat. Suspendisse malesuada neque eget dictum imperdiet. Curabitur accumsan hendrerit odio, sed maximus erat suscipit a. Praesent tempor, ligula ut lobortis pharetra, ipsum ex sagittis diam, non congue tortor quam et metus. Ut scelerisque luctus purus, in scelerisque nisl mollis ac. Nam pretium vehicula lacus, eget egestas nulla efficitur sed. Etiam finibus feugiat sapien. Nunc ut lectus sapien. Mauris dapibus, velit quis consequat gravida, nisi ipsum venenatis nisi, eget finibus nisl nisl in neque. Donec eu felis ut dui maximus rutrum et ut elit.</span></p>\n<p>Proin maximus eros posuere, scelerisque<span class="mce-annotation" data-mce-annotation-uid="74eac02f-d9c9-4271-bdd5-bc8f8b0b6e86" data-mce-annotation="revision" data-tagging-comment="I should revise this!"> urna eu, lacinia dolor. Fusce non eros non lectus aliquet luctus vitae nec sapien. Sed facilisis, nisi eget feugiat porttitor, elit lectus viverra turpis, ac interdum ligula ante eget sapien. Morbi aliquam urna ornare justo iaculis accumsan. Cras ornare, ipsum sed dignissim suscipit, velit dui sagittis tortor, a aliquet nibh lacus id tortor. Morbi sagittis eros leo, quis viverra orci pharetra vitae. Sed sit amet facilisis orci, et feugiat metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed convallis libero eu nunc dictum luctus. Phasellus lacinia imperdiet ante efficitur molestie. Aliquam eleifend ante eu libero mattis, quis iaculi</span>s nisl porttitor. Quisque tortor ligula, laoreet eu dictum sed, facilisis vel nisi.</p>\n<p>Donec elementum est sem, nec convallis erat vestibulum nec. Praes<span class="mce-annotation" data-mce-annotation-uid="350bdcc8-4eeb-44ed-a981-1c8831a45c51" data-mce-annotation="difficult" data-tagging-comment="Difficult!!!">ent cursus elit turpis, vestibulum tincidunt felis ullamcorper ac. Nulla laoreet, quam a lacinia congue, lorem tellus maximus ex, nec maximus nisl nibh sit amet elit. Fusce ante elit, mollis a velit in, elementum vestibulum orci. Quisque in odio quis enim porttitor iaculis. Pellentesque finibus sem ut convallis luctus. Curabitur eu elit molestie, efficitur diam et, rutrum nibh. Nullam fermentum ex at ante gravida suscipit. Curabitur mollis tortor vitae eros viverra efficitur et sed risus.</span></p>\n<p><span class="mce-annotation" data-mce-annotation-uid="350bdcc8-4eeb-44ed-a981-1c8831a45c51" data-mce-annotation="difficult" data-tagging-comment="Difficult!!!">Integer ac dolor rutrum, auctor nunc at, sodales mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse malesuada libero ex, eget porttitor lacus fringilla ut. Aliquam sit amet ipsum magna. Vivamus tempor ex eu tellus cursus aliquam. Nunc sed vestibulum diam, convallis eleifend nulla. Vivamus consequat efficitur arcu nec varius. Phasellus ultrices egestas est at elementum. Pellentesque libero neque, imperdiet ac arcu ac, pellentesque dapibus velit. Aenean sit amet orci a quam luctus porttitor vel a purus. Donec lacus ante, feugiat a gravida vulputate, rutrum vitae lectus. Sed</span> est urna, pretium eu pellentesque bibendum, viverra rutrum turpis. Vestibulum dapibus sit amet justo a tempor.</p>',
    module: "MA1521 Calculus for Computing",
    difficult: {
      "fae14318-5eb3-462c-95a5-a509baf8f29f": {
        html: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet metus rhoncus, vestibulum odio at, porttitor nisi. Duis libero est, congue luctus scelerisque sed, commodo non ipsum. Nam eros leo, mattis ut dui id, efficitur finibus arcu. Mauris in iaculis lectus, eget convallis ligula. Donec sit amet ultricies nulla. Aenean at mi diam. Donec ornare, urna et eleifend egestas, ante sem dictum ipsum, vitae laci",
        comment: "difficult stuff!",
      },
      "350bdcc8-4eeb-44ed-a981-1c8831a45c51": {
        html: "ent cursus elit turpis, vestibulum tincidunt felis ullamcorper ac. Nulla laoreet, quam a lacinia congue, lorem tellus maximus ex, nec maximus nisl nibh sit amet elit. Fusce ante elit, mollis a velit in, elementum vestibulum orci. Quisque in odio quis enim porttitor iaculis. Pellentesque finibus sem ut convallis luctus. Curabitur eu elit molestie, efficitur diam et, rutrum nibh. Nullam fermentum ex at ante gravida suscipit. Curabitur mollis tortor vitae eros viverra efficitur et sed risus.",
        comment: "Difficult!!!",
      },
    },
    important: {
      "9d4f5c97-d149-4408-8368-9422aa1bbb03": {
        html: "ent tincidunt, felis eget laoreet varius, massa velit mattis odio, at lobortis lacus elit vel elit. Etiam ut nulla efficitur, aliquet nulla sed, molestie risus. Pellentesque iaculis eleifend volutpat. Suspendisse malesuada neque eget dictum imperdiet. Curabitur accumsan hendrerit odio, sed maximus erat suscipit a. Praesent tempor, ligula ut lobortis pharetra, ipsum ex sagittis diam, non congue tortor quam et metus. Ut scelerisque luctus purus, in scelerisque nisl mollis ac. Nam pretium vehicula lacus, eget egestas nulla efficitur sed. Etiam finibus feugiat sapien. Nunc ut lectus sapien. Mauris dapibus, velit quis consequat gravida, nisi ipsum venenatis nisi, eget finibus nisl nisl in neque. Donec eu felis ut dui maximus rutrum et ut elit.",
        comment: "this is important",
      },
    },
    revision: {
      "74eac02f-d9c9-4271-bdd5-bc8f8b0b6e86": {
        html: " urna eu, lacinia dolor. Fusce non eros non lectus aliquet luctus vitae nec sapien. Sed facilisis, nisi eget feugiat porttitor, elit lectus viverra turpis, ac interdum ligula ante eget sapien. Morbi aliquam urna ornare justo iaculis accumsan. Cras ornare, ipsum sed dignissim suscipit, velit dui sagittis tortor, a aliquet nibh lacus id tortor. Morbi sagittis eros leo, quis viverra orci pharetra vitae. Sed sit amet facilisis orci, et feugiat metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed convallis libero eu nunc dictum luctus. Phasellus lacinia imperdiet ante efficitur molestie. Aliquam eleifend ante eu libero mattis, quis iaculi",
        comment: "I should revise this!",
      },
    },
  },
  {
    id: 2,
    content:
      '<p><img src="https://dog.ceo/api/breeds/image/random Fetch" alt="" width="NaN" height="NaN" /><span class="mce-annotation" data-mce-annotation-uid="cdf424d0-1cae-4e7f-8c7e-212fe2f5651a" data-mce-annotation="difficult" data-tagging-comment="test"><img src="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1721.jpg" alt="" width="390" height="263" /></span><span class="mce-annotation" data-mce-annotation-uid="c1d10510-3a58-472e-8ac5-a9ab92172c7c" data-mce-annotation="difficult" data-tagging-comment="">hello</span> world this <span class="mce-annotation" data-mce-annotation-uid="6ce582e4-dc72-4c8d-b138-b90b13b06486" data-mce-annotation="important" data-tagging-comment="testset">is super important hello hei</span>ajldkfjasdf aj<span class="mce-annotation" data-mce-annotation-uid="11bb9eae-d53a-47b7-95bb-8726e7400a28" data-mce-annotation="revision" data-tagging-comment="teaste1231">sdfkl jasdklf jasdlfjk oiaeshlfkadsjasd;</span></p>',
    module: "CS1101S Programming Methodology",
    difficult: {
      "cdf424d0-1cae-4e7f-8c7e-212fe2f5651a": {
        html: '<img src="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1721.jpg" alt="" width="390" height="263" data-mce-src="https://images.dog.ceo/breeds/spaniel-blenheim/n02086646_1721.jpg">',
        comment: "test",
      },
      "c1d10510-3a58-472e-8ac5-a9ab92172c7c": { html: "hello", comment: "" },
    },
    important: {
      "6ce582e4-dc72-4c8d-b138-b90b13b06486": {
        html: "is super important hello hei",
        comment: "testset",
      },
    },
    revision: {
      "11bb9eae-d53a-47b7-95bb-8726e7400a28": {
        html: "sdfkl jasdklf jasdlfjk oiaeshlfkadsjasd;",
        comment: "teaste1231",
      },
    },
  },
];

export default SAMPLE_NOTES_JSON;
