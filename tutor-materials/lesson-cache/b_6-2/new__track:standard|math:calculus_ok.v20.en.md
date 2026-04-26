%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6IlRoaXMgc2VjdGlvbiBpcyBtYXRoLWhlYXZ5IGFuZCBoYXMgbm8gZXh0cmFjdGVkIHRleHRib29rIGZpZ3VyZXMsIHNvIGdlbmVyYXRlZCBsZWN0dXJlLW5vdGUgdmlzdWFscyBhcmUgdGhlIGNsZWFyZXN0IHdheSB0byBzaG93IG1hdHJpeCBzaGFwZSBydWxlcywgcm93LWJ5LWNvbHVtbiBtdWx0aXBsaWNhdGlvbiwgYW5kIGludmVyc2UgY29uZGl0aW9ucyB3aXRob3V0IHBhZ2UgY2x1dHRlci4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gbWFrZSBkaW1lbnNpb24gY2hlY2tzIGFuZCByb3ctdGltZXMtY29sdW1uIG11bHRpcGxpY2F0aW9uIGluc3RhbnRseSByZWNvZ25pemFibGUgdW5kZXIgZXhhbSBwcmVzc3VyZS4iLCJzdGFuZGFyZCI6IlVzZSB2aXN1YWxzIHRvIGNsYXJpZnkgZWFjaCBvcGVyYXRpb24gd2l0aCBvbmUgY2xlYW4gcmVwcmVzZW50YXRpdmUgZXhhbXBsZSBhbmQgb25lIGNsZWFyIHJ1bGUgcGVyIHBhZ2UuIiwidG9wX3Njb3JlIjoiVXNlIHZpc3VhbHMgdG8gZXhwb3NlIG5vbi1jb25mb3JtYWJsZSBwcm9kdWN0cywgb3JkZXIgc2Vuc2l0aXZpdHksIGFuZCB0aGUgZXhhY3QgY29uZGl0aW9ucyB1bmRlciB3aGljaCBpbnZlcnNlcyBleGlzdC4ifQ==" style="display:none;"></div>%%KC_END%%
# B.6-2 Matrix Algebra

> **Section Objective:** Master the rules for combining matrices — addition, scalar multiplication, matrix multiplication, and inversion — and know exactly when each operation is allowed.

If matrices are tables of numbers, matrix algebra is the rulebook for combining those tables. This section covers six core ideas: addition, scalar multiplication, matrix multiplication, the identity matrix, matrix-vector multiplication, and the matrix inverse.

Exams test three things repeatedly: which operations are allowed, how to compute a product entry correctly, and when an inverse exists. The answers all follow from one habit — **check matrix size first before doing any arithmetic.** Every rule in this section flows from that single discipline. Build that reflex now and the rest becomes straightforward.

## 1. Addition and Scalar Multiplication

Two ideas govern this section. First, matrices can be added **only when they have the same order** — same number of rows and same number of columns. Second, scalar multiplication means multiplying **every single entry** by the same number.

**Worked example.** Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\) and \(B = \begin{bmatrix} 5 & 0 \\ -1 & 2 \end{bmatrix}\).

$$A + B = \begin{bmatrix} 1+5 & 2+0 \\ 3+(-1) & 4+2 \end{bmatrix} = \begin{bmatrix} 6 & 2 \\ 2 & 6 \end{bmatrix}$$

$$3A = \begin{bmatrix} 3 & 6 \\ 9 & 12 \end{bmatrix}$$

### MEMORY RULE

**Same position, same size.** If every entry in one matrix has a matching partner in the other, addition is valid.

#### Exam Note

Students lose easy marks by adding matrices of different sizes. A \(2 \times 3\) matrix and a \(3 \times 2\) matrix cannot be added — the sizes do not match, even though the total number of entries is the same.

$$A + B = (a_{ij} + b_{ij})_{m \times n}, \qquad cA = (c a_{ij})_{m \times n}$$
*Addition combines matching entries at the same position, while scalar multiplication scales every entry in the matrix by the constant \(c\).*


## 2. Matrix Multiplication: Row by Column

Matrix multiplication follows a strict size rule: **the product \(AB\) is defined only when the number of columns of \(A\) equals the number of rows of \(B\).** If \(A\) is \(m \times n\) and \(B\) is \(n \times p\), then \(C = AB\) has size \(m \times p\).

Each entry \(c_{ij}\) is computed by taking row \(i\) of \(A\) and column \(j\) of \(B\), multiplying corresponding elements, and summing.

**Worked example.** Let \(A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}\) and \(B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}\).

Computing \(c_{11}\) step by step:

$$c_{11} = (1)(5) + (2)(7) = 5 + 14 = 19$$

The full product:

$$AB = \begin{bmatrix} 19 & 22 \\ 43 & 50 \end{bmatrix}$$

### EXAM TRAPS

Multiplication is **not** done entry-by-entry. Even when \(AB\) is defined, \(BA\) may be undefined or may give a completely different result. Always check both directions separately.

#### Key Check

Inner sizes must match. Outer sizes give the product dimensions.

$$c_{ij} = \sum_{k=1}^{n} a_{ik} b_{kj}$$
*Each entry of the product matrix is the dot product of row \(i\) of \(A\) with column \(j\) of \(B\), summing all pairwise products across the shared dimension \(n\).*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="exam_pattern_anchor" data-visual-use-b64="eyJjcmFtIjoiTWFrZSB0aGUgcm93LXRpbWVzLWNvbHVtbiBwYXR0ZXJuIGFuZCBkaW1lbnNpb24gY2hlY2sgcmVjb2duaXphYmxlIGluIHNlY29uZHMuIiwic3RhbmRhcmQiOiJVc2UgdGhlIHZpc3VhbCB0byB3YWxrIHRocm91Z2ggb25lIHByb2R1Y3QgZW50cnkgYW5kIHRoZW4gdGhlIHByb2R1Y3Qgc2l6ZS4iLCJ0b3Bfc2NvcmUiOiJVc2UgdGhlIHZpc3VhbCB0byBoaWdobGlnaHQgdGhhdCBBQiBhbmQgQkEgYXJlIGRpZmZlcmVudCBjaGVja3MgYW5kIG1heSBub3QgbWF0Y2guIn0=" style="display:none;"></div>%%KC_END%%
*🎨 Row \(i\) of \(A\) pairs with column \(j\) of \(B\) to produce entry \(c_{ij}\). Inner dimensions must match; outer dimensions determine the product size.*
![Illustration](/generated/gptimage2-1777215638315-2254.png)

## 3. Identity, Matrix-Vector Multiplication, and Inverse

These three ideas connect naturally as tools that multiplication unlocks.

**Distributive laws** hold for matrices just as for numbers: \(A(B + C) = AB + AC\) and \((A + B)C = AC + BC\). The **identity matrix** \(I\) plays the role of the number 1 — multiplying any conformable matrix by \(I\) leaves it unchanged: \(AI = IA = A\).

**Matrix-vector multiplication** treats a column vector \(\mathbf{x}\) as an \(n \times 1\) matrix. Then \(A\mathbf{x}\) follows the same size rule: if \(A\) is \(m \times n\), then \(\mathbf{x}\) must be \(n \times 1\), and the result \(\mathbf{y} = A\mathbf{x}\) is \(m \times 1\).

**The inverse** reverses the action of \(A\). If \(\mathbf{y} = A\mathbf{x}\), then \(\mathbf{x} = A^{-1}\mathbf{y}\) — but only when \(A^{-1}\) exists. The exact condition: **\(A\) must be square and \(\det(A) \neq 0\).**

**Short example:** if \(A\) is \(2 \times 3\), then \(A\mathbf{x}\) is defined for a \(3 \times 1\) vector, but \(A^{-1}\) cannot exist because \(A\) is not square.

### EXAM NOTE

\(\mathbf{x}A\) is generally meaningless when \(\mathbf{x}\) is a column vector — the sizes do not conform. Always write \(A\mathbf{x}\), not \(\mathbf{x}A\).

$$AI = IA = A, \qquad \mathbf{y} = A\mathbf{x}, \qquad A^{-1}A = I, \qquad \mathbf{x} = A^{-1}\mathbf{y}$$
*The identity matrix leaves \(A\) unchanged under multiplication; matrix-vector multiplication follows the same conformability rule as matrix multiplication; and the inverse \(A^{-1}\) undoes the action of \(A\) — but only when \(A\) is square and \(\det(A) \neq 0\).*

---
**📌 Key Takeaways**
- Addition and scalar multiplication require matching sizes; scalar acts on every entry.
- Matrix product \(AB\) requires inner sizes to match; compute each entry row-by-column.
- Inverse \(A^{-1}\) exists only when \(A\) is square and \(\det(A) \neq 0\).

*In the next section we will build on these matrix tools to solve larger problems more efficiently.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImFkZGl0aW9uX2FuZF9zY2FsYXJfcnVsZXMiLCJsYWJlbCI6IkFkZGl0aW9uIGFuZCBzY2FsYXIgbXVsdGlwbGljYXRpb24gcnVsZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggb3BlcmF0aW9uIGlzIHZhbGlkPyIsIm9wdGlvbnMiOlsiQS4gQWRkIGEgXFwoMiBcXHRpbWVzIDNcXCkgbWF0cml4IHRvIGEgXFwoMyBcXHRpbWVzIDJcXCkgbWF0cml4IiwiQi4gQWRkIGEgXFwoMiBcXHRpbWVzIDJcXCkgbWF0cml4IHRvIGFub3RoZXIgXFwoMiBcXHRpbWVzIDJcXCkgbWF0cml4IiwiQy4gQWRkIGEgXFwoMyBcXHRpbWVzIDFcXCkgbWF0cml4IHRvIGEgXFwoMyBcXHRpbWVzIDJcXCkgbWF0cml4IiwiRC4gT25seSBzcXVhcmUgbWF0cmljZXMgY2FuIGJlIGFkZGVkIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiTWF0cml4IGFkZGl0aW9uIGlzIGRlZmluZWQgd2hlbiB0aGUgdHdvIG1hdHJpY2VzIGhhdmUgZXhhY3RseSB0aGUgc2FtZSBvcmRlci4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgc2l6ZXMgZG8gbm90IG1hdGNoLCBzbyBlbnRyeS1ieS1lbnRyeSBhZGRpdGlvbiBpcyBpbXBvc3NpYmxlLiIsIkMiOiJUaGUgc2l6ZXMgZGlmZmVyLCBzbyB0aGUgbWF0cmljZXMgY2Fubm90IGJlIGFkZGVkLiIsIkQiOiJNYXRyaWNlcyBkbyBub3QgbmVlZCB0byBiZSBzcXVhcmU7IHRoZXkganVzdCBuZWVkIHRoZSBzYW1lIG9yZGVyLiJ9LCJoaW50IjoiQXNrIHdoZXRoZXIgZXZlcnkgZW50cnkgaGFzIGEgbWF0Y2hpbmcgcG9zaXRpb24gaW4gdGhlIG90aGVyIG1hdHJpeC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AxX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJZiBcXChBID0gXFxiZWdpbntibWF0cml4fSAxICYgLTIgXFxcXCAzICYgNCBcXGVuZHtibWF0cml4fVxcKSwgd2hhdCBpcyBcXCgyQVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKFxcYmVnaW57Ym1hdHJpeH0gMiAmIC00IFxcXFwgNiAmIDggXFxlbmR7Ym1hdHJpeH1cXCkiLCJCLiBcXChcXGJlZ2lue2JtYXRyaXh9IDEgJiAtNCBcXFxcIDMgJiA4IFxcZW5ke2JtYXRyaXh9XFwpIiwiQy4gXFwoXFxiZWdpbntibWF0cml4fSAzICYgMCBcXFxcIDUgJiA2IFxcZW5ke2JtYXRyaXh9XFwpIiwiRC4gXFwoXFxiZWdpbntibWF0cml4fSAyICYgLTIgXFxcXCA2ICYgNCBcXGVuZHtibWF0cml4fVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlNjYWxhciBtdWx0aXBsaWNhdGlvbiBtZWFucyBtdWx0aXBseWluZyBldmVyeSBlbnRyeSBvZiB0aGUgbWF0cml4IGJ5IDIuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiT25seSBzb21lIGVudHJpZXMgd2VyZSBkb3VibGVkOyBzY2FsYXIgbXVsdGlwbGljYXRpb24gbXVzdCBhcHBseSB0byBldmVyeSBlbnRyeS4iLCJDIjoiVGhpcyBsb29rcyBsaWtlIGFkZGluZyAyIGluc3RlYWQgb2YgbXVsdGlwbHlpbmcgYnkgMi4iLCJEIjoiQWdhaW4sIG5vdCBldmVyeSBlbnRyeSB3YXMgc2NhbGVkIGNvcnJlY3RseS4ifSwiaGludCI6IkEgc2NhbGFyIGFjdHMgb24gYWxsIGVudHJpZXMsIG5vdCBqdXN0IHNlbGVjdGVkIG9uZXMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJtYXRyaXhfbXVsdGlwbGljYXRpb25fY29uZm9ybWFiaWxpdHkiLCJsYWJlbCI6IldoZW4gbWF0cml4IG11bHRpcGxpY2F0aW9uIGlzIGRlZmluZWQiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6Ik1hdHJpeCBcXChBXFwpIGlzIFxcKDIgXFx0aW1lcyAzXFwpIGFuZCBtYXRyaXggXFwoQlxcKSBpcyBcXCgzIFxcdGltZXMgNFxcKS4gV2hpY2ggc3RhdGVtZW50IGlzIGNvcnJlY3Q/Iiwib3B0aW9ucyI6WyJBLiBcXChBQlxcKSBpcyBkZWZpbmVkIGFuZCBoYXMgc2l6ZSBcXCgyIFxcdGltZXMgNFxcKSIsIkIuIFxcKEFCXFwpIGlzIGRlZmluZWQgYW5kIGhhcyBzaXplIFxcKDMgXFx0aW1lcyAzXFwpIiwiQy4gXFwoQUJcXCkgaXMgbm90IGRlZmluZWQgYmVjYXVzZSAyIGlzIG5vdCBlcXVhbCB0byA0IiwiRC4gXFwoQkFcXCkgaXMgYWxzbyBndWFyYW50ZWVkIHRvIGJlIGRlZmluZWQiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgaW5uZXIgc2l6ZXMgbWF0Y2ggKGJvdGggMyksIHNvIFxcKEFCXFwpIGV4aXN0cywgYW5kIHRoZSBwcm9kdWN0IHRha2VzIHRoZSBvdXRlciBzaXplczogXFwoMiBcXHRpbWVzIDRcXCkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhlIHByb2R1Y3Qgc2l6ZSBpcyBub3QgaW5uZXItYnktaW5uZXI7IGl0IGlzIG91dGVyLWJ5LW91dGVyLiIsIkMiOiJUaGUgcnVsZSBjaGVja3MgY29sdW1ucyBvZiBcXChBXFwpIGFnYWluc3Qgcm93cyBvZiBcXChCXFwpLCBzbyAzIGFuZCAzIGFyZSB3aGF0IG1hdHRlci4iLCJEIjoiXFwoQkFcXCkgd291bGQgcmVxdWlyZSBpbm5lciBzaXplcyA0IGFuZCAyIHRvIG1hdGNoLCB3aGljaCB0aGV5IGRvIG5vdC4ifSwiaGludCI6IkNoZWNrIGlubmVyIHNpemVzIGZpcnN0LCB0aGVuIG91dGVyIHNpemVzLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJnZW5lcmF0ZWRfaW1hZ2UiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGljaCBzdGF0ZW1lbnQgYmVzdCBkZXNjcmliZXMgaG93IHRvIGNvbXB1dGUgYW4gZW50cnkgXFwoY197aWp9XFwpIG9mIFxcKEMgPSBBQlxcKT8iLCJvcHRpb25zIjpbIkEuIE11bHRpcGx5IHRoZSBlbnRyaWVzIGluIHRoZSBzYW1lIHBvc2l0aW9uIiwiQi4gQWRkIHJvdyBcXChpXFwpIG9mIFxcKEFcXCkgdG8gY29sdW1uIFxcKGpcXCkgb2YgXFwoQlxcKSIsIkMuIFRha2UgdGhlIGRvdCBwcm9kdWN0IG9mIHJvdyBcXChpXFwpIG9mIFxcKEFcXCkgd2l0aCBjb2x1bW4gXFwoalxcKSBvZiBcXChCXFwpIiwiRC4gTXVsdGlwbHkgY29sdW1uIFxcKGlcXCkgb2YgXFwoQVxcKSB3aXRoIHJvdyBcXChqXFwpIG9mIFxcKEJcXCkiXSwiY29ycmVjdF9vcHRpb24iOiJDIiwiZXhwbGFuYXRpb24iOiJFYWNoIHByb2R1Y3QgZW50cnkgaXMgZm9ybWVkIGJ5IHJvdy1ieS1jb2x1bW4gbXVsdGlwbGljYXRpb24gYW5kIGFkZGl0aW9uIOKAlCBhIGRvdCBwcm9kdWN0LiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoYXQgaXMgZW50cnktYnktZW50cnkgbXVsdGlwbGljYXRpb24sIHdoaWNoIGlzIG5vdCBzdGFuZGFyZCBtYXRyaXggbXVsdGlwbGljYXRpb24uIiwiQiI6IlRoZSBvcGVyYXRpb24gaXMgbm90IHNpbXBsZSBhZGRpdGlvbjsgaXQgaXMgYSB3ZWlnaHRlZCBzdW0gb2YgcHJvZHVjdHMuIiwiRCI6IlRoZSBvcmRlciBpcyB3cm9uZzsgdGhlIHJ1bGUgaXMgcm93IG9mIFxcKEFcXCkgd2l0aCBjb2x1bW4gb2YgXFwoQlxcKS4ifSwiaGludCI6IlRoaW5rICdyb3cgdGltZXMgY29sdW1uLCcgbm90ICdwb3NpdGlvbiB0aW1lcyBwb3NpdGlvbi4nIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EzIiwidHlwZSI6InNob3J0X2Fuc3dlciIsInN0ZW0iOiJBIHN0dWRlbnQgc2F5cyBtYXRyaXggbXVsdGlwbGljYXRpb24gd29ya3MgbGlrZSBvcmRpbmFyeSBudW1iZXJzLCBzbyBpZiBcXChBQlxcKSBleGlzdHMgdGhlbiBcXChCQVxcKSBtdXN0IGFsc28gZXhpc3QgYW5kIGJlIGVxdWFsLiBFeHBsYWluIHdoeSB0aGlzIGlzIHdyb25nLiIsImlkZWFsX2Fuc3dlciI6Ik1hdHJpeCBtdWx0aXBsaWNhdGlvbiBkZXBlbmRzIG9uIGRpbWVuc2lvbnMgYW5kIG9yZGVyLiBcXChBQlxcKSBtYXkgYmUgZGVmaW5lZCB3aGlsZSBcXChCQVxcKSBpcyB1bmRlZmluZWQgYmVjYXVzZSB0aGUgaW5uZXIgc2l6ZXMgY2FuIGZhaWwgaW4gdGhlIHJldmVyc2Ugb3JkZXIuIEV2ZW4gaWYgYm90aCBwcm9kdWN0cyBleGlzdCwgdGhleSBhcmUgbm90IGdlbmVyYWxseSBlcXVhbCBiZWNhdXNlIG1hdHJpeCBtdWx0aXBsaWNhdGlvbiBpcyBub3QgY29tbXV0YXRpdmUuIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBtZW50aW9uIGRpbWVuc2lvbiBkZXBlbmRlbmNlIG9yIGNvbmZvcm1hYmlsaXR5IiwiTXVzdCBtZW50aW9uIHRoYXQgcmV2ZXJzaW5nIG9yZGVyIGNhbiBtYWtlIHRoZSBwcm9kdWN0IHVuZGVmaW5lZCIsIk11c3QgbWVudGlvbiB0aGF0IFxcKEFCXFwpIGFuZCBcXChCQVxcKSBhcmUgbm90IGdlbmVyYWxseSBlcXVhbCJdLCJleHBsYW5hdGlvbiI6IlRoaXMgdGVzdHMgdGhlIGNlbnRyYWwgZXhhbSB0cmFwIHRoYXQgc3R1ZGVudHMgb2Z0ZW4gaW1wb3J0IG51bWJlciBydWxlcyBpbnRvIG1hdHJpY2VzLiIsImhpbnQiOiJBZGRyZXNzIGJvdGggaXNzdWVzOiBleGlzdGVuY2UgYW5kIGVxdWFsaXR5LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiaWRlbnRpdHlfdmVjdG9yX2ludmVyc2UiLCJsYWJlbCI6IklkZW50aXR5IG1hdHJpeCwgbWF0cml4LXZlY3RvciBtdWx0aXBsaWNhdGlvbiwgYW5kIGludmVyc2UgY29uZGl0aW9ucyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggc3RhdGVtZW50IGlzIGFsd2F5cyB0cnVlIHdoZW4gdGhlIHByb2R1Y3RzIGFyZSBjb25mb3JtYWJsZT8iLCJvcHRpb25zIjpbIkEuIFxcKEFJID0gSUEgPSBBXFwpIiwiQi4gXFwoQSArIEkgPSBBXFwpIiwiQy4gXFwoQV57LTF9XFwpIGV4aXN0cyBmb3IgZXZlcnkgbWF0cml4IFxcKEFcXCkiLCJELiBcXChcXG1hdGhiZnt4fUFcXCkgaXMgdGhlIHNhbWUgaWRlYSBhcyBcXChBXFxtYXRoYmZ7eH1cXCkgZm9yIGEgY29sdW1uIHZlY3RvciBcXChcXG1hdGhiZnt4fVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBpZGVudGl0eSBtYXRyaXggbGVhdmVzIFxcKEFcXCkgdW5jaGFuZ2VkIHVuZGVyIG11bHRpcGxpY2F0aW9uIHdoZW4gdGhlIHNpemVzIGZpdC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJBZGRpbmcgXFwoSVxcKSBjaGFuZ2VzIHRoZSBkaWFnb25hbCBlbnRyaWVzIGFuZCBpcyBub3QgYW4gaWRlbnRpdHkgb3BlcmF0aW9uIGZvciBhZGRpdGlvbi4iLCJDIjoiQW4gaW52ZXJzZSBleGlzdHMgb25seSBmb3IgYSBzcXVhcmUgbWF0cml4IHdpdGggbm9uemVybyBkZXRlcm1pbmFudC4iLCJEIjoiT3JkZXIgbWF0dGVyczsgZm9yIGEgY29sdW1uIHZlY3RvciwgXFwoQVxcbWF0aGJme3h9XFwpIG1heSBiZSBkZWZpbmVkIHdoaWxlIFxcKFxcbWF0aGJme3h9QVxcKSBpcyBtZWFuaW5nbGVzcy4ifSwiaGludCI6IklkZW50aXR5IHdvcmtzIHRocm91Z2ggbXVsdGlwbGljYXRpb24sIG5vdCBhZGRpdGlvbi4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3AzX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJXaGVuIGRvZXMgYSBtYXRyaXggXFwoQVxcKSBoYXZlIGFuIGludmVyc2U/Iiwib3B0aW9ucyI6WyJBLiBXaGVuZXZlciBcXChBXFwpIGhhcyBhdCBsZWFzdCBvbmUgbm9uemVybyBlbnRyeSIsIkIuIE9ubHkgd2hlbiBcXChBXFwpIGlzIHNxdWFyZSBhbmQgXFwoXFxkZXQoQSkgXFxuZXEgMFxcKSIsIkMuIFdoZW5ldmVyIFxcKEFcXCkgY2FuIG11bHRpcGx5IGEgdmVjdG9yIiwiRC4gT25seSB3aGVuIFxcKEFcXCkgaXMgc3ltbWV0cmljIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGV4YWN0IGNvbmRpdGlvbiBpczogXFwoQVxcKSBtdXN0IGJlIHNxdWFyZSBhbmQgbm9uc2luZ3VsYXIsIG1lYW5pbmcgXFwoXFxkZXQoQSkgXFxuZXEgMFxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJBIG1hdHJpeCBjYW4gaGF2ZSBub256ZXJvIGVudHJpZXMgYW5kIHN0aWxsIGJlIHNpbmd1bGFyIChkZXRlcm1pbmFudCB6ZXJvKS4iLCJDIjoiTWFueSBub24tc3F1YXJlIG1hdHJpY2VzIG11bHRpcGx5IHZlY3RvcnMsIGJ1dCB0aGV5IGRvIG5vdCBoYXZlIGludmVyc2VzLiIsIkQiOiJTeW1tZXRyeSBpcyBub3QgdGhlIHJlcXVpcmVtZW50IGZvciBpbnZlcnRpYmlsaXR5LiJ9LCJoaW50IjoiVGhpbmsgc3F1YXJlIGZpcnN0LCB0aGVuIGRldGVybWluYW50LiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX1dfQ==" style="display:none;"></div>%%KC_END%%
