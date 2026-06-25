# Data Structures and Algorithms (DSA)

---

## Exercise 2: E-commerce Platform Search Function

### 1. Asymptotic Notation

Big O measures how the execution time or memory usage of an algorithm grows relative to the size of the input data.

Execution time of an algorithm in the worst-case scenario.

For an input array of size n, search operations for:

- **Best case:** element to be found is found at first comparison (O(1)).
    - For eg in linear search, element to be found is at index 0.
- **Average case:** number of comparisons will be n/2.
    - In linear search, element is at the middle of the array.
- **Worst case:** number of comparisons will be n. (O(n))
    - In linear search, when element to be found is absent or is at the last index.

### 2. Setup

```java
class Product {
    int productId;
    String productName;
    String category;

    Product(int id, String name, String category) {
        this.productId = id;
        this.productName = name;
        this.category = category;
    }
}
```

### 3. Implementation

**-- Linear search by productId**
```java
public class SearchDemo {
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product p : products) {
            if (p.productId == targetId) {
                return p;
            }
        }
        return null;
    }
}
```

**-- Binary search by productId**
```java
public class SearchDemo {
    public static Product binarySearch(Product[] products, int targetId) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (right + left) / 2;
            if (products[mid].productId == targetId) {
                return products[mid];
            } else if (products[mid].productId < targetId) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return null;
    }
}
```

### 4. Analysis

**-- Linear Search**
- Best case: O(1) if the item is the very first element.
- Average case: O(n/2) ≈ O(n), since on average you will check half the array.
- Worst case: O(n) if the item is at the end or not present at all.

**-- Binary Search**
- Best case: O(1) if the item is right in the middle.
- Average case: O(log n), because the array is halved each step.
- Worst case: O(log n), still efficient compared to linear search.

**Which is More Suitable?**

For an ecommerce platform, binary search is generally more suitable because product lists can be very large, and O(log n) performance scales much better than O(n). The only requirement is that the product array must be sorted (e.g., by productId). Linear search is simpler and works on unsorted data, but it becomes slow as the number of products grows.

---

## Exercise 7: Financial Forecasting

### 1. Recursion

Recursion means a function calling itself. It is useful when a complex problem can be broken down into repeating sub-problems (factorials, fibonacci, etc.). Instead of writing long loops, recursion makes the logic cleaner and easier to follow.

### 2. Setup

```java
class RecursionEg {
    public static double futureVal(int years, double growth, double c_val) {
        if (years == 0) {
            return c_val;
        }
        return futureVal(years - 1, growth, c_val * (1 + growth));
    }

    public static void main(String args[]) {
        int years = 5;
        double growth = 0.05; // 5% yearly growth
        double current_val = 20000;
        int res = (int) futureVal(years, growth, current_val);
        System.out.println(res);
    }
}
```

### 3. Analysis

**Time Complexity:** Each recursive call reduces years by 1 until it reaches 0.

Complexity = O(n), where n = number of years.

**Optimization:**

Our recursive solution is already tail recursive, meaning the recursive call is the final operation in the method. This reduces overhead because there is no extra work waiting after each call, making the recursion as efficient as possible in its current form. For typical forecasting ranges (like a few years or decades), this approach is efficient enough.

We can use a simple iterative loop instead of recursion. Iteration avoids stack frame usage and is safer for very large inputs.
