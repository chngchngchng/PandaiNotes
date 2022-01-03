const Image = require("./../models/imageModel");

exports.createImage = async (req, res) => {
  try {
    const image = await Image.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        image: image,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const image = await Image.findOneAndUpdate(
      { name: req.params.imageName },
      req.body,
      { new: true, runValidators: true }
    );
    res.status(200).json({
      status: "success",
      data: {
        image: image,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.status(200).json({
      status: "success",
      data: {
        images: images,
        links: images.map((el) => el.link),
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "fail",
      message: "An error occurred!",
    });
  }
};

exports.getImage = async (req, res) => {
  try {
    const image = await Image.findOne({ name: req.params.imageName });
    res.status(200).json({
      status: "success",
      data: {
        image: image,
        link: image.link,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: `Could not find image with associated name: ${req.params.imageName}`,
    });
  }
};
