%%KC_BLOCK%%<div class="kc-visual-plan" data-visual-plan-b64="eyJwcmltYXJ5X2FuY2hvciI6Indpa2lfcmVmZXJlbmNlIiwicmF0aW9uYWxlIjoiVGhlIGtleSB2aXN1YWwgaWRlYSBpcyBnZW9tZXRyaWM6IHRoZSBiaWxpbmVhciB0cmFuc2Zvcm1hdGlvbiBtYXBzIHRoZSBjb250aW51b3VzLXRpbWUgcy1wbGFuZSBpbnRvIHRoZSBkaXNjcmV0ZS10aW1lIHotcGxhbmUsIHdpdGggdGhlIGltYWdpbmFyeSBheGlzIG1hcHBlZCB0byB0aGUgdW5pdCBjaXJjbGUuIEEgY2xlYW4gV2lraXBlZGlhIG9yIFdpa2ltZWRpYSByZWZlcmVuY2UgaW1hZ2UgaXMgdGhlIGJlc3Qgc3RhdGljIGFuY2hvciBiZWNhdXNlIGl0IGNhbiBzaG93IHRoZSBtYXBwaW5nIHdpdGhvdXQgZGVjb3JhdGl2ZSBub2lzZS4gTm8gdGV4dGJvb2sgZmlndXJlIGlzIGF2YWlsYWJsZSBpbiB0aGUgcHJvdmlkZWQgcGFnZXMsIGFuZCBhIGdlbmVyYXRlZCBpbWFnZSBpcyB1bm5lY2Vzc2FyeSB1bmxlc3MgdGhlIHJlZmVyZW5jZSBzZWFyY2ggZmFpbHMuIiwiY3JhbSI6IlVzZSB0aGUgdmlzdWFsIHRvIG1lbW9yaXplIHRoZSBleGFtIHRyaWdnZXI6IHMtcGxhbmUgaW1hZ2luYXJ5IGF4aXMgYmVjb21lcyB0aGUgei1wbGFuZSB1bml0IGNpcmNsZS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgdmlzdWFsIGJlc2lkZSB0aGUgc3Vic3RpdHV0aW9uIGZvcm11bGEgc28gc3R1ZGVudHMgY29ubmVjdCB0aGUgYWxnZWJyYSB0byB0aGUgZ2VvbWV0cmljIG1hcHBpbmcuIiwidG9wX3Njb3JlIjoiVXNlIHRoZSB2aXN1YWwgdG8gZGlzdGluZ3Vpc2ggcG9sZS16ZXJvIG1hcHBpbmcsIGFkZGVkIHplcm9zIGF0IHogPSAtMSwgYW5kIHRoZSBzdGFiaWxpdHktZnJpZW5kbHkgbGVmdC1oYWxmLXBsYW5lIHRvIHVuaXQtZGlzayBiZWhhdmlvci4ifQ==" style="display:none;"></div>%%KC_END%%
# Bilinear Transformation

> **Section Objective:** Learn how the bilinear transformation converts a continuous-time filter into a discrete-time IIR filter while preserving the key frequency-axis mapping.

---

## Concepts In This Section

- trapezoidal approximation
- s-to-z substitution
- unit-circle mapping
- pole-zero mapping
- added zeros at z = -1
- MATLAB implementation

## 1. Trapezoidal approximation

The bilinear transformation begins by approximating the integral over one sampling interval with a **trapezoid** rather than a one-sided rectangle. Here, \(T\) is the sampling interval, \(x[n] = x(nT)\) is the accumulated (integrated) signal at step \(n\), and \(y[n]\) is the sampled input signal at step \(n\).

The update rule uses **both** the current value \(y[n]\) and the previous value \(y[n-1]\), averaging them with the factor \(T/2\) — this is the two-endpoint trapezoidal average.

### EXAM TRIGGER

When a problem asks for the bilinear transformation, look for the **trapezoidal average** \(\frac{T}{2}(y[n]+y[n-1])\), not a backward-difference replacement.

### COMMON MISTAKE

Forgetting the factor \(T/2\), or using only \(y[n-1]\) (one endpoint only), gives a different approximation and a different discrete-time operator.

$$x[n]=\frac{T}{2}\bigl(y[n]+y[n-1]\bigr)+x[n-1]$$

## 2. The actual bilinear change of variable

Taking the z-transform of the trapezoidal difference equation yields a rational function in \(z^{-1}\). Here \(Y(z)\) is the z-transform of the output, \(X(z)\) is the z-transform of the input, \(z^{-1}\) represents a one-sample delay, and \(T\) is the sampling interval.

This expression is the **discrete-time operator** that replaces the continuous-time variable \(s\) in the substitution step.

### EXAM TRIGGER

To convert a continuous-time transfer function \(H(s)\) using the bilinear transformation, substitute:
$$s \leftarrow \frac{2(1-z^{-1})}{T(1+z^{-1})}$$

### COMMON MISTAKE

Reversing \(Y(z)/X(z)\) to \(X(z)/Y(z)\), or dropping the denominator term \(1+z^{-1}\), produces an incorrect operator that is not the bilinear transformation.

$$H(z)=\frac{Y(z)}{X(z)}=\frac{2\left(1-z^{-1}\right)}{T\left(1+z^{-1}\right)}$$

%%KC_BLOCK%%<div class="kc-visual-meta" data-visual-kind="web_reference_image" data-teaching-role="concept_anchor" data-visual-use-b64="eyJjcmFtIjoiUG9pbnQgb3V0IG9ubHkgdGhlIGZhc3QtcmVjb2duaXRpb24gcGF0dGVybjogaW1hZ2luYXJ5IGF4aXMgbWFwcyB0byB1bml0IGNpcmNsZS4iLCJzdGFuZGFyZCI6IlVzZSB0aGUgdmlzdWFsIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBmb3JtdWxhIHRvIGNvbm5lY3QgYWxnZWJyYWljIHN1YnN0aXR1dGlvbiB0byB6LXBsYW5lIGdlb21ldHJ5LiIsInRvcF9zY29yZSI6IlVzZSB0aGUgdmlzdWFsIHRvIGRpc2N1c3Mgc3RhYmlsaXR5IGludHVpdGlvbiBhbmQgd2h5IHRoaXMgbWFwcGluZyBpcyBiZXR0ZXIgdGhhbiBhIHNpbXBsZSBiYWNrd2FyZC1kaWZmZXJlbmNlIGFwcHJveGltYXRpb24uIn0=" style="display:none;"></div>%%KC_END%%
![File:Bilinear Transform Mapping.svg](https://upload.wikimedia.org/wikipedia/commons/c/c6/Bilinear_Transform_Mapping.svg)
*Reference visual from Wikimedia Commons: File:Bilinear Transform Mapping.svg*
%%KC_BLOCK%%<div class="kc-reference-source"><a href="https://upload.wikimedia.org/wikipedia/commons/c/c6/Bilinear_Transform_Mapping.svg" target="_blank" rel="noopener noreferrer">Reference image from Wikimedia Commons</a></div>%%KC_END%%


## 3. Mapping poles and zeros

This is the **inverse form** of the bilinear substitution: given a point \(s\) in the continuous-time plane, this formula tells you exactly where it lands in the \(z\)-plane. Here \(s\) is the continuous-time complex frequency variable, \(z\) is the discrete-time complex variable, and \(T\) is the sampling interval.

**Two minimal checks:**
- \(s = 0\) gives \(z = \frac{1+0}{1-0} = 1\). The origin maps to \(z = 1\).
- As \(|s| \to \infty\) along the imaginary axis, \(z \to -1\). High frequencies approach \(z = -1\).

### EXAM TRIGGER

Use this formula when a problem gives continuous-time poles or zeros and asks for their discrete-time locations.

### COMMON MISTAKE

Treating the mapping as \(z = 1 + sT\) (a simple linear shift) instead of the fractional form above gives completely wrong pole and zero locations.

$$z=\frac{1+sT/2}{1-sT/2}$$

## 4. Added zeros and MATLAB implementation

The same fractional formula applies individually to **each** continuous-time zero and each continuous-time pole. Use \(q\) as a placeholder for any root:

- If \(q = z_k\) is a continuous-time zero, then \(q_d\) is the corresponding discrete-time zero.
- If \(q = p_k\) is a continuous-time pole, then \(q_d\) is the corresponding discrete-time pole.

**Minimal symbolic example:** A continuous-time pole at \(p = -2\) maps to:
$$q_d = \frac{1+(-2)T/2}{1-(-2)T/2} = \frac{1-T}{1+T}$$

Substitute the numerical value of \(T\) to get the discrete-time pole location.

### EXAM TRIGGER

A pole-zero list in the \(s\)-domain must be transformed **root-by-root** using this formula, then the polynomial is reconstructed from the mapped roots.

### COMMON MISTAKE

Mapping the polynomial **coefficients** directly (e.g., multiplying each \(a_k\) by some factor) instead of mapping the **roots** produces an incorrect discrete-time filter.

$$q_d=\frac{1+qT/2}{1-qT/2}$$

## 4. Added zeros and MATLAB implementation

When the continuous-time numerator order is \(M\) and the denominator order is \(N\), practical filters require \(M \leq N\). After the bilinear transformation maps all \(M\) zeros and all \(N\) poles root-by-root, the discrete-time numerator would have only \(M\) roots while the denominator has \(N\) roots. To balance the orders, the transformation adds \(N - M\) zeros at \(z = -1\).

> **The extra zeros are not optional; they keep the discrete-time numerator order consistent after the transformation.**

---

### MATLAB PROGRAM CH5MP4 — STEP BY STEP

| Step | MATLAB operation | Purpose |
|------|------------------|---------|
| 1 | `roots(B)` | Find s-domain zeros |
| 2 | `roots(A)` | Find s-domain poles |
| 3 | Apply \(q_d = \frac{1+qT/2}{1-qT/2}\) | Map each root into z-domain |
| 4 | `-ones(length(A)-length(B), 1)` | Append \(N-M\) zeros at \(z = -1\) |
| 5 | `poly(...)` | Reconstruct coefficient vectors `Bd` and `Ad` |

### GUARD CONDITION

If `length(B) > length(A)`, the program **stops** immediately. The numerator order must not exceed the denominator order before applying the bilinear transformation. This is a hard filter-design constraint, not a numerical issue.

---
**📌 Key Takeaways**
- **Trapezoidal difference equation:** \(x[n]=\frac{T}{2}\bigl(y[n]+y[n-1]\bigr)+x[n-1]\) — uses both endpoints, not just one.
- **Discrete-time operator (s-replacement):** $$H(z)=\frac{Y(z)}{X(z)}=\frac{2(1-z^{-1})}{T(1+z^{-1})}$$ Replace \(s\) with \(\frac{2(1-z^{-1})}{T(1+z^{-1})}\) in any continuous-time \(H(s)\).
- **Inverse mapping (s to z):** $$z=\frac{1+sT/2}{1-sT/2}$$ Check: \(s=0 \Rightarrow z=1\); high frequency \(\Rightarrow z \to -1\).
- **Root-by-root pole-zero mapping:** $$q_d=\frac{1+qT/2}{1-qT/2}$$ Apply to each continuous-time pole and zero individually, then reconstruct the polynomial.
- **Added zeros:** If denominator order is \(N\) and numerator order is \(M\) with \(M \leq N\), add \(N-M\) zeros at \(z=-1\) to balance orders.
- **Key geometric fact:** The continuous-time imaginary axis (\(j\omega\) axis) maps exactly to the discrete-time unit circle. The stable left half-plane maps inside the unit disk.
- **MATLAB guard:** If numerator order exceeds denominator order (\(M > N\)), the program stops — this is a required filter-design constraint.

*Next, bilinear transformation with prewarping fixes the frequency-warping error at a chosen design frequency.*

%%KC_BLOCK%%<div class="kc-quiz-plan" data-quiz-b64="eyJ0eXBlIjoicXVpel9wbGFuIiwidGFyZ2V0X3F1ZXN0aW9ucyI6NywicXVlc3Rpb25fcmFuZ2UiOnsibWluIjo2LCJtYXgiOjh9LCJrbm93bGVkZ2VfcG9pbnRzIjpbeyJpZCI6InRyYXBlem9pZGFsX29yaWdpbiIsImxhYmVsIjoiVHJhcGV6b2lkYWwgYXBwcm94aW1hdGlvbiBjcmVhdGVzIHRoZSBiaWxpbmVhciBmb3JtIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hpY2ggZmVhdHVyZSBvZiB0aGUgYXBwcm94aW1hdGlvbiBsZWFkcyB0byB0aGUgYmlsaW5lYXIgdHJhbnNmb3JtYXRpb24gaW4gdGhpcyBzZWN0aW9uPyIsIm9wdGlvbnMiOlsiQS4gSXQgdXNlcyBvbmx5IHRoZSBwcmV2aW91cyBzYW1wbGUgXFwoeVtuLTFdXFwpLiIsIkIuIEl0IHVzZXMgdGhlIHRyYXBlem9pZGFsIGF2ZXJhZ2Ugb2YgXFwoeVtuXVxcKSBhbmQgXFwoeVtuLTFdXFwpLiIsIkMuIEl0IGlnbm9yZXMgdGhlIHNhbXBsaW5nIGludGVydmFsIFxcKFRcXCkuIiwiRC4gSXQgcmVwbGFjZXMgZXZlcnkgZGVyaXZhdGl2ZSB3aXRoIFxcKHpcXCkgZGlyZWN0bHkuIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGRlcml2YXRpb24gdXNlcyBhIHRyYXBlem9pZGFsIGFwcHJveGltYXRpb24sIHNvIGJvdGggZW5kcG9pbnRzIFxcKHlbbl1cXCkgYW5kIFxcKHlbbi0xXVxcKSBhcHBlYXIgd2l0aCB0aGUgZmFjdG9yIFxcKFQvMlxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGF0IGlzIGNsb3NlciB0byBhIG9uZS1zaWRlZCByZWN0YW5ndWxhciBhcHByb3hpbWF0aW9uLCBub3QgdGhlIHRyYXBlem9pZGFsIGFwcHJveGltYXRpb24uIiwiQyI6IlRoZSBzYW1wbGluZyBpbnRlcnZhbCBcXChUXFwpIGlzIGVzc2VudGlhbCBhbmQgYXBwZWFycyBhcyBcXChULzJcXCkuIiwiRCI6IlRoZSByZXN1bHQgaXMgYSByYXRpb25hbCBleHByZXNzaW9uIGluIFxcKHpeey0xfVxcKSwgbm90IHNpbXBseSBcXCh6XFwpLiJ9LCJoaW50IjoiTG9vayBmb3IgdGhlIGF2ZXJhZ2Ugb2YgdHdvIG5laWdoYm9yaW5nIHNhbXBsZXMuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfSx7ImlkIjoib3BlcmF0b3JfZm9ybXVsYSIsImxhYmVsIjoiRGlzY3JldGUtdGltZSBvcGVyYXRvciByZXBsYWNpbmcgcyIsImltcG9ydGFuY2UiOiJoaWdoIiwiZXhhbV93ZWlnaHQiOiJoaWdoIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoyfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwMl9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiRm9yIGJpbGluZWFyIHRyYW5zZm9ybWF0aW9uLCB3aGljaCBleHByZXNzaW9uIHJlcGxhY2VzIHRoZSBjb250aW51b3VzLXRpbWUgdmFyaWFibGUgXFwoc1xcKT8iLCJvcHRpb25zIjpbIkEuIFxcKHMgXFxsZWZ0YXJyb3cgXFxkZnJhY3syKDEtel57LTF9KX17VCgxK3peey0xfSl9XFwpIiwiQi4gXFwocyBcXGxlZnRhcnJvdyBcXGRmcmFje1QoMSt6XnstMX0pfXsyKDEtel57LTF9KX1cXCkiLCJDLiBcXChzIFxcbGVmdGFycm93IFxcZGZyYWN7MStzVC8yfXsxLXNULzJ9XFwpIiwiRC4gXFwocyBcXGxlZnRhcnJvdyAxLXpeey0xfVxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBiaWxpbmVhciBzdWJzdGl0dXRpb24gcmVwbGFjZXMgXFwoc1xcKSBieSBcXChcXGZyYWN7MigxLXpeey0xfSl9e1QoMSt6XnstMX0pfVxcKS4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGlzIGlzIHRoZSByZWNpcHJvY2FsIG9mIHRoZSBuZWVkZWQgZXhwcmVzc2lvbi4iLCJDIjoiVGhhdCBleHByZXNzaW9uIGdpdmVzIFxcKHpcXCkgaW4gdGVybXMgb2YgXFwoc1xcKSwgbm90IFxcKHNcXCkgaW4gdGVybXMgb2YgXFwoelxcKS4iLCJEIjoiVGhpcyBkcm9wcyB0aGUgcmVxdWlyZWQgc2NhbGUgZmFjdG9yIGFuZCBkZW5vbWluYXRvci4ifSwiaGludCI6IlRoZSBjb3JyZWN0IGV4cHJlc3Npb24gaGFzIGJvdGggXFwoMS16XnstMX1cXCkgYW5kIFxcKDErel57LTF9XFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwMl9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiQSBzdHVkZW50IHdyaXRlcyB0aGUgYmlsaW5lYXIgcmVwbGFjZW1lbnQgYXMgXFwocyA9IFxcZnJhY3syKDEtel57LTF9KX17VH1cXCkuIFdoYXQgaXMgbWlzc2luZz8iLCJvcHRpb25zIjpbIkEuIFRoZSBmYWN0b3IgXFwoelxcKSBpbiB0aGUgbnVtZXJhdG9yIiwiQi4gVGhlIGRlbm9taW5hdG9yIHRlcm0gXFwoMSt6XnstMX1cXCkiLCJDLiBUaGUgY29uZGl0aW9uIFxcKE0gPiBOXFwpIiwiRC4gVGhlIGFkZGVkIHBvbGUgYXQgXFwoeiA9IC0xXFwpIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIGRlbm9taW5hdG9yIFxcKDErel57LTF9XFwpIGlzIGVzc2VudGlhbDsgd2l0aG91dCBpdCwgdGhlIGV4cHJlc3Npb24gaXMgbm90IHRoZSBiaWxpbmVhciB0cmFuc2Zvcm1hdGlvbi4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkEiOiJUaGUgZm9ybXVsYSBpcyBub3JtYWxseSB3cml0dGVuIHVzaW5nIFxcKHpeey0xfVxcKTsgYSBudW1lcmF0b3IgXFwoelxcKSBpcyBub3QgdGhlIG1pc3NpbmcgaXNzdWUuIiwiQyI6IlxcKE0gPiBOXFwpIGlzIGFuIGludmFsaWQgZmlsdGVyLW9yZGVyIGNhc2UgaW4gdGhlIE1BVExBQiBwcm9ncmFtLCBub3QgcGFydCBvZiB0aGlzIHN1YnN0aXR1dGlvbi4iLCJEIjoiVGhlIHRyYW5zZm9ybWF0aW9uIGFkZHMgemVyb3MgYXQgXFwoeiA9IC0xXFwpIGluIGNlcnRhaW4gY2FzZXMsIG5vdCBhIHBvbGUgaW4gdGhlIGJhc2ljIFxcKHNcXCkgcmVwbGFjZW1lbnQuIn0sImhpbnQiOiJCaWxpbmVhciBtZWFucyBhIHJhdGlvIG9mIHR3byBmaXJzdC1vcmRlciB0ZXJtcy4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6Imdlb21ldHJpY19tYXBwaW5nIiwibGFiZWwiOiJJbWFnaW5hcnkgYXhpcyBtYXBzIHRvIHVuaXQgY2lyY2xlIiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3AzX3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJPYnNlcnZlIHRoZSBzLXBsYW5lIHRvIHotcGxhbmUgbWFwcGluZyBkaWFncmFtLiBXaGljaCBzdGF0ZW1lbnQgbWF0Y2hlcyB0aGUgYmlsaW5lYXIgdHJhbnNmb3JtYXRpb24gcHJvcGVydHkgZW1waGFzaXplZCBpbiB0aGUgdGV4dGJvb2s/Iiwib3B0aW9ucyI6WyJBLiBUaGUgcy1wbGFuZSBpbWFnaW5hcnkgYXhpcyBtYXBzIHRvIHRoZSB6LXBsYW5lIHVuaXQgY2lyY2xlLiIsIkIuIFRoZSBzLXBsYW5lIHJlYWwgYXhpcyBtYXBzIHRvIFxcKHogPSAwXFwpIG9ubHkuIiwiQy4gRXZlcnkgcy1wbGFuZSBwb2ludCBtYXBzIG91dHNpZGUgdGhlIHVuaXQgY2lyY2xlLiIsIkQuIFRoZSBtYXBwaW5nIHR1cm5zIGFsbCBwb2xlcyBpbnRvIHplcm9zLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSB0ZXh0Ym9vayBzdGF0ZXMgdGhhdCB0aGUgXFwoXFxvbWVnYVxcKSBheGlzIGlzIGNvcnJlY3RseSBtYXBwZWQgdG8gdGhlIHVuaXQgY2lyY2xlLCB3aGljaCBpcyB0aGUga2V5IGdlb21ldHJpYyBhZHZhbnRhZ2Ugb2YgdGhlIGJpbGluZWFyIHRyYW5zZm9ybWF0aW9uLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSByZWFsIGF4aXMgZG9lcyBub3QgY29sbGFwc2UgdG8gXFwoeiA9IDBcXCkuIiwiQyI6IlN0YWJsZSBjb250aW51b3VzLXRpbWUgcG9sZXMgaW4gdGhlIGxlZnQgaGFsZi1wbGFuZSBtYXAgaW5zaWRlIHRoZSB1bml0IGNpcmNsZS4iLCJEIjoiUG9sZXMgcmVtYWluIHBvbGVzIGFuZCB6ZXJvcyByZW1haW4gemVyb3MgdW5kZXIgdGhlIHJvb3QtYnktcm9vdCBtYXBwaW5nLiJ9LCJoaW50IjoiVGhlIGV4YW0gcGhyYXNlIGlzICdvbWVnYSBheGlzJyBvciAnZnJlcXVlbmN5IGF4aXMnLiIsIm5lZWRzX3Zpc3VhbCI6dHJ1ZSwidmlzdWFsX3R5cGUiOiJ3ZWJfc2VhcmNoX2ltYWdlOiBzLXBsYW5lIGltYWdpbmFyeSBheGlzIG1hcHBpbmcgdG8gei1wbGFuZSB1bml0IGNpcmNsZSIsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwM19xMiIsInR5cGUiOiJzaG9ydF9hbnN3ZXIiLCJzdGVtIjoiV2h5IGlzIHRoZSB1bml0LWNpcmNsZSBtYXBwaW5nIGltcG9ydGFudCB3aGVuIGNvbnZlcnRpbmcgYSBjb250aW51b3VzLXRpbWUgZmlsdGVyIGludG8gYSBkaXNjcmV0ZS10aW1lIElJUiBmaWx0ZXI/IiwiaWRlYWxfYW5zd2VyIjoiSW4gZGlzY3JldGUgdGltZSwgZnJlcXVlbmN5IHJlc3BvbnNlIGlzIGV2YWx1YXRlZCBvbiB0aGUgdW5pdCBjaXJjbGUuIFRoZSBiaWxpbmVhciB0cmFuc2Zvcm1hdGlvbiBtYXBzIHRoZSBjb250aW51b3VzLXRpbWUgZnJlcXVlbmN5IGF4aXMgKHRoZSBcXChqXFxvbWVnYVxcKSBheGlzKSB0byB0aGF0IHVuaXQgY2lyY2xlLCBzbyB0aGUgY29udmVydGVkIGZpbHRlciBoYXMgYSBtZWFuaW5nZnVsIGFuZCBjb3JyZWN0IGRpc2NyZXRlLXRpbWUgZnJlcXVlbmN5IHJlc3BvbnNlLiIsImdyYWRpbmdfcnVicmljIjpbIk11c3QgbWVudGlvbiB0aGF0IHRoZSBjb250aW51b3VzLXRpbWUgZnJlcXVlbmN5IGF4aXMgb3IgXFwoalxcb21lZ2FcXCkgYXhpcyBpcyBtYXBwZWQuIiwiTXVzdCBtZW50aW9uIHRoZSB6LXBsYW5lIHVuaXQgY2lyY2xlLiIsIk11c3QgY29ubmVjdCB0aGUgbWFwcGluZyB0byBkaXNjcmV0ZS10aW1lIGZyZXF1ZW5jeSByZXNwb25zZSBvciBJSVIgZmlsdGVyIGRlc2lnbi4iXSwiZXhwbGFuYXRpb24iOiJUaGlzIGNoZWNrcyB3aGV0aGVyIHRoZSBzdHVkZW50IHVuZGVyc3RhbmRzIHRoZSBwdXJwb3NlIG9mIHRoZSBtYXBwaW5nIHJhdGhlciB0aGFuIGp1c3QgbWVtb3JpemluZyB0aGUgZm9ybXVsYS4iLCJoaW50IjoiQXNrIHdoZXJlIGZyZXF1ZW5jeSByZXNwb25zZSBpcyBldmFsdWF0ZWQgaW4gdGhlIHotcGxhbmUuIiwibmVlZHNfdmlzdWFsIjp0cnVlLCJ2aXN1YWxfdHlwZSI6IndlYl9zZWFyY2hfaW1hZ2U6IHMtcGxhbmUgdG8gei1wbGFuZSBiaWxpbmVhciB0cmFuc2Zvcm1hdGlvbiBkaWFncmFtIiwic2FtZV9wb2ludF92YXJpYW50Ijp0cnVlfV19LHsiaWQiOiJwb2xlX3plcm9fbWFwcGluZyIsImxhYmVsIjoiTWFwcGluZyBzLWRvbWFpbiBwb2xlcyBhbmQgemVyb3Mgcm9vdC1ieS1yb290IiwiaW1wb3J0YW5jZSI6ImhpZ2giLCJleGFtX3dlaWdodCI6ImhpZ2giLCJtYXN0ZXJ5X3J1bGUiOnsiY29ycmVjdF9zdHJlYWtfcmVxdWlyZWQiOjJ9LCJxdWVzdGlvbnMiOlt7ImlkIjoia3A0X3ExIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJBIGNvbnRpbnVvdXMtdGltZSBwb2xlIGlzIFxcKHBcXCkuIFVuZGVyIHRoZSBiaWxpbmVhciB0cmFuc2Zvcm1hdGlvbiwgd2hpY2ggZXhwcmVzc2lvbiBnaXZlcyBpdHMgZGlzY3JldGUtdGltZSBwb2xlIGxvY2F0aW9uPyIsIm9wdGlvbnMiOlsiQS4gXFwocF9kID0gXFxkZnJhY3sxK3BULzJ9ezEtcFQvMn1cXCkiLCJCLiBcXChwX2QgPSBcXGRmcmFjezEtcFQvMn17MStwVC8yfVxcKSIsIkMuIFxcKHBfZCA9IHBUXFwpIiwiRC4gXFwocF9kID0gcCArIFQvMlxcKSJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IkVhY2ggY29udGludW91cy10aW1lIHBvbGUgb3IgemVybyBpcyBtYXBwZWQgYnkgXFwocV9kID0gXFxmcmFjezErcVQvMn17MS1xVC8yfVxcKS4gU3Vic3RpdHV0aW5nIFxcKHEgPSBwXFwpIGdpdmVzIG9wdGlvbiBBLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoaXMgcmV2ZXJzZXMgdGhlIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3Igb2YgdGhlIGNvcnJlY3QgZm9ybXVsYS4iLCJDIjoiTXVsdGlwbHlpbmcgYnkgXFwoVFxcKSBpcyBub3QgdGhlIGJpbGluZWFyIHJvb3QgbWFwcGluZy4iLCJEIjoiQWRkaW5nIFxcKFQvMlxcKSBpcyBub3QgYSBmcmFjdGlvbmFsIHRyYW5zZm9ybWF0aW9uLiJ9LCJoaW50IjoiVXNlIHRoZSBzYW1lIGZvcm11bGEgYXMgXFwoeiA9IFxcZnJhY3sxK3NULzJ9ezEtc1QvMn1cXCksIGJ1dCBzdWJzdGl0dXRlIHRoZSByb290IHZhbHVlIGZvciBcXChzXFwpLiIsIm5lZWRzX3Zpc3VhbCI6ZmFsc2UsInNhbWVfcG9pbnRfdmFyaWFudCI6dHJ1ZX0seyJpZCI6ImtwNF9xMiIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiV2hhdCBpcyB0aGUgbW9zdCBpbXBvcnRhbnQgcHJvY2VkdXJhbCBydWxlIHdoZW4gdXNpbmcgdGhlIHBvbGUtemVybyB2ZXJzaW9uIG9mIHRoZSBiaWxpbmVhciB0cmFuc2Zvcm1hdGlvbj8iLCJvcHRpb25zIjpbIkEuIE1hcCBlYWNoIHMtZG9tYWluIHJvb3QgaW5kaXZpZHVhbGx5LCB0aGVuIHJlYnVpbGQgdGhlIHBvbHlub21pYWwuIiwiQi4gTWFwIG9ubHkgdGhlIGxlYWRpbmcgY29lZmZpY2llbnRzLiIsIkMuIFJlcGxhY2UgZXZlcnkgY29lZmZpY2llbnQgXFwoYV9rXFwpIGJ5IFxcKGFfayBUXFwpLiIsIkQuIEFkZCBcXChOLU1cXCkgcG9sZXMgYXQgXFwoeiA9IC0xXFwpLiJdLCJjb3JyZWN0X29wdGlvbiI6IkEiLCJleHBsYW5hdGlvbiI6IlRoZSBNQVRMQUIgcHJvZ3JhbSByb290cyB0aGUgbnVtZXJhdG9yIGFuZCBkZW5vbWluYXRvciwgbWFwcyB0aG9zZSByb290cyB1c2luZyB0aGUgYmlsaW5lYXIgZm9ybXVsYSwgdGhlbiB1c2VzIGBwb2x5YCB0byByZWNvbnN0cnVjdCB0aGUgZGlzY3JldGUtdGltZSBjb2VmZmljaWVudCB2ZWN0b3JzLiIsIndyb25nX29wdGlvbl9leHBsYW5hdGlvbnMiOnsiQiI6IlRoZSByb290IGxvY2F0aW9ucywgbm90IGp1c3QgbGVhZGluZyBjb2VmZmljaWVudHMsIGRldGVybWluZSB0aGUgbWFwcGVkIGZpbHRlci4iLCJDIjoiQ29lZmZpY2llbnQgc2NhbGluZyBhbG9uZSBkb2VzIG5vdCBpbXBsZW1lbnQgdGhlIGJpbGluZWFyIHRyYW5zZm9ybWF0aW9uLiIsIkQiOiJUaGUgdHJhbnNmb3JtYXRpb24gYWRkcyBcXChOLU1cXCkgKip6ZXJvcyoqIGF0IFxcKHogPSAtMVxcKSwgbm90IHBvbGVzLiJ9LCJoaW50IjoiTG9vayBhdCB0aGUgcHJvZ3JhbSBzZXF1ZW5jZTogcm9vdHMsIG1hcCwgcG9seS4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOnRydWV9XX0seyJpZCI6ImFkZGVkX3plcm9zX2FuZF9tYXRsYWJfZ3VhcmQiLCJsYWJlbCI6IkFkZGVkIHplcm9zIGF0IHogPSAtMSBhbmQgTUFUTEFCIG9yZGVyIGNoZWNrIiwiaW1wb3J0YW5jZSI6Im1lZGl1bSIsImV4YW1fd2VpZ2h0IjoibWVkaXVtIiwibWFzdGVyeV9ydWxlIjp7ImNvcnJlY3Rfc3RyZWFrX3JlcXVpcmVkIjoxfSwicXVlc3Rpb25zIjpbeyJpZCI6ImtwNV9xMSIsInR5cGUiOiJtdWx0aXBsZV9jaG9pY2UiLCJzdGVtIjoiSWYgdGhlIGNvbnRpbnVvdXMtdGltZSBkZW5vbWluYXRvciBvcmRlciBpcyBcXChOXFwpIGFuZCBudW1lcmF0b3Igb3JkZXIgaXMgXFwoTVxcKSB3aXRoIFxcKE0gXFxsZXEgTlxcKSwgaG93IG1hbnkgemVyb3MgYXJlIGFkZGVkIGF0IFxcKHogPSAtMVxcKT8iLCJvcHRpb25zIjpbIkEuIFxcKE0gLSBOXFwpIiwiQi4gXFwoTiAtIE1cXCkiLCJDLiBcXChOICsgTVxcKSIsIkQuIDEgYWx3YXlzIl0sImNvcnJlY3Rfb3B0aW9uIjoiQiIsImV4cGxhbmF0aW9uIjoiVGhlIHNlY3Rpb24gc3RhdGVzIHRoYXQgXFwoTiAtIE1cXCkgemVyb3MgYXJlIGFkZGVkIGF0IFxcKHogPSAtMVxcKSB0byBiYWxhbmNlIHRoZSBudW1lcmF0b3IgYW5kIGRlbm9taW5hdG9yIG9yZGVycyBhZnRlciB0aGUgdHJhbnNmb3JtYXRpb24uIiwid3Jvbmdfb3B0aW9uX2V4cGxhbmF0aW9ucyI6eyJBIjoiXFwoTSAtIE5cXCkgd291bGQgYmUgbm9ucG9zaXRpdmUgd2hlbiBcXChNIFxcbGVxIE5cXCksIHNvIGl0IGNhbm5vdCBiZSB0aGUgbnVtYmVyIG9mIGFkZGVkIHplcm9zLiIsIkMiOiJUaGUgbnVtYmVyIG9mIGFkZGVkIHplcm9zIGlzIHRoZSBvcmRlciBkaWZmZXJlbmNlLCBub3QgdGhlIHN1bS4iLCJEIjoiT25lIHplcm8gaXMgYWRkZWQgb25seSBpbiB0aGUgc3BlY2lhbCBjYXNlIFxcKE4gLSBNID0gMVxcKS4ifSwiaGludCI6IlRoZSBhZGRlZCBjb3VudCBmaWxscyB0aGUgZGVub21pbmF0b3ItbnVtZXJhdG9yIG9yZGVyIGdhcC4iLCJuZWVkc192aXN1YWwiOmZhbHNlLCJzYW1lX3BvaW50X3ZhcmlhbnQiOmZhbHNlfSx7ImlkIjoia3A1X3EyIiwidHlwZSI6Im11bHRpcGxlX2Nob2ljZSIsInN0ZW0iOiJJbiBNQVRMQUIgcHJvZ3JhbSBDSDVNUDQsIHdoeSBkb2VzIHRoZSBjb2RlIHN0b3Agd2hlbiBgbGVuZ3RoKEIpID4gbGVuZ3RoKEEpYD8iLCJvcHRpb25zIjpbIkEuIEJlY2F1c2UgdGhlIG51bWVyYXRvciBvcmRlciBtdXN0IG5vdCBleGNlZWQgdGhlIGRlbm9taW5hdG9yIG9yZGVyLiIsIkIuIEJlY2F1c2UgYWxsIGZpbHRlcnMgbXVzdCBoYXZlIG5vIHplcm9zLiIsIkMuIEJlY2F1c2UgXFwoVFxcKSBtdXN0IGJlIGxhcmdlciB0aGFuIDEuIiwiRC4gQmVjYXVzZSBgcm9vdHMoQSlgIGNhbm5vdCBiZSBjb21wdXRlZC4iXSwiY29ycmVjdF9vcHRpb24iOiJBIiwiZXhwbGFuYXRpb24iOiJUaGUgcHJvZ3JhbSBlbmZvcmNlcyB0aGUgY29uZGl0aW9uIHRoYXQgdGhlIG51bWVyYXRvciBvcmRlciBtdXN0IG5vdCBleGNlZWQgdGhlIGRlbm9taW5hdG9yIG9yZGVyIGJlZm9yZSBhcHBseWluZyB0aGUgYmlsaW5lYXIgdHJhbnNmb3JtYXRpb24uIFZpb2xhdGluZyB0aGlzIG1ha2VzIHRoZSBmaWx0ZXIgbm9uLWNhdXNhbCBvciBpbXByb3Blci4iLCJ3cm9uZ19vcHRpb25fZXhwbGFuYXRpb25zIjp7IkIiOiJUaGUgZmlsdGVyIGNhbiBoYXZlIHplcm9zOyB0aGUgaXNzdWUgaXMgdGhlIHJlbGF0aXZlIG9yZGVyIG9mIG51bWVyYXRvciBhbmQgZGVub21pbmF0b3IuIiwiQyI6IlRoZSBzdG9wcGluZyBjb25kaXRpb24gZG9lcyBub3QgdGVzdCB0aGUgdmFsdWUgb2YgXFwoVFxcKS4iLCJEIjoiYHJvb3RzKEEpYCBjYW4gYmUgY29tcHV0ZWQgZm9yIHZhbGlkIGRlbm9taW5hdG9yIHBvbHlub21pYWxzOyB0aGUgZ3VhcmQgaXMgYWJvdXQgZmlsdGVyIG9yZGVyLCBub3QgcG9seW5vbWlhbCBzb2x2YWJpbGl0eS4ifSwiaGludCI6IlJlYWQgdGhlIHByb2dyYW0ncyBwcmludGVkIGVycm9yIG1lc3NhZ2Ug4oCUIGl0IHJlZmVycyB0byBmaWx0ZXIgb3JkZXIuIiwibmVlZHNfdmlzdWFsIjpmYWxzZSwic2FtZV9wb2ludF92YXJpYW50IjpmYWxzZX1dfV19" style="display:none;"></div>%%KC_END%%
