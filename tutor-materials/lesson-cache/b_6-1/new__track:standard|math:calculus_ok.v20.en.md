%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6Ik5vIHRleHRib29rIGZpZ3VyZSBjcm9wcyBhcmUgYXZhaWxhYmxlLCBhbmQgdGhpcyBzZWN0aW9uIGlzIGRlZmluaXRpb24taGVhdnkuIENsZWFuIGdlbmVyYXRlZCB2aXN1YWxzIHdpbGwgbWFrZSB0aGUgbWF0cml4IHR5cGVzIGFuZCB0cmFuc3Bvc2Ugb3BlcmF0aW9uIGVhc2llciB0byBzZWUgdGhhbiByZWFkaW5nIE9DUi1zdHlsZSBmb3JtdWxhcyBhbG9uZS4iLCJjcmFtIjoiVXNlIHZpc3VhbHMgdG8gbWFrZSBlYWNoIG1hdHJpeCBwYXR0ZXJuIGluc3RhbnRseSByZWNvZ25pemFibGU6IGRpYWdvbmFsIGVudHJpZXMgb25seSwgb25lcyBvbiB0aGUgZGlhZ29uYWwsIGFsbCB6ZXJvcywgbWlycm9yIHN5bW1ldHJ5LCBhbmQgcm93cyBiZWNvbWluZyBjb2x1bW5zLiIsInN0YW5kYXJkIjoiVXNlIHZpc3VhbHMgdG8gY2xhcmlmeSB0aGUgY29yZSBkZWZpbml0aW9ucyBhbmQgc3VwcG9ydCBvbmUgcmVwcmVzZW50YXRpdmUgZXhhbXBsZSBvZiB0cmFuc3Bvc2UgYW5kIGJhc2ljIG9wZXJhdGlvbnMuIiwidG9wX3Njb3JlIjoiVXNlIHZpc3VhbHMgdG8gZXhwb3NlIGVhc3kgbWlzdGFrZXM6IGNvbmZ1c2luZyBhIGRpYWdvbmFsIG1hdHJpeCB3aXRoIGFueSBzcGFyc2UgbWF0cml4LCBtaXhpbmcgdXAgc2FtZS1vcmRlciByZXF1aXJlbWVudHMsIGFuZCBmb3JnZXR0aW5nIHRyYW5zcG9zZSBjaGFuZ2VzIGFuIG0geCBuIG1hdHJpeCBpbnRvIG4geCBtLiJ9" style="display:none;"></div>%%KC_END%%
# B.6 Some Definitions and Properties

> **Section Objective:** Recognize the most common special matrix types, understand when two matrices are equal, and apply the first rules of matrix algebra.

Suppose you see a matrix with numbers only on the main diagonal, like

$$
\begin{bmatrix} 2 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 5 \end{bmatrix}
$$

That visual pattern already tells you something important — this is a **diagonal matrix**, and recognizing it instantly will save you time on exams.

This section introduces four named matrix types, the rule for matrix equality, the transpose operation, and the first algebra rules: addition and scalar multiplication. None of these ideas are complicated on their own, but students who can classify a matrix by pattern in seconds have a real advantage. Later topics — inverses, eigenvalues, systems of equations — all build on these definitions. Start here, build the pattern recognition, and the rest becomes easier.

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgdG8gbWVtb3JpemUgdGhlIHZpc3VhbCBzaWduYXR1cmVzIG9mIHRoZSBzcGVjaWFsIG1hdHJpY2VzIGZhc3QuIiwic3RhbmRhcmQiOiJVc2UgdGhpcyB0byBleHBsYWluIHdoYXQgZWFjaCBuYW1lZCBtYXRyaXggbG9va3MgbGlrZSBhbmQgd2hhdCBmZWF0dXJlIGRlZmluZXMgaXQuIiwidG9wX3Njb3JlIjoiVXNlIHRoaXMgdG8gY29udHJhc3QgY29ycmVjdCBkZWZpbml0aW9ucyB3aXRoIG5lYXItbWlzcyBwYXR0ZXJucyBzdHVkZW50cyBvZnRlbiBtaXNjbGFzc2lmeS4ifQ==" style="display:none;"></div>%%KC_END%%
*🎨 Four special matrix types side by side. The defining feature of each is highlighted: diagonal entries only, ones on the diagonal, all zeros, and mirror symmetry across the main diagonal.*
![Illustration](/generated/gptimage2-1777215251616-4501.png)

## 1. Special Matrix Types

The **main diagonal** of a matrix runs from the top-left entry to the bottom-right entry. Four named types are defined by what happens on and off that diagonal.

- **Diagonal matrix:** Every off-diagonal entry is zero. Only the main diagonal may have nonzero values.
- **Identity matrix:** A diagonal matrix where every diagonal entry is exactly 1. It is usually written \(I\) or \(I_n\) for an \(n \times n\) identity. Multiplying any matrix by \(I\) leaves it unchanged — exactly like multiplying a number by 1 in ordinary algebra.
- **Zero matrix:** Every entry is 0. Written \(O\). Adding the zero matrix to any matrix leaves it unchanged.
- **Symmetric matrix:** A square matrix that equals its own transpose, meaning entry \(a_{ij} = a_{ji}\) for all \(i\) and \(j\). The matrix mirrors itself across the main diagonal.

### EXAM TIP

When asked to classify a matrix, look at the diagonal first, then check the off-diagonal entries. A common trap is calling any sparse matrix diagonal — it only qualifies if every off-diagonal entry is exactly zero.

$$A = B \iff a_{ij} = b_{ij}\ \text{for all } i \text{ and } j$$
*Two matrices are equal only when they have the same size **and** every corresponding entry matches exactly — having the same dimensions alone is not sufficient.*

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="generate_image" data-teaching-role="comparison_anchor" data-visual-use-b64="eyJjcmFtIjoiVXNlIHRoaXMgdG8gcmVtZW1iZXIgdGhlIGZhc3QgcnVsZTogcm93cyBiZWNvbWUgY29sdW1ucy4iLCJzdGFuZGFyZCI6IlVzZSB0aGlzIHRvIHNob3cgaG93IGVhY2ggZW50cnkgbW92ZXMgd2hlbiBmb3JtaW5nIHRoZSB0cmFuc3Bvc2UuIiwidG9wX3Njb3JlIjoiVXNlIHRoaXMgdG8gcmVpbmZvcmNlIHRoZSBzaXplIGNoYW5nZSBmcm9tIG0geCBuIHRvIG4geCBtIGFuZCB0aGUgbGluayB0byBzeW1tZXRyeS4ifQ==" style="display:none;"></div>%%KC_END%%
*🎨 Transpose in action: the first row of A becomes the first column of \(A^T\), the second row becomes the second column, and the size changes from \(2 \times 3\) to \(3 \times 2\).*
![Illustration](/generated/gptimage2-1777215416807-8375.png)

## 2. Equality and Transpose

**Matrix equality** requires two things simultaneously: the matrices must have the same order (same number of rows and columns), and every corresponding entry must be identical. If even one entry differs, the matrices are not equal.

**Transpose** is the operation of flipping a matrix over its main diagonal. The formal rule is: entry \(a_{ij}\) in matrix \(A\) moves to position \((j, i)\) in \(A^T\). In plain terms, **rows become columns**.

A quick reminder on index notation: the first index is always the **row**, the second is always the **column**. So \(a_{23}\) is the entry in row 2, column 3.

For example, if \(A\) is a \(2 \times 3\) matrix, then \(A^T\) is a \(3 \times 2\) matrix. The first row of \(A\) becomes the first column of \(A^T\), and the second row becomes the second column.

### EXAM TIP

If a square matrix satisfies \(A = A^T\), it is symmetric by definition. This connection between transpose and symmetry appears frequently in exam problems.

$$A + B = (a_{ij} + b_{ij})_{m \times n}, \qquad cA = Ac$$
*Matrix addition is performed entry-by-entry and is only defined when both matrices have the same order \(m \times n\); scalar multiplication simply multiplies every entry of the matrix by the constant \(c\).*

## 3. Basic Matrix Algebra

Two operations are introduced here: **matrix addition** and **scalar multiplication**.

**Addition:** Add matching positions. If \(A\) and \(B\) are both \(2 \times 2\), then the entry in row 1, column 2 of \(A + B\) is simply \(a_{12} + b_{12}\). Every position is handled independently. Critically, **you cannot add matrices of different sizes** — there are no matching positions to pair up.

For example:

$$
\begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix} + \begin{bmatrix} 5 & 0 \\ 1 & 2 \end{bmatrix} = \begin{bmatrix} 6 & 2 \\ 4 & 6 \end{bmatrix}
$$

**Scalar multiplication:** Multiply every entry by the same number. For example, \(3 \cdot \begin{bmatrix} 1 & 2 \\ 0 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 6 \\ 0 & 12 \end{bmatrix}\). No entry is skipped.

### EXAM TIP

Before computing, always check dimensions first. Attempting to add two matrices of different sizes is one of the most common and easily avoided errors.

---
**📌 Key Takeaways**
- Diagonal, identity, zero, and symmetric matrices are defined by their entry patterns — look at the diagonal first.
- Two matrices are equal only when they have the same size and every corresponding entry matches exactly.
- Matrix addition requires matching sizes and works entry-by-entry; scalar multiplication scales every entry by the same number.

*In the next section we will continue with matrix operations, especially multiplication.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InNwZWNpYWxfbWF0cml4X3R5cGVzIiwibGFiZWwiOiJSZWNvZ25pemluZyBkaWFnb25hbCwgaWRlbnRpdHksIHplcm8sIGFuZCBzeW1tZXRyaWMgbWF0cmljZXMiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDFfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIG1hdHJpeCBpcyBhbiBpZGVudGl0eSBtYXRyaXg/Iiwib3B0aW9ucyI6WyJBLiBcXChcXGJlZ2lue2JtYXRyaXh9IDEgJiAwIFxcXFwgMCAmIDEgXFxlbmR7Ym1hdHJpeH1cXCkiLCJCLiBcXChcXGJlZ2lue2JtYXRyaXh9IDIgJiAwIFxcXFwgMCAmIDIgXFxlbmR7Ym1hdHJpeH1cXCkiLCJDLiBcXChcXGJlZ2lue2JtYXRyaXh9IDAgJiAxIFxcXFwgMSAmIDAgXFxlbmR7Ym1hdHJpeH1cXCkiLCJELiBcXChcXGJlZ2lue2JtYXRyaXh9IDEgJiAxIFxcXFwgMCAmIDEgXFxlbmR7Ym1hdHJpeH1cXCkiXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJBbiBpZGVudGl0eSBtYXRyaXggaGFzIDFzIG9uIHRoZSBtYWluIGRpYWdvbmFsIGFuZCAwcyBldmVyeXdoZXJlIGVsc2UuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJCIjoiVGhpcyBpcyBkaWFnb25hbCwgYnV0IHRoZSBkaWFnb25hbCBlbnRyaWVzIGFyZSAyLCBub3QgMS4iLCJDIjoiVGhlIDFzIGFyZSBvZmYgdGhlIG1haW4gZGlhZ29uYWwsIHNvIGl0IGlzIG5vdCB0aGUgaWRlbnRpdHkgbWF0cml4LiIsIkQiOiJUaGVyZSBpcyBhIG5vbnplcm8gZW50cnkgb2ZmIHRoZSBkaWFnb25hbCwgc28gaXQgaXMgbm90IHRoZSBpZGVudGl0eSBtYXRyaXguIn0sImhpbnQiOiJDaGVjayBib3RoIGNvbmRpdGlvbnM6IG9uZXMgb24gdGhlIG1haW4gZGlhZ29uYWwgYW5kIHplcm9zIGV2ZXJ5d2hlcmUgZWxzZS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDFfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IldoaWNoIHN0YXRlbWVudCBhYm91dCBhIHN5bW1ldHJpYyBtYXRyaXggaXMgY29ycmVjdD8iLCJvcHRpb25zIjpbIkEuIEFsbCBkaWFnb25hbCBlbnRyaWVzIG11c3QgYmUgMSIsIkIuIEFsbCBvZmYtZGlhZ29uYWwgZW50cmllcyBtdXN0IGJlIDAiLCJDLiBUaGUgbWF0cml4IG11c3QgZXF1YWwgaXRzIHRyYW5zcG9zZSIsIkQuIFRoZSBtYXRyaXggbXVzdCBiZSByZWN0YW5ndWxhciwgbm90IHNxdWFyZSJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IkEgc3ltbWV0cmljIG1hdHJpeCBzYXRpc2ZpZXMgXFwoQSA9IEFeVFxcKSwgbWVhbmluZyBpdCBtaXJyb3JzIGFjcm9zcyB0aGUgbWFpbiBkaWFnb25hbC4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IGRlc2NyaWJlcyB0aGUgaWRlbnRpdHkgbWF0cml4LCBub3QgZXZlcnkgc3ltbWV0cmljIG1hdHJpeC4iLCJCIjoiVGhhdCBkZXNjcmliZXMgYSBkaWFnb25hbCBtYXRyaXgsIHdoaWNoIGlzIG9ubHkgb25lIHNwZWNpYWwgY2FzZS4iLCJEIjoiQSBzeW1tZXRyaWMgbWF0cml4IG11c3QgYmUgc3F1YXJlIGJlY2F1c2UgaXQgaXMgY29tcGFyZWQgd2l0aCBpdHMgb3duIHRyYW5zcG9zZS4ifSwiaGludCI6IlRoaW5rIG1pcnJvciBzeW1tZXRyeSBhY3Jvc3MgdGhlIG1haW4gZGlhZ29uYWwuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6Im9wZW5haS9ncHQtNS40LWltYWdlLTIiLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Im1hdHJpeF9lcXVhbGl0eSIsImxhYmVsIjoiTWF0cml4IGVxdWFsaXR5IiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hlbiBhcmUgdHdvIG1hdHJpY2VzIFxcKEFcXCkgYW5kIFxcKEJcXCkgZXF1YWw/Iiwib3B0aW9ucyI6WyJBLiBXaGVuIHRoZXkgaGF2ZSB0aGUgc2FtZSBudW1iZXIgb2Ygcm93cyBvbmx5IiwiQi4gV2hlbiB0aGV5IGhhdmUgdGhlIHNhbWUgb3JkZXIgYW5kIGV2ZXJ5IGNvcnJlc3BvbmRpbmcgZW50cnkgaXMgZXF1YWwiLCJDLiBXaGVuIHRoZXkgYXJlIGJvdGggc3F1YXJlIiwiRC4gV2hlbiB0aGVpciBkaWFnb25hbCBlbnRyaWVzIGFyZSBlcXVhbCJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6Ik1hdHJpeCBlcXVhbGl0eSByZXF1aXJlcyBtYXRjaGluZyBzaXplIGFuZCBtYXRjaGluZyBlbnRyaWVzIHBvc2l0aW9uIGJ5IHBvc2l0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlRoZSBudW1iZXIgb2YgY29sdW1ucyBtdXN0IGFsc28gbWF0Y2gsIGFuZCBlbnRyaWVzIG11c3QgbWF0Y2ggdG9vLiIsIkMiOiJCZWluZyBzcXVhcmUgaXMgbm90IGVub3VnaDsgY29ycmVzcG9uZGluZyBlbnRyaWVzIG11c3Qgc3RpbGwgYmUgZXF1YWwuIiwiRCI6IkVxdWFsIGRpYWdvbmFscyBhbG9uZSBkbyBub3QgbWFrZSB0aGUgd2hvbGUgbWF0cmljZXMgZXF1YWwuIn0sImhpbnQiOiJTYW1lIHNoYXBlIHBsdXMgc2FtZSBlbnRyaWVzLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9XX0seyJpZCI6InRyYW5zcG9zZV9ydWxlIiwibGFiZWwiOiJUcmFuc3Bvc2UgYW5kIGRpbWVuc2lvbiBjaGFuZ2UiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDNfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IklmIFxcKEFcXCkgaXMgYSBcXCgyIFxcdGltZXMgM1xcKSBtYXRyaXgsIHdoYXQgaXMgdGhlIG9yZGVyIG9mIFxcKEFeVFxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKDIgXFx0aW1lcyAzXFwpIiwiQi4gXFwoMyBcXHRpbWVzIDJcXCkiLCJDLiBcXCgyIFxcdGltZXMgMlxcKSIsIkQuIFxcKDMgXFx0aW1lcyAzXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVHJhbnNwb3NlIHN3YXBzIHJvd3MgYW5kIGNvbHVtbnMsIHNvIGEgXFwoMiBcXHRpbWVzIDNcXCkgbWF0cml4IGJlY29tZXMgYSBcXCgzIFxcdGltZXMgMlxcKSBtYXRyaXguIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVHJhbnNwb3NlIGNoYW5nZXMgdGhlIG9yZGVyIHVubGVzcyB0aGUgbWF0cml4IGlzIHNxdWFyZS4iLCJDIjoiVGhpcyBpbmNvcnJlY3RseSBkcm9wcyBhIGNvbHVtbi4iLCJEIjoiVGhpcyBpbmNvcnJlY3RseSB0dXJucyB0aGUgbWF0cml4IGludG8gYSBzcXVhcmUgbWF0cml4LiJ9LCJoaW50IjoiUm93cyBiZWNvbWUgY29sdW1ucy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkV4cGxhaW4gd2hhdCBoYXBwZW5zIHRvIHRoZSBlbnRyeSBcXChhX3syM31cXCkgd2hlbiBhIG1hdHJpeCBpcyB0cmFuc3Bvc2VkLiIsImlkZWFsX2Fuc3dlciI6Ikl0IGJlY29tZXMgXFwoYV97MzJ9XFwpIGJlY2F1c2UgdHJhbnNwb3NlIHN3YXBzIHRoZSByb3cgaW5kZXggYW5kIHRoZSBjb2x1bW4gaW5kZXguIiwiZ3JhZGluZ19ydWJyaWMiOlsiTXVzdCBzdGF0ZSB0aGF0IFxcKGFfezIzfVxcKSBiZWNvbWVzIFxcKGFfezMyfVxcKSIsIk11c3QgbWVudGlvbiByb3cgYW5kIGNvbHVtbiBpbmRpY2VzIGFyZSBzd2FwcGVkIl0sImV4cGxhbmF0aW9uIjoiVGhpcyBjaGVja3Mgd2hldGhlciB0aGUgc3R1ZGVudCB1bmRlcnN0YW5kcyB0cmFuc3Bvc2UgYXQgdGhlIGVudHJ5IGxldmVsLCBub3QganVzdCBieSBtZW1vcml6aW5nIGRpbWVuc2lvbnMuIiwiaGludCI6IlRoZSBmaXJzdCBpbmRleCBpcyByb3cgYW5kIHRoZSBzZWNvbmQgaXMgY29sdW1uLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX1dfSx7ImlkIjoiYWRkaXRpb25fYW5kX3NjYWxhcl9tdWx0aXBsaWNhdGlvbiIsImxhYmVsIjoiQWRkaXRpb24gYW5kIHNjYWxhciBtdWx0aXBsaWNhdGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNF9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggY29uZGl0aW9uIG11c3QgYmUgdHJ1ZSBiZWZvcmUgYWRkaW5nIHR3byBtYXRyaWNlcz8iLCJvcHRpb25zIjpbIkEuIFRoZXkgbXVzdCBib3RoIGJlIHN5bW1ldHJpYyIsIkIuIFRoZXkgbXVzdCBoYXZlIHRoZSBzYW1lIG9yZGVyIiwiQy4gVGhleSBtdXN0IGJvdGggYmUgc3F1YXJlIiwiRC4gVGhleSBtdXN0IGhhdmUgdGhlIHNhbWUgZGV0ZXJtaW5hbnQiXSwiY29ycmVjdF9vcHRpb24iOiJCIiwiZXhwbGFuYXRpb24iOiJNYXRyaXggYWRkaXRpb24gaXMgZGVmaW5lZCBlbnRyeS1ieS1lbnRyeSwgc28gY29ycmVzcG9uZGluZyBwb3NpdGlvbnMgbXVzdCBleGlzdCBpbiBib3RoIG1hdHJpY2VzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IlN5bW1ldHJ5IGlzIHVucmVsYXRlZCB0byB3aGV0aGVyIGFkZGl0aW9uIGlzIGFsbG93ZWQuIiwiQyI6IlJlY3Rhbmd1bGFyIG1hdHJpY2VzIGNhbiBhbHNvIGJlIGFkZGVkIGlmIHRoZWlyIG9yZGVycyBtYXRjaC4iLCJEIjoiRGV0ZXJtaW5hbnQgaXMgbm90IHRoZSBjcml0ZXJpb24gZm9yIGFkZGl0aW9uLiJ9LCJoaW50IjoiWW91IG5lZWQgbWF0Y2hpbmcgcG9zaXRpb25zIHRvIGFkZC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9LHsiaWQiOiJrcDRfcTIiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkxldCBcXChBID0gXFxiZWdpbntibWF0cml4fSAxICYgMiBcXFxcIDMgJiA0IFxcZW5ke2JtYXRyaXh9XFwpLiBXaGF0IGlzIFxcKDJBXFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxiZWdpbntibWF0cml4fSAyICYgNCBcXFxcIDYgJiA4IFxcZW5ke2JtYXRyaXh9XFwpIiwiQi4gXFwoXFxiZWdpbntibWF0cml4fSAxICYgNCBcXFxcIDMgJiA4IFxcZW5ke2JtYXRyaXh9XFwpIiwiQy4gXFwoXFxiZWdpbntibWF0cml4fSAzICYgNCBcXFxcIDUgJiA2IFxcZW5ke2JtYXRyaXh9XFwpIiwiRC4gXFwoXFxiZWdpbntibWF0cml4fSAyICYgMiBcXFxcIDIgJiAyIFxcZW5ke2JtYXRyaXh9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiU2NhbGFyIG11bHRpcGxpY2F0aW9uIG11bHRpcGxpZXMgZXZlcnkgZW50cnkgb2YgdGhlIG1hdHJpeCBieSB0aGUgc2NhbGFyLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6Ik9ubHkgc29tZSBlbnRyaWVzIHdlcmUgZG91YmxlZDsgc2NhbGFyIG11bHRpcGxpY2F0aW9uIGFwcGxpZXMgdG8gZXZlcnkgZW50cnkuIiwiQyI6IlRoaXMgYWRkcyAyIGluc3RlYWQgb2YgbXVsdGlwbHlpbmcgYnkgMi4iLCJEIjoiVGhpcyBpZ25vcmVzIHRoZSBvcmlnaW5hbCBtYXRyaXggZW50cmllcy4ifSwiaGludCI6Ik11bHRpcGx5IGVhY2ggZW50cnksIG5vdCBqdXN0IHRoZSBkaWFnb25hbC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX1dfQ==" style="display:none;"></div>%%KC_END%%
