# React Additional Practical Task

<!-- 1. Move table with products to the separate component `ProductTable.tsx`; -->
<!-- 2. Move form to the separate component `AddProductForm.tsx`; -->
3. Make it possible to add new products with categories to the table:
   <!-- - Make input `product name` controlled; -->
   <!-- - Make select `categories` controlled; -->
   <!-- - Add function for add new product on form submit. Each product should have (`id`, `name`, `categoryId`, `category`); -->
   <!-- - `id` is the largest id in the array `+ 1`. Creat a function for getting correct id; -->
   - Clear form fields after form submission;

Additional requirements:
1. (* **Optional**) Add validation to the form
   - add a default empty option `Choose a category` to the select;
   - if the `name` is empty, show an error message next to the `name` field (`Please enter a name`);
   - before creating a product, check if a `category` was selected. If not, show an error message next to the `select` (`Please choose a category`);
   - errors should appear only after clicking the `Add` button;
   - hide the message immediately after any change of the field with an error;
