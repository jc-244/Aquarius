%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6ImdlbmVyYXRlZF9pbWFnZSIsInJhdGlvbmFsZSI6Ik5vIHRleHRib29rIGZpZ3VyZXMgYXJlIGF2YWlsYWJsZSwgc28gdGhlIHNlY3Rpb24gc2hvdWxkIHVzZSBhIGNsZWFuIGdlbmVyYXRlZCB2aXN1YWwgdG8gc2hvdyB0aGUgZGV0ZXJtaW5hbnQtcmVwbGFjZW1lbnQgcGF0dGVybiBhdCBhIGdsYW5jZS4gVGhpcyBzZWN0aW9uIGlzIGhpZ2hseSBwcm9jZWR1cmFsLCBzbyB0aGUgbWFpbiB2aXN1YWwgam9iIGlzIHRvIGltcHJvdmUgcmVjb2duaXRpb24gYW5kIHNwZWVkLiIsImNyYW0iOiJVc2UgdGhlIHZpc3VhbCB0byBoZWxwIHRoZSBzdHVkZW50IGluc3RhbnRseSByZW1lbWJlciB3aGljaCBjb2x1bW4gZ2V0cyByZXBsYWNlZCBhbmQgd2hlcmUgZWFjaCBkZXRlcm1pbmFudCBnb2VzLiIsInN0YW5kYXJkIjoiVXNlIHRoZSB2aXN1YWwgdG8gY29ubmVjdCB0aGUgZm9ybXVsYSBwYXR0ZXJuIHRvIG9uZSByZXByZXNlbnRhdGl2ZSAyLWJ5LTIgZXhhbXBsZSB3aXRob3V0IG92ZXJsb2FkaW5nIHRoZSBwYWdlLiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIGhpZ2hsaWdodCB0aGUgZGVub21pbmF0b3IgY29uZGl0aW9uLCBjb21tb24gc2lnbiBtaXN0YWtlcywgYW5kIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gcmVwbGFjaW5nIHRoZSB4LWNvbHVtbiB2ZXJzdXMgdGhlIHktY29sdW1uLiJ9" style="display:none;"></div>%%KC_END%%
# B.4 Cramer's Rule

> **Section Objective:** Learn a fast, determinant-based method for solving small linear systems — and know exactly when it works.

Suppose you need to solve a system like:

$$
2x + y = 5 \qquad x - y = 1
$$

This section teaches **Cramer's Rule** — a formula method that turns a linear system directly into determinant calculations. It is especially clean when the system is already written in standard coefficient form. You will learn how to set up the three key determinants, how to divide them to get each unknown, and the one critical condition that must hold before the method is valid: **the main coefficient determinant must not be zero.** For neat 2-by-2 systems on exams, this method is fast and reliable.

## 1. The Core Idea of Cramer's Rule

Consider the general 2-by-2 system:

$$
ax + by = e \qquad cx + dy = f
$$

Cramer's Rule says: form three determinants.

- **Main determinant** \(D\): built from the coefficient matrix \(\begin{vmatrix} a & b \\ c & d \end{vmatrix}\).
- **\(D_x\)**: replace the **x-column** (first column) with the constants \(e, f\).
- **\(D_y\)**: replace the **y-column** (second column) with the constants \(e, f\).

Then simply divide:

$$
x = \frac{D_x}{D}, \qquad y = \frac{D_y}{D}
$$

### EXAM TIP

Students who think in terms of **column replacement** — rather than memorizing abstract symbols — make far fewer errors. Ask yourself: *which variable's column am I replacing right now?*

#### Warning

This method is only valid when \(D \neq 0\).


$$D = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc, \quad D_x = \begin{vmatrix} e & b \\ f & d \end{vmatrix}, \quad D_y = \begin{vmatrix} a & e \\ c & f \end{vmatrix}, \quad x = \frac{D_x}{D}, \; y = \frac{D_y}{D}$$
*Cramer's Rule solves the system by dividing each variable's replacement determinant (\(D_x\) or \(D_y\)) by the original coefficient determinant \(D\). This only works when \(D \neq 0\); if \(D = 0\), the division is undefined and the method cannot produce a unique solution.*

## 2. Worked Example

Solve the system \(2x + y = 5\) and \(x - y = 1\) using Cramer's Rule.

**Step 1 — Coefficient matrix and main determinant:**

$$
D = \begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} = (2)(-1) - (1)(1) = -2 - 1 = -3
$$

Since \(D = -3 \neq 0\), Cramer's Rule applies.

**Step 2 — Compute \(D_x\) (replace the x-column with constants 5 and 1):**

$$
D_x = \begin{vmatrix} 5 & 1 \\ 1 & -1 \end{vmatrix} = (5)(-1) - (1)(1) = -5 - 1 = -6
$$

**Step 3 — Compute \(D_y\) (replace the y-column with constants 5 and 1):**

$$
D_y = \begin{vmatrix} 2 & 5 \\ 1 & 1 \end{vmatrix} = (2)(1) - (5)(1) = 2 - 5 = -3
$$

**Step 4 — Divide:**

$$
x = \frac{D_x}{D} = \frac{-6}{-3} = 2, \qquad y = \frac{D_y}{D} = \frac{-3}{-3} = 1
$$

**Quick check:** Substitute \(x = 2, y = 1\) back into both equations:
- \(2(2) + 1 = 5\) ✓
- \(2 - 1 = 1\) ✓

### COMMON MISTAKE

Replacing the **wrong column** is the most frequent error. Always name the variable first, then replace *that* variable's column — not the other one.

## 3. When the Method Works and Common Mistakes

### THE DETERMINANT CONDITION

Cramer's Rule requires \(D \neq 0\). If \(D = 0\), the formulas \(x = D_x/D\) and \(y = D_y/D\) involve division by zero, so the method breaks down. In practice, \(D = 0\) usually signals either **no solution** or **infinitely many solutions** — either way, switch to elimination or substitution.

### THREE COMMON EXAM MISTAKES

1. **Wrong column replaced.** To find \(D_x\), replace the first column (the \(x\)-coefficients). To find \(D_y\), replace the second column (the \(y\)-coefficients). Mixing these up gives the wrong answer with no obvious error signal.

2. **Sign error in \(ad - bc\).** The 2-by-2 determinant is \(ad - bc\), not \(ad + bc\) and not \(bc - ad\). A single sign slip here corrupts both \(x\) and \(y\).

3. **Using a different denominator for each variable.** Both \(x\) and \(y\) are divided by the **same** \(D\) — the original coefficient determinant. Do not recompute a new denominator for each variable.

### WHEN TO USE CRAMER'S RULE ON AN EXAM

Cramer's Rule is the fastest choice for **neat, small systems** — especially 2-by-2 — where the coefficients are clean integers and the system is already in standard form.

---
**📌 Key Takeaways**
- Cramer's Rule works only when the main determinant \(D = ad - bc\) is not zero.
- Form \(D_x\) and \(D_y\) by replacing the matching variable's column with the constants.
- Both unknowns share the same denominator \(D\): \(x = D_x/D\) and \(y = D_y/D\).

*In the next section we will use this determinant viewpoint in a broader way.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NiwicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo1LCJtYXgiOjd9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6ImRldGVybWluYW50X2NvbmRpdGlvbiIsImxhYmVsIjoiTWFpbiBkZXRlcm1pbmFudCBhbmQgdmFsaWRpdHkgY29uZGl0aW9uIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AxX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJGb3IgdGhlIHN5c3RlbSBcXChheCArIGJ5ID0gZVxcKSBhbmQgXFwoY3ggKyBkeSA9IGZcXCksIHdoZW4gY2FuIENyYW1lcidzIFJ1bGUgYmUgdXNlZCB0byBmaW5kIGEgdW5pcXVlIHNvbHV0aW9uPyIsIm9wdGlvbnMiOlsiQS4gT25seSB3aGVuIFxcKGFcXCksIFxcKGJcXCksIFxcKGNcXCksIFxcKGRcXCkgYXJlIGFsbCBwb3NpdGl2ZSIsIkIuIFdoZW4gdGhlIG1haW4gZGV0ZXJtaW5hbnQgXFwoRCA9IGFkIC0gYmNcXCkgaXMgbm90IHplcm8iLCJDLiBXaGVuIHRoZSBjb25zdGFudHMgXFwoZVxcKSBhbmQgXFwoZlxcKSBhcmUgYm90aCBub256ZXJvIiwiRC4gV2hlbmV2ZXIgdGhlIHN5c3RlbSBoYXMgdHdvIGVxdWF0aW9ucyJdLCJjb3JyZWN0X29wdGlvbiI6IkIiLCJleHBsYW5hdGlvbiI6IkNyYW1lcidzIFJ1bGUgZ2l2ZXMgYSB1bmlxdWUgc29sdXRpb24gb25seSB3aGVuIHRoZSBjb2VmZmljaWVudCBkZXRlcm1pbmFudCBcXChEID0gYWQgLSBiY1xcKSBpcyBub256ZXJvLiBBIHplcm8gZGV0ZXJtaW5hbnQgbWVhbnMgZGl2aXNpb24gYnkgemVybyBpbiB0aGUgZm9ybXVsYXMsIHNvIHRoZSBtZXRob2QgZmFpbHMuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiVGhlIHNpZ25zIG9mIHRoZSBjb2VmZmljaWVudHMgZG8gbm90IGRldGVybWluZSB3aGV0aGVyIHRoZSBtZXRob2Qgd29ya3M7IG9ubHkgdGhlIHZhbHVlIG9mIFxcKERcXCkgbWF0dGVycy4iLCJDIjoiVGhlIGNvbnN0YW50cyBcXChlXFwpIGFuZCBcXChmXFwpIGFwcGVhciBpbiBcXChEX3hcXCkgYW5kIFxcKERfeVxcKSwgYnV0IHRoZXkgZG8gbm90IGNvbnRyb2wgd2hldGhlciB0aGUgbWV0aG9kIGlzIHZhbGlkLiIsIkQiOiJIYXZpbmcgdHdvIGVxdWF0aW9ucyBpcyBuZWNlc3NhcnkgYnV0IG5vdCBzdWZmaWNpZW50OyB0aGUgZGV0ZXJtaW5hbnQgbXVzdCBhbHNvIGJlIG5vbnplcm8uIn0sImhpbnQiOiJGb2N1cyBvbiB0aGUgY29lZmZpY2llbnQgbWF0cml4LCBub3QgdGhlIGNvbnN0YW50cy4gV2hhdCBoYXBwZW5zIHRvIFxcKHggPSBEX3gvRFxcKSB3aGVuIFxcKEQgPSAwXFwpPyIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMV9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgdGhlIG1haW4gZGV0ZXJtaW5hbnQgXFwoRFxcKSBlcXVhbHMgXFwoMFxcKSwgd2hhdCBpcyB0aGUgY29ycmVjdCBleGFtIGNvbmNsdXNpb24/Iiwib3B0aW9ucyI6WyJBLiBcXCh4ID0gMFxcKSBhbmQgXFwoeSA9IDBcXCkiLCJCLiBDcmFtZXIncyBSdWxlIHN0aWxsIHdvcmtzIGlmIFxcKERfeFxcKSBhbmQgXFwoRF95XFwpIGFyZSBub256ZXJvIiwiQy4gVGhlIHN5c3RlbSBoYXMgbm8gZXF1YXRpb25zIiwiRC4gQ3JhbWVyJ3MgUnVsZSBkb2VzIG5vdCBnaXZlIGEgdW5pcXVlIHNvbHV0aW9uOyBhbm90aGVyIG1ldGhvZCBpcyBuZWVkZWQiXSwiY29ycmVjdF9vcHRpb24iOiJEIiwiZXhwbGFuYXRpb24iOiJXaGVuIFxcKEQgPSAwXFwpLCB0aGUgZm9ybXVsYXMgXFwoeCA9IERfeC9EXFwpIGFuZCBcXCh5ID0gRF95L0RcXCkgcmVxdWlyZSBkaXZpc2lvbiBieSB6ZXJvLCB3aGljaCBpcyB1bmRlZmluZWQuIFRoZSBzeXN0ZW0gbWF5IGhhdmUgbm8gc29sdXRpb24gb3IgaW5maW5pdGVseSBtYW55LCBzbyBhIGRpZmZlcmVudCBtZXRob2QgKGVsaW1pbmF0aW9uIG9yIHN1YnN0aXR1dGlvbikgbXVzdCBiZSB1c2VkLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQSI6IkEgemVybyBkZXRlcm1pbmFudCBkb2VzIG5vdCBpbXBseSB0aGUgdHJpdmlhbCBzb2x1dGlvbiBcXCh4ID0geSA9IDBcXCkuIiwiQiI6IlRoZSBkZW5vbWluYXRvciBcXChEXFwpIGlzIHRoZSBjcml0aWNhbCBpc3N1ZTsgZXZlbiBpZiBcXChEX3hcXCkgYW5kIFxcKERfeVxcKSBhcmUgbm9uemVybywgZGl2aWRpbmcgYnkgemVybyBpcyBzdGlsbCBpbnZhbGlkLiIsIkMiOiJUaGUgc3lzdGVtIHN0aWxsIGhhcyB0d28gZXF1YXRpb25zOyB0aGUgaXNzdWUgaXMgd2hldGhlciBhIHVuaXF1ZSBzb2x1dGlvbiBleGlzdHMuIn0sImhpbnQiOiJUaGluayBhYm91dCB0aGUgZGVub21pbmF0b3IgaW4gXFwoeCA9IERfeCAvIERcXCkgYW5kIFxcKHkgPSBEX3kgLyBEXFwpLiBXaGF0IGdvZXMgd3Jvbmcgd2hlbiBcXChEID0gMFxcKT8iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImNvbHVtbl9yZXBsYWNlbWVudF9wYXR0ZXJuIiwibGFiZWwiOiJIb3cgdG8gZm9ybSBEX3ggYW5kIERfeSBjb3JyZWN0bHkiLCJpbXBvcnRhbmNlIjoiaGlnaCIsImV4YW1fd2VpZ2h0IjoiaGlnaCIsIm1hc3RlcnlfcnVsZSI6eyJjb3JyZWN0X3N0cmVha19yZXF1aXJlZCI6Mn0sInF1ZXN0aW9ucyI6W3siaWQiOiJrcDJfcTEiLCJ0eXBlIjoibXVsdGlwbGVfY2hvaWNlIiwic3RlbSI6IkZvciBcXChheCArIGJ5ID0gZVxcKSBhbmQgXFwoY3ggKyBkeSA9IGZcXCksIHdoaWNoIG1hdHJpeCBpcyB1c2VkIHRvIGNvbXB1dGUgXFwoRF94XFwpPyIsIm9wdGlvbnMiOlsiQS4gXFwoXFxiZWdpbnt2bWF0cml4fSBhICYgZSBcXFxcIGMgJiBmIFxcZW5ke3ZtYXRyaXh9XFwpIiwiQi4gXFwoXFxiZWdpbnt2bWF0cml4fSBlICYgYiBcXFxcIGYgJiBkIFxcZW5ke3ZtYXRyaXh9XFwpIiwiQy4gXFwoXFxiZWdpbnt2bWF0cml4fSBhICYgYiBcXFxcIGUgJiBmIFxcZW5ke3ZtYXRyaXh9XFwpIiwiRC4gXFwoXFxiZWdpbnt2bWF0cml4fSBlICYgZiBcXFxcIGIgJiBkIFxcZW5ke3ZtYXRyaXh9XFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVG8gZ2V0IFxcKERfeFxcKSwgcmVwbGFjZSB0aGUgeC1jb2x1bW4gKGZpcnN0IGNvbHVtbikgd2l0aCB0aGUgY29uc3RhbnRzIFxcKGVcXCkgYW5kIFxcKGZcXCksIGxlYXZpbmcgdGhlIHktY29sdW1uIFxcKGIsIGRcXCkgdW5jaGFuZ2VkLiBUaGlzIGdpdmVzIFxcKFxcYmVnaW57dm1hdHJpeH0gZSAmIGIgXFxcXCBmICYgZCBcXGVuZHt2bWF0cml4fVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGlzIHJlcGxhY2VzIHRoZSBzZWNvbmQgY29sdW1uIHdpdGggY29uc3RhbnRzLCB3aGljaCBpcyB0aGUgY29uc3RydWN0aW9uIGZvciBcXChEX3lcXCksIG5vdCBcXChEX3hcXCkuIiwiQyI6IlRoaXMgcmVwbGFjZXMgdGhlIHNlY29uZCByb3cgcmF0aGVyIHRoYW4gdGhlIGZpcnN0IGNvbHVtbiDigJQgdGhhdCBpcyBub3QgaG93IENyYW1lcidzIFJ1bGUgd29ya3MuIiwiRCI6IlRoaXMgZG9lcyBub3QgcHJlc2VydmUgdGhlIG9yaWdpbmFsIGNvbHVtbiBzdHJ1Y3R1cmUgb2YgdGhlIGNvZWZmaWNpZW50IG1hdHJpeC4ifSwiaGludCI6IlRoZSB4LWNvbHVtbiBpcyB0aGUgZmlyc3QgY29sdW1uLiBSZXBsYWNlIG9ubHkgdGhhdCBjb2x1bW4gd2l0aCB0aGUgY29uc3RhbnRzIFxcKGVcXCkgYW5kIFxcKGZcXCkuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6ImdlbmVyYXRlX2ltYWdlIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfSx7ImlkIjoia3AyX3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIHN0dWRlbnQgZm9ybXMgXFwoRF95XFwpIGJ5IHJlcGxhY2luZyB0aGUgZmlyc3QgY29sdW1uIHdpdGggdGhlIGNvbnN0YW50cy4gV2hhdCBpcyB0aGUgbWlzdGFrZT8iLCJvcHRpb25zIjpbIkEuIE5vIG1pc3Rha2U7IHRoYXQgaXMgZXhhY3RseSBob3cgXFwoRF95XFwpIGlzIGZvcm1lZCIsIkIuIFRoZXkgc2hvdWxkIHJlcGxhY2UgYm90aCBjb2x1bW5zIHdpdGggY29uc3RhbnRzIiwiQy4gVGhleSByZXBsYWNlZCB0aGUgeC1jb2x1bW4sIHNvIHRoZXkgYWN0dWFsbHkgZm9ybWVkIFxcKERfeFxcKSwgbm90IFxcKERfeVxcKSIsIkQuIFRoZXkgc2hvdWxkIHJlcGxhY2UgdGhlIGNvbnN0YW50cyB3aXRoIHZhcmlhYmxlcyJdLCJjb3JyZWN0X29wdGlvbiI6IkMiLCJleHBsYW5hdGlvbiI6IlxcKERfeVxcKSBpcyBmb3JtZWQgYnkgcmVwbGFjaW5nIHRoZSB5LWNvbHVtbiwgd2hpY2ggaXMgdGhlICoqc2Vjb25kKiogY29sdW1uLiBSZXBsYWNpbmcgdGhlIGZpcnN0IGNvbHVtbiBnaXZlcyBcXChEX3hcXCkuIFRoZSBzdHVkZW50IGhhcyBjb21wdXRlZCB0aGUgd3JvbmcgZGV0ZXJtaW5hbnQgZW50aXJlbHkuIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiUmVwbGFjaW5nIHRoZSBmaXJzdCBjb2x1bW4gaXMgdGhlIHJ1bGUgZm9yIFxcKERfeFxcKSwgbm90IFxcKERfeVxcKS4iLCJCIjoiUmVwbGFjaW5nIGJvdGggY29sdW1ucyBpcyBub3QgcGFydCBvZiBDcmFtZXIncyBSdWxlIGF0IGFueSBzdGVwLiIsIkQiOiJUaGUgY29uc3RhbnRzIFxcKGVcXCkgYW5kIFxcKGZcXCkgYXJlIGV4YWN0bHkgd2hhdCBtdXN0IGJlIGluc2VydGVkIGludG8gdGhlIHJlcGxhY2VtZW50IGNvbHVtbi4ifSwiaGludCI6Ik1hdGNoIHRoZSB2YXJpYWJsZSBuYW1lIHRvIGl0cyBjb2x1bW4gcG9zaXRpb246IFxcKHhcXCkgaXMgaW4gY29sdW1uIDEsIFxcKHlcXCkgaXMgaW4gY29sdW1uIDIuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiIyYnkyX2NvbXB1dGF0aW9uIiwibGFiZWwiOiJDYXJyeWluZyBvdXQgdGhlIDItYnktMiBjYWxjdWxhdGlvbiIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwM19xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiVXNlIENyYW1lcidzIFJ1bGUgdG8gc29sdmUgXFwoMnggKyB5ID0gNVxcKSBhbmQgXFwoeCAtIHkgPSAxXFwpLiBXaGF0IGlzIHRoZSBhbnN3ZXI/Iiwib3B0aW9ucyI6WyJBLiBcXCh4ID0gMixcXCB5ID0gMVxcKSIsIkIuIFxcKHggPSAxLFxcIHkgPSAyXFwpIiwiQy4gXFwoeCA9IDMsXFwgeSA9IC0xXFwpIiwiRC4gXFwoeCA9IDIsXFwgeSA9IC0xXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQSIsImV4cGxhbmF0aW9uIjoiXFwoRCA9ICgyKSgtMSkgLSAoMSkoMSkgPSAtM1xcKS4gXFwoRF94ID0gKDUpKC0xKSAtICgxKSgxKSA9IC02XFwpLCBzbyBcXCh4ID0gLTYvLTMgPSAyXFwpLiBcXChEX3kgPSAoMikoMSkgLSAoNSkoMSkgPSAtM1xcKSwgc28gXFwoeSA9IC0zLy0zID0gMVxcKS4gQ2hlY2s6IFxcKDIoMikrMT01XFwpIOKckyBhbmQgXFwoMi0xPTFcXCkg4pyTLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgc3dhcHMgdGhlIHZhbHVlcyBvZiBcXCh4XFwpIGFuZCBcXCh5XFwpOyBzdWJzdGl0dXRpbmcgXFwoeD0xLCB5PTJcXCkgaW50byBcXCh4IC0geSA9IDFcXCkgZ2l2ZXMgXFwoLTEgXFxuZXEgMVxcKS4iLCJDIjoiVGhlc2UgdmFsdWVzIGRvIG5vdCBtYXRjaCB0aGUgZGV0ZXJtaW5hbnQgY2FsY3VsYXRpb25zOyBzdWJzdGl0dXRpbmcgXFwoeD0zLCB5PS0xXFwpIGludG8gXFwoMngreT01XFwpIGdpdmVzIFxcKDVcXCkgYnV0IFxcKHgteT00IFxcbmVxIDFcXCkuIiwiRCI6IlRoZSBzaWduIG9mIFxcKHlcXCkgaXMgd3Jvbmc7IHN1YnN0aXR1dGluZyBcXCh4PTIsIHk9LTFcXCkgaW50byBcXCgyeCt5PTVcXCkgZ2l2ZXMgXFwoMyBcXG5lcSA1XFwpLiJ9LCJoaW50IjoiQ29tcHV0ZSBcXChEXFwpIGZpcnN0LCB0aGVuIHJlcGxhY2Ugb25lIGNvbHVtbiBhdCBhIHRpbWUgdG8gZ2V0IFxcKERfeFxcKSBhbmQgXFwoRF95XFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6ZmFsc2V9LHsiaWQiOiJrcDNfcTIiLCJ0eXBlIjoic2hvcnRfYW5zd2VyIiwic3RlbSI6IkZvciB0aGUgc3lzdGVtIFxcKDN4ICsgMnkgPSA3XFwpIGFuZCBcXCh4ICsgeSA9IDNcXCksIGNvbXB1dGUgXFwoRFxcKSwgXFwoRF94XFwpLCBcXChEX3lcXCksIHRoZW4gc3RhdGUgXFwoeFxcKSBhbmQgXFwoeVxcKS4iLCJpZGVhbF9hbnN3ZXIiOiJcXChEID0gKDMpKDEpIC0gKDIpKDEpID0gMVxcKS4gXFwoRF94ID0gKDcpKDEpIC0gKDIpKDMpID0gNyAtIDYgPSAxXFwpLiBcXChEX3kgPSAoMykoMykgLSAoNykoMSkgPSA5IC0gNyA9IDJcXCkuIFRoZXJlZm9yZSBcXCh4ID0gRF94L0QgPSAxLzEgPSAxXFwpIGFuZCBcXCh5ID0gRF95L0QgPSAyLzEgPSAyXFwpLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgY29tcHV0ZSBcXChEID0gMVxcKSBjb3JyZWN0bHkgdXNpbmcgXFwoYWQgLSBiY1xcKSIsIk11c3QgZm9ybSBcXChEX3hcXCkgYnkgcmVwbGFjaW5nIHRoZSBmaXJzdCBjb2x1bW4gd2l0aCBjb25zdGFudHMgNyBhbmQgMyIsIk11c3QgZm9ybSBcXChEX3lcXCkgYnkgcmVwbGFjaW5nIHRoZSBzZWNvbmQgY29sdW1uIHdpdGggY29uc3RhbnRzIDcgYW5kIDMiLCJNdXN0IGNvbmNsdWRlIFxcKHggPSAxXFwpIGFuZCBcXCh5ID0gMlxcKSJdLCJleHBsYW5hdGlvbiI6IlRoaXMgcXVlc3Rpb24gY2hlY2tzIHdoZXRoZXIgdGhlIHN0dWRlbnQgY2FuIGV4ZWN1dGUgdGhlIGZ1bGwgQ3JhbWVyJ3MgUnVsZSBwcm9jZXNzIGFjY3VyYXRlbHkgZnJvbSBzdGFydCB0byBmaW5pc2gsIG5vdCBqdXN0IHJlY29nbml6ZSB0aGUgcGF0dGVybiBmcm9tIGEgd29ya2VkIGV4YW1wbGUuIiwiaGludCI6IldyaXRlIHRoZSBjb2VmZmljaWVudCBtYXRyaXggXFwoXFxiZWdpbnt2bWF0cml4fSAzICYgMiBcXFxcIDEgJiAxIFxcZW5ke3ZtYXRyaXh9XFwpIGZpcnN0IHNvIHlvdSBjYW4gY2xlYXJseSBzZWUgd2hpY2ggY29sdW1uIHRvIHJlcGxhY2UgZm9yIGVhY2ggdmFyaWFibGUuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
