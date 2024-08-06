const { check } = require("express-validator");

const validatePost = [
  check("title").not().isEmpty().withMessage("Title is required").isString(),
  check("body")
    .optional()
    .isString()
    .isLength({ max: 1000 })
    .withMessage("Description cannot exceed 1000 characters"),
];

module.exports = { validatePost };
