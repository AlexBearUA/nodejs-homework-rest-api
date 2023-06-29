const { HttpError } = require("../../helpers");
const { User } = require("../../models/user");

const changeSubscription = async (req, res, next) => {
  const { _id } = req.user;
  const { subscription } = req.body;

  const subscriptionTypes = ["starter", "pro", "business"];
  const subscriptionIsValid = subscriptionTypes.includes(subscription);
  if (!subscriptionIsValid) {
    throw HttpError(404, `Subscription is incorrect`);
  }
  const { email } = await User.findByIdAndUpdate(_id, {
    $set: { subscription },
  });
  res.json({
    status: "success",
    code: 200,
    data: {
      user: {
        email,
        subscription,
      },
    },
  });
};

module.exports = changeSubscription;
