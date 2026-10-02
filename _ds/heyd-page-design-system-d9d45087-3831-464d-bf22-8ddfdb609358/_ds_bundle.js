/* @ds-bundle: {"format":4,"namespace":"HeyDPageDesignSystem_d9d450","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"IconTile","sourcePath":"components/core/IconTile.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"},{"name":"ChoiceChip","sourcePath":"components/forms/ChoiceChip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/ChoiceChip.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Textarea","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"FeatureCard","sourcePath":"components/surfaces/FeatureCard.jsx"},{"name":"StatCard","sourcePath":"components/surfaces/StatCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"7fa040902282","components/core/Button.jsx":"7f67cda921fb","components/core/Icon.jsx":"1a5395ea7da3","components/core/IconButton.jsx":"ff9c1436dbcf","components/core/IconTile.jsx":"4e5ab52dac90","components/core/SectionLabel.jsx":"b60ace7db413","components/forms/ChoiceChip.jsx":"7fa4cdcb4846","components/forms/Field.jsx":"9336fe980429","components/forms/Input.jsx":"d6f686da17f2","components/surfaces/Card.jsx":"f14f7a82a22c","components/surfaces/FeatureCard.jsx":"ae712b68e29f","components/surfaces/StatCard.jsx":"e6052570decc","ui_kits/website/Contact.jsx":"19b01642388d","ui_kits/website/Designer.jsx":"3d0ff5e8ffae","ui_kits/website/Hero.jsx":"4b141264aa2c","ui_kits/website/HowItWorks.jsx":"a1530d380b87","ui_kits/website/Nav.jsx":"224aa1d3d01a","ui_kits/website/OrderForm.jsx":"0af894b66c9f","ui_kits/website/Portfolio.jsx":"c5ed997be658","ui_kits/website/Services.jsx":"d77a432b87d2"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.HeyDPageDesignSystem_d9d450 = window.HeyDPageDesignSystem_d9d450 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — small pill label. Used for "NEW", status, category chips.
 * tone: brand | sub | point | neutral | dark
 */
function Badge({
  children,
  tone = "brand",
  dot = false,
  ...rest
}) {
  const tones = {
    brand: {
      bg: "var(--surface-brand-soft)",
      fg: "var(--brand-main)",
      dot: "var(--brand-main)"
    },
    sub: {
      bg: "var(--surface-sub-soft)",
      fg: "var(--sub-600)",
      dot: "var(--sub-400)"
    },
    point: {
      bg: "var(--surface-point-soft)",
      fg: "var(--point-500)",
      dot: "var(--point-400)"
    },
    neutral: {
      bg: "var(--gray-100)",
      fg: "var(--gray-600)",
      dot: "var(--gray-400)"
    },
    dark: {
      bg: "var(--gray-900)",
      fg: "#fff",
      dot: "var(--brand-point)"
    },
    solid: {
      bg: "var(--brand-main)",
      fg: "#fff",
      dot: "#fff"
    }
  };
  const t = tones[tone] || tones.brand;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      padding: "5px 11px",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-normal)",
      borderRadius: "var(--r-pill)",
      lineHeight: 1
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: t.dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/**
 * Icon — thin wrapper around Lucide line icons, the HeyD Page icon language.
 * Requires the Lucide UMD script to be present on the page:
 *   <script src="https://unpkg.com/lucide@latest"></script>
 * Renders a single consistent-stroke SVG. Never mix icon families.
 */
function Icon({
  name = "arrow-right",
  size = 20,
  strokeWidth = 1.75,
  color = "currentColor",
  className = "",
  style = {}
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el || !window.lucide) return;
    el.innerHTML = "";
    const i = document.createElement("i");
    i.setAttribute("data-lucide", name);
    el.appendChild(i);
    window.lucide.createIcons({
      attrs: {
        width: size,
        height: size,
        "stroke-width": strokeWidth
      }
    });
  }, [name, size, strokeWidth]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref,
    className: className,
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      color,
      flex: "none",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary interactive control.
 * Variants: primary (brand blue fill), secondary (soft blue), outline, ghost, dark.
 * Fully pill-shaped, per the HeyD Page marketing language.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  full = false,
  disabled = false,
  as = "button",
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 18px",
      font: "var(--fs-sm)",
      gap: 8,
      icon: 16
    },
    md: {
      padding: "13px 26px",
      font: "var(--fs-body)",
      gap: 9,
      icon: 18
    },
    lg: {
      padding: "17px 34px",
      font: "var(--fs-lg)",
      gap: 10,
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: "var(--brand-main)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--brand-main)",
      boxShadow: "var(--shadow-brand)"
    },
    secondary: {
      background: "var(--surface-brand-soft)",
      color: "var(--brand-main)",
      border: "1px solid var(--blue-100)",
      boxShadow: "none"
    },
    outline: {
      background: "transparent",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none"
    },
    dark: {
      background: "var(--gray-900)",
      color: "#fff",
      border: "1px solid var(--gray-900)",
      boxShadow: "var(--shadow-md)"
    }
  };
  const v = variants[variant] || variants.primary;
  const Comp = as;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    disabled: as === "button" ? disabled : undefined,
    style: {
      display: full ? "flex" : "inline-flex",
      width: full ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      padding: s.padding,
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1,
      letterSpacing: "var(--ls-normal)",
      borderRadius: "var(--r-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out)",
      whiteSpace: "nowrap",
      textDecoration: "none",
      ...v
    },
    onMouseEnter: e => {
      if (disabled) return;
      e.currentTarget.style.filter = "brightness(0.94)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.transform = "none";
    },
    onMouseDown: e => {
      if (disabled) return;
      e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconLeft,
    size: s.icon
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.icon
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square/round icon-only control. Used for nav, close, arrows.
 */
function IconButton({
  icon = "arrow-right",
  variant = "soft",
  size = "md",
  round = true,
  disabled = false,
  ...rest
}) {
  const dims = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const iconSize = {
    sm: 16,
    md: 20,
    lg: 22
  };
  const d = dims[size] || dims.md;
  const variants = {
    solid: {
      background: "var(--brand-main)",
      color: "#fff",
      border: "1px solid var(--brand-main)",
      boxShadow: "var(--shadow-brand)"
    },
    soft: {
      background: "var(--surface-brand-soft)",
      color: "var(--brand-main)",
      border: "1px solid var(--blue-100)"
    },
    outline: {
      background: "#fff",
      color: "var(--text-strong)",
      border: "1px solid var(--border-default)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent"
    },
    dark: {
      background: "var(--gray-900)",
      color: "#fff",
      border: "1px solid var(--gray-900)"
    }
  };
  const v = variants[variant] || variants.soft;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: d,
      height: d,
      borderRadius: round ? "var(--r-pill)" : "var(--r-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-out), filter var(--dur-fast) var(--ease-out)",
      ...v
    },
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.filter = "brightness(0.94)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = "none";
      e.currentTarget.style.transform = "none";
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "none";
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: iconSize[size] || 20
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/IconTile.jsx
try { (() => {
/**
 * IconTile — the floating squircle icon tile motif (blue gradient tile + glow).
 * Central to the HeyD Page hero/feature visual language.
 * tone: brand | sub | point | soft
 */
function IconTile({
  icon = "sparkles",
  size = 64,
  tone = "brand",
  float = false
}) {
  const tones = {
    brand: {
      bg: "linear-gradient(150deg, var(--blue-400), var(--brand-main))",
      fg: "#fff",
      glow: "var(--shadow-brand)"
    },
    sub: {
      bg: "linear-gradient(150deg, #9aabf4, var(--sub-400))",
      fg: "#fff",
      glow: "0 12px 32px rgba(113,134,236,0.32)"
    },
    point: {
      bg: "linear-gradient(150deg, var(--point-300), var(--point-400))",
      fg: "#fff",
      glow: "0 12px 32px rgba(9,218,182,0.30)"
    },
    soft: {
      bg: "var(--surface-brand-soft)",
      fg: "var(--brand-main)",
      glow: "var(--shadow-sm)"
    }
  };
  const t = tones[tone] || tones.brand;
  const radius = Math.round(size * 0.25);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: size,
      height: size,
      borderRadius: radius,
      background: t.bg,
      color: t.fg,
      boxShadow: t.glow,
      animation: float ? "heyd-float 4.5s var(--ease-in-out) infinite" : "none"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.45),
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { IconTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconTile.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
/**
 * SectionLabel — the small uppercase eyebrow above headings.
 * Optional leading rule/line, per pitch-deck section markers.
 */
function SectionLabel({
  children,
  tone = "brand",
  rule = false
}) {
  const colors = {
    brand: "var(--brand-main)",
    sub: "var(--sub-500)",
    point: "var(--point-500)",
    muted: "var(--text-muted)"
  };
  const c = colors[tone] || colors.brand;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: c,
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: c,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-xs)",
      fontWeight: "var(--fw-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase"
    }
  }, children));
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceChip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ChoiceChip — a selectable pill used in the order form (purpose, usage, tone).
 * Single or multi-select handled by parent; this is the visual state.
 */
function ChoiceChip({
  children,
  selected = false,
  icon,
  onClick,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      padding: "11px 18px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      borderRadius: "var(--r-pill)",
      cursor: "pointer",
      transition: "all var(--dur-fast) var(--ease-out)",
      background: selected ? "var(--surface-brand-soft)" : "var(--surface-card)",
      color: selected ? "var(--brand-main)" : "var(--text-body)",
      border: selected ? "1px solid var(--brand-main)" : "1px solid var(--border-default)",
      boxShadow: selected ? "0 0 0 1px var(--brand-main) inset" : "none"
    }
  }, rest), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children);
}

/**
 * Checkbox — labeled checkbox with brand fill.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: "pointer",
      fontSize: "var(--fs-sm)",
      color: "var(--text-body)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 20,
      height: 20,
      borderRadius: "var(--r-xs)",
      border: checked ? "1px solid var(--brand-main)" : "1px solid var(--border-default)",
      background: checked ? "var(--brand-main)" : "#fff",
      transition: "all var(--dur-fast) var(--ease-out)",
      flex: "none"
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    color: "#fff",
    strokeWidth: 3
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { ChoiceChip, Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field — label + optional hint/required marker wrapper around a form control.
 */
function Field({
  label,
  required = false,
  hint,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 5,
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-main)"
    }
  }, "*")), children, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-faint)"
    }
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const baseInput = {
  width: "100%",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--fs-body)",
  color: "var(--text-strong)",
  background: "var(--surface-card)",
  border: "1px solid var(--border-default)",
  borderRadius: "var(--r-md)",
  outline: "none",
  transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
  boxSizing: "border-box"
};
function focusOn(e) {
  e.currentTarget.style.borderColor = "var(--brand-main)";
  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(1,57,238,0.12)";
}
function focusOff(e) {
  e.currentTarget.style.borderColor = "var(--border-default)";
  e.currentTarget.style.boxShadow = "none";
}

/** Input — single-line text field. */
function Input({
  invalid = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("input", _extends({
    style: {
      ...baseInput,
      padding: "13px 16px",
      borderColor: invalid ? "var(--danger)" : "var(--border-default)",
      ...style
    },
    onFocus: focusOn,
    onBlur: focusOff
  }, rest));
}

/** Textarea — multi-line text field. */
function Textarea({
  rows = 5,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    style: {
      ...baseInput,
      padding: "13px 16px",
      resize: "vertical",
      lineHeight: "var(--lh-normal)",
      ...style
    },
    onFocus: focusOn,
    onBlur: focusOff
  }, rest));
}

/** Select — native dropdown, styled to match inputs. */
function Select({
  children,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("select", _extends({
    style: {
      ...baseInput,
      padding: "13px 16px",
      appearance: "none",
      backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%236e7789' stroke-width='1.75' stroke-linecap='round' stroke-linejoin='round'><path d='M6 8l4 4 4-4'/></svg>\")",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "right 14px center",
      paddingRight: 42,
      cursor: "pointer",
      ...style
    },
    onFocus: focusOn,
    onBlur: focusOff
  }, rest), children);
}
Object.assign(__ds_scope, { Input, Textarea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — base surface container. The default building block.
 * variant: default (white + soft shadow) | outline | soft (blue tint) | brand (blue fill) | dark
 */
function Card({
  children,
  variant = "default",
  padding = 28,
  hover = false,
  style = {},
  ...rest
}) {
  const variants = {
    default: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--text-body)",
      border: "1px solid var(--border-default)",
      boxShadow: "none"
    },
    soft: {
      background: "var(--surface-brand-soft)",
      color: "var(--text-body)",
      border: "1px solid var(--blue-100)",
      boxShadow: "none"
    },
    subtle: {
      background: "var(--surface-subtle)",
      color: "var(--text-body)",
      border: "1px solid var(--border-subtle)",
      boxShadow: "none"
    },
    brand: {
      background: "var(--brand-main)",
      color: "#fff",
      border: "1px solid var(--brand-main)",
      boxShadow: "var(--shadow-brand)"
    },
    dark: {
      background: "var(--gray-900)",
      color: "#fff",
      border: "1px solid var(--gray-800)",
      boxShadow: "var(--shadow-md)"
    }
  };
  const v = variants[variant] || variants.default;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--r-lg)",
      padding,
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
      ...v,
      ...style
    },
    onMouseEnter: e => {
      if (!hover) return;
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "var(--shadow-lg)";
    },
    onMouseLeave: e => {
      if (!hover) return;
      e.currentTarget.style.transform = "none";
      e.currentTarget.style.boxShadow = v.boxShadow;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/FeatureCard.jsx
try { (() => {
/**
 * FeatureCard — icon tile + title + description. The core "what we do" block.
 */
function FeatureCard({
  icon = "sparkles",
  title = "Feature title",
  children,
  tone = "brand",
  hover = true
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    variant: "default",
    padding: 28,
    hover: hover,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconTile, {
    icon: icon,
    size: 52,
    tone: tone
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: "var(--fs-h4)",
      fontWeight: "var(--fw-bold)",
      color: "var(--text-strong)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-relaxed)"
    }
  }, children)));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatCard.jsx
try { (() => {
/**
 * StatCard — a big number with label. Used in pitch decks & landing proof rows.
 * tone: brand | point | plain
 */
function StatCard({
  value = "97%",
  label = "Metric label",
  suffix,
  tone = "brand",
  align = "left"
}) {
  const colors = {
    brand: "var(--brand-main)",
    point: "var(--point-500)",
    plain: "var(--text-strong)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-display-lg)",
      fontWeight: "var(--fw-extrabold)",
      letterSpacing: "var(--ls-tighter)",
      color: colors[tone] || colors.brand,
      lineHeight: 1
    }
  }, value), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-h3)",
      fontWeight: "var(--fw-bold)",
      color: colors[tone] || colors.brand
    }
  }, suffix)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      color: "var(--text-muted)",
      fontWeight: "var(--fw-medium)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* global React */
const DS_CT = window.HeyDPageDesignSystem_d9d450;
function Contact() {
  const {
    Button,
    Icon
  } = DS_CT;
  const channels = [{
    icon: "mail",
    label: "이메일",
    value: "hello@heyd.page"
  }, {
    icon: "message-circle",
    label: "카카오톡 채널",
    value: "@heydpage"
  }, {
    icon: "instagram",
    label: "인스타그램",
    value: "@heyd.page"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "104px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--gray-900)",
      borderRadius: "var(--r-2xl)",
      padding: "72px 56px",
      textAlign: "center",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      top: "-40%",
      right: "-10%",
      width: 480,
      height: 480,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(1,57,238,0.55), rgba(1,57,238,0) 70%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 44,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.15,
      marginBottom: 18
    }
  }, "\uC911\uC694\uD55C \uBB38\uC11C, \uC774\uC81C ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-point)"
    }
  }, "\uC804\uBB38\uAC00"), "\uC640 \uD568\uAED8"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "rgba(255,255,255,0.72)",
      marginBottom: 36
    }
  }, "\uD504\uB85C\uC81D\uD2B8 \uC0C1\uB2F4\uC740 \uC5B8\uC81C\uB4E0 \uD3B8\uD558\uAC8C. \uACAC\uC801\uACFC \uC77C\uC815\uC740 \uBB34\uB8CC\uB85C \uC548\uB0B4\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 12,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    as: "a",
    href: "#order"
  }, "\uC8FC\uBB38\uC11C \uC791\uC131\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    iconLeft: "message-circle",
    style: {
      background: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.2)"
    }
  }, "1:1 \uBB38\uC758")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 44,
      flexWrap: "wrap"
    }
  }, channels.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.label,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.1)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: c.icon,
    size: 20,
    color: "var(--brand-point)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.55)"
    }
  }, c.label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 600
    }
  }, c.value))))))));
}
window.Contact = Contact;
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "40px 32px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 22,
      letterSpacing: "-0.03em",
      color: "var(--text-strong)"
    }
  }, "heyd", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-point)"
    }
  }, ".")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-faint)"
    }
  }, "\xA9 2026 HeyD Page. \uACBD\uB825\uC774 \uAC78\uB9B0 \uBB38\uC11C\uB294 \uC804\uBB38\uAC00\uC5D0\uAC8C.")));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Designer.jsx
try { (() => {
/* global React */
const DS_DG = window.HeyDPageDesignSystem_d9d450;
function Designer() {
  const {
    StatCard,
    Badge,
    Icon
  } = DS_DG;
  const stats = [{
    value: "12",
    suffix: "년",
    label: "디자인 경력",
    tone: "brand"
  }, {
    value: "320",
    suffix: "+",
    label: "완성 프로젝트",
    tone: "brand"
  }, {
    value: "98",
    suffix: "%",
    label: "재의뢰율",
    tone: "point"
  }];
  const points = ["AI 자동 생성이 아닌, 사람이 기획하고 디자인", "스타트업 IR·대기업 제안서 실무 경험 다수", "발표·인쇄·PDF 등 최종 산출물 형태별 최적화"];
  return /*#__PURE__*/React.createElement("section", {
    id: "designer",
    style: {
      background: "var(--brand-main)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "104px 32px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 64,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 2,
      background: "var(--brand-point)",
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-point)",
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: "0.14em",
      textTransform: "uppercase"
    }
  }, "MEET HEYD")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 42,
      fontWeight: 800,
      letterSpacing: "-0.03em",
      lineHeight: 1.2,
      marginBottom: 20
    }
  }, "\uBB38\uC11C \uD558\uB098\uC5D0\uB3C4", /*#__PURE__*/React.createElement("br", null), "\uC804\uBB38\uAC00\uC758 \uC774\uB984\uC744 \uAC81\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: "rgba(255,255,255,0.82)",
      marginBottom: 28,
      maxWidth: 460
    }
  }, "\uC548\uB155\uD558\uC138\uC694, \uD5E4\uC774\uB514\uC785\uB2C8\uB2E4. \uC911\uC694\uD55C \uC790\uB9AC\uC77C\uC218\uB85D \uBB38\uC11C\uC758 \uC644\uC131\uB3C4\uAC00 \uACB0\uACFC\uB97C \uBC14\uAFC9\uB2C8\uB2E4. \uC5EC\uB7EC\uBD84\uC758 \uC774\uC57C\uAE30\uAC00 \uAC00\uC7A5 \uC124\uB4DD\uB825 \uC788\uAC8C \uC804\uB2EC\uB418\uB3C4\uB85D, \uCC98\uC74C\uBD80\uD130 \uB05D\uAE4C\uC9C0 \uC9C1\uC811 \uB9CC\uB4ED\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, points.map(p => /*#__PURE__*/React.createElement("div", {
    key: p,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: "50%",
      background: "rgba(255,255,255,0.16)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 15,
    color: "var(--brand-point)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: "rgba(255,255,255,0.92)"
    }
  }, p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "var(--r-xl)",
      padding: 40,
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 88,
      height: 88,
      borderRadius: "50%",
      background: "linear-gradient(150deg, var(--point-300), var(--point-400))",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 22,
      fontSize: 34,
      fontWeight: 900,
      color: "#053b32"
    }
  }, "H"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      marginBottom: 4
    }
  }, "\uD5E4\uC774\uB514 (HeyD)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "rgba(255,255,255,0.7)",
      marginBottom: 32
    }
  }, "Presentation Designer \xB7 Founder"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20,
      paddingTop: 28,
      borderTop: "1px solid rgba(255,255,255,0.16)"
    }
  }, stats.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 40,
      fontWeight: 900,
      letterSpacing: "-0.03em",
      color: s.tone === "point" ? "var(--brand-point)" : "#fff",
      lineHeight: 1
    }
  }, s.value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: s.tone === "point" ? "var(--brand-point)" : "#fff"
    }
  }, s.suffix)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "rgba(255,255,255,0.7)",
      marginTop: 4
    }
  }, s.label)))))));
}
window.Designer = Designer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Designer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* global React */
const DS_H = window.HeyDPageDesignSystem_d9d450;
function Hero() {
  const {
    Button,
    Badge,
    IconTile
  } = DS_H;
  // floating tiles at the four corners, echoing the reference hero
  const tiles = [{
    icon: "presentation",
    tone: "brand",
    top: "14%",
    left: "8%",
    size: 74,
    delay: "0s"
  }, {
    icon: "file-text",
    tone: "sub",
    top: "26%",
    right: "9%",
    size: 66,
    delay: "0.8s"
  }, {
    icon: "bar-chart-3",
    tone: "point",
    top: "56%",
    left: "12%",
    size: 60,
    delay: "1.6s"
  }, {
    icon: "layout-template",
    tone: "brand",
    top: "60%",
    right: "11%",
    size: 70,
    delay: "1.1s"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      left: "50%",
      bottom: "-620px",
      transform: "translateX(-50%)",
      width: 1200,
      height: 1200,
      borderRadius: "50%",
      background: "radial-gradient(circle, rgba(1,57,238,0.16) 0%, rgba(1,57,238,0.10) 38%, rgba(1,57,238,0.05) 60%, rgba(1,57,238,0) 72%)"
    }
  }), tiles.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "absolute",
      top: t.top,
      left: t.left,
      right: t.right,
      animation: `heyd-float ${4.2 + i * 0.4}s var(--ease-in-out) ${t.delay} infinite`
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: t.icon,
    tone: t.tone,
    size: t.size
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 900,
      margin: "0 auto",
      padding: "96px 32px 150px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    dot: true
  }, "\uC804\uBB38\uAC00 1:1 \uB9DE\uCDA4 \uC81C\uC791"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 68,
      fontWeight: 900,
      letterSpacing: "-0.035em",
      lineHeight: 1.08,
      color: "var(--text-strong)"
    }
  }, "\uACBD\uB825\uC774 \uAC78\uB9B0 \uC911\uC694\uD55C \uBB38\uC11C,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-main)"
    }
  }, "AI\uAC00 \uC544\uB2CC \uC804\uBB38\uAC00"), "\uC5D0\uAC8C \uB9E1\uAE30\uC138\uC694"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--text-muted)",
      lineHeight: 1.6,
      maxWidth: 560
    }
  }, "\uD22C\uC790 \uC720\uCE58 IR, \uAC00\uB9F9 \uC81C\uC548\uC11C, \uD68C\uC0AC \uC18C\uAC1C\uC11C\uAE4C\uC9C0.", /*#__PURE__*/React.createElement("br", null), "12\uB144 \uACBD\uB825\uC758 \uD5E4\uC774\uB514\uAC00 \uAE30\uD68D\uBD80\uD130 \uB514\uC790\uC778\uAE4C\uC9C0 \uC9C1\uC811 \uC644\uC131\uD569\uB2C8\uB2E4."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: "arrow-right",
    as: "a",
    href: "#order"
  }, "\uC8FC\uBB38 \uC2DC\uC791\uD558\uAE30"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    as: "a",
    href: "#portfolio"
  }, "\uD3EC\uD2B8\uD3F4\uB9AC\uC624 \uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 30,
      marginTop: 18,
      color: "var(--text-faint)",
      fontSize: 14,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", null, "\uB204\uC801 320+ \uD504\uB85C\uC81D\uD2B8"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-default)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\uC7AC\uC758\uB8B0\uC728 98%"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--border-default)"
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", null, "\uD3C9\uADE0 4.9 / 5.0"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HowItWorks.jsx
try { (() => {
/* global React */
const DS_HW = window.HeyDPageDesignSystem_d9d450;
function HowItWorks() {
  const {
    IconTile
  } = DS_HW;
  const steps = [{
    icon: "edit-3",
    n: "01",
    title: "주문서 작성",
    body: "목적·활용 방식·마감 기한·방향성을 남기고 자료를 첨부해 주세요."
  }, {
    icon: "messages-square",
    n: "02",
    title: "1:1 상담",
    body: "헤이디가 직접 요구사항을 확인하고 견적과 일정을 안내합니다."
  }, {
    icon: "pen-tool",
    n: "03",
    title: "기획 · 디자인",
    body: "스토리라인 설계부터 슬라이드 디자인까지 전문가가 제작합니다."
  }, {
    icon: "check-check",
    n: "04",
    title: "검수 · 전달",
    body: "수정 반영 후 발표·PDF·인쇄 등 원하는 형태로 최종 전달합니다."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    style: {
      background: "var(--surface-subtle)",
      borderTop: "1px solid var(--border-subtle)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "104px 32px"
    }
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    center: true,
    label: "HOW IT WORKS",
    title: "\uC8FC\uBB38\uBD80\uD130 \uC644\uC131\uAE4C\uC9C0, 4\uB2E8\uACC4",
    desc: "\uBCF5\uC7A1\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4. \uC790\uB8CC\uB9CC \uC8FC\uC2DC\uBA74 \uB098\uBA38\uC9C0\uB294 \uC804\uBB38\uAC00\uAC00 \uC9C4\uD589\uD569\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
      position: "relative"
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: s.n,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconTile, {
    icon: s.icon,
    tone: i === 3 ? "point" : "brand",
    size: 52
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 800,
      color: "var(--border-default)",
      letterSpacing: "0.04em"
    }
  }, s.n)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      marginBottom: 8,
      color: "var(--text-strong)"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      color: "var(--text-muted)",
      lineHeight: 1.65
    }
  }, s.body)))))));
}
window.HowItWorks = HowItWorks;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HowItWorks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* global React */
const DS = window.HeyDPageDesignSystem_d9d450;
function Nav() {
  const {
    Button
  } = DS;
  const links = ["서비스", "진행 방식", "포트폴리오", "헤이디", "문의"];
  const targets = ["service", "how", "portfolio", "designer", "contact"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(255,255,255,0.82)",
      backdropFilter: "blur(14px)",
      borderBottom: "1px solid var(--border-subtle)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "0 32px",
      height: 72,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 900,
      fontSize: 24,
      letterSpacing: "-0.03em",
      color: "var(--text-strong)"
    }
  }, "heyd", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--brand-point)"
    }
  }, ".")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 34
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#" + targets[i],
    style: {
      color: "var(--text-body)",
      fontSize: 15,
      fontWeight: 500
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: "arrow-right",
    as: "a",
    href: "#order"
  }, "\uC8FC\uBB38\uD558\uAE30")));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/OrderForm.jsx
try { (() => {
/* global React */
const DS_OF = window.HeyDPageDesignSystem_d9d450;
function OrderForm() {
  const {
    Field,
    Input,
    Textarea,
    ChoiceChip,
    Checkbox,
    Button,
    Card,
    Icon
  } = DS_OF;
  const usages = ["발표용 (청중 앞)", "PDF 전달용", "인쇄물 제작", "온라인 게시"];
  const [usage, setUsage] = React.useState(["발표용 (청중 앞)"]);
  const [needCopy, setNeedCopy] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const toggleUsage = u => setUsage(prev => prev.includes(u) ? prev.filter(x => x !== u) : [...prev, u]);
  return /*#__PURE__*/React.createElement("section", {
    id: "order",
    style: {
      maxWidth: 820,
      margin: "0 auto",
      padding: "104px 32px"
    }
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    center: true,
    label: "ORDER",
    title: "\uC8FC\uBB38 \uC591\uC2DD",
    desc: "\uC544\uB798 \uB0B4\uC6A9\uC744 \uB0A8\uACA8\uC8FC\uC2DC\uBA74 \uD5E4\uC774\uB514\uAC00 \uC9C1\uC811 \uD655\uC778 \uD6C4 \uC5F0\uB77D\uB4DC\uB9BD\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement(Card, {
    variant: "default",
    padding: 40,
    style: {
      boxShadow: "var(--shadow-md)"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "40px 0",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: "50%",
      background: "var(--surface-point-soft)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 30,
    color: "var(--point-500)",
    strokeWidth: 2.5
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 800
    }
  }, "\uC8FC\uBB38\uC11C\uAC00 \uC811\uC218\uB418\uC5C8\uC2B5\uB2C8\uB2E4"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-muted)",
      fontSize: 16
    }
  }, "\uC601\uC5C5\uC77C \uAE30\uC900 24\uC2DC\uAC04 \uB0B4\uC5D0 \uD68C\uC2E0\uB4DC\uB9BD\uB2C8\uB2E4."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => setSent(false)
  }, "\uC0C8 \uC8FC\uBB38\uC11C \uC791\uC131")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "PPT\uC758 \uBAA9\uC801",
    required: true,
    hint: "\uBB34\uC5C7\uC744 \uC704\uD55C PPT\uC778\uC9C0 \uAD6C\uCCB4\uC801\uC73C\uB85C \uC801\uC5B4\uC8FC\uC2DC\uBA74 \uB354 \uC815\uD655\uD55C \uACAC\uC801\uC774 \uAC00\uB2A5\uD574\uC694."
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uC608) OO\uC0AC\uC5C5\uC5D0 \uB300\uD55C \uD22C\uC790 \uC720\uCE58\uB97C \uC704\uD55C \uBC1C\uD45C \uC790\uB8CC, \uC810\uC8FC \uBAA8\uC9D1\uC744 \uC704\uD55C \uAC00\uB9F9 \uC81C\uC548\uC11C"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      marginBottom: 12,
      color: "var(--text-strong)"
    }
  }, "\uD65C\uC6A9 \uBC29\uC2DD ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-faint)",
      fontWeight: 400,
      fontSize: 13
    }
  }, "(\uBCF5\uC218 \uC120\uD0DD)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10
    }
  }, usages.map(u => /*#__PURE__*/React.createElement(ChoiceChip, {
    key: u,
    selected: usage.includes(u),
    onClick: () => toggleUsage(u)
  }, u)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uB9C8\uAC10 \uAE30\uD55C",
    required: true,
    hint: "\uCD5C\uC885\uBCF8 \uC218\uB839 \uD76C\uB9DD\uC77C"
  }, /*#__PURE__*/React.createElement(Input, {
    type: "date",
    defaultValue: "2026-08-01"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uC608\uC0C1 \uBD84\uB7C9",
    hint: "\uB300\uB7B5\uC801\uC778 \uC2AC\uB77C\uC774\uB4DC \uC218"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uC608) 20\uC7A5 \uB0B4\uC678"
  }))), /*#__PURE__*/React.createElement(Field, {
    label: "\uB514\uC790\uC778 \uBC29\uD5A5\uC131",
    required: true,
    hint: "\uC6D0\uD558\uB294 \uB290\uB08C\uC744 \uC124\uBA85\uD558\uAC70\uB098 \uCC38\uACE0 \uB9C1\uD06C\uB97C \uB0A8\uACA8\uC8FC\uC138\uC694."
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 4,
    placeholder: "\uC608) \uC2E0\uB8B0\uAC10 \uC788\uACE0 \uAE54\uB054\uD55C \uBB34\uB4DC, \uBE14\uB8E8 \uACC4\uC5F4 \uC120\uD638. \uCC38\uACE0: behance.net/..."
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uC815\uB9AC\uB41C \uC790\uB8CC \uCCA8\uBD80",
    hint: "\uB0B4\uC6A9 \uAD6C\uC131\uAE4C\uC9C0 \uC758\uB8B0\uD558\uC2E4 \uACBD\uC6B0 \uBC29\uD5A5\uC131 \uCE78\uC5D0 \uD568\uAED8 \uB0A8\uACA8\uC8FC\uC138\uC694."
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: "22px",
      border: "1.5px dashed var(--border-default)",
      borderRadius: "var(--r-md)",
      color: "var(--text-muted)",
      background: "var(--surface-subtle)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "paperclip",
    size: 20,
    color: "var(--brand-main)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15
    }
  }, "\uD30C\uC77C\uC744 \uB04C\uC5B4\uB2E4 \uB193\uAC70\uB098 \uD074\uB9AD\uD574 \uC5C5\uB85C\uB4DC (PPT, PDF, DOC, \uC774\uBBF8\uC9C0)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "\uC774\uB984 / \uD68C\uC0AC",
    required: true
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "\uD64D\uAE38\uB3D9 / (\uC8FC)\uD5E4\uC774\uB514"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "\uC5F0\uB77D\uCC98",
    required: true,
    hint: "\uC774\uBA54\uC77C \uB610\uB294 \uD734\uB300\uD3F0"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "hello@heyd.page"
  }))), /*#__PURE__*/React.createElement(Checkbox, {
    label: "\uB0B4\uC6A9 \uAD6C\uC131(\uAE30\uD68D)\uAE4C\uC9C0 \uD568\uAED8 \uBB38\uC758\uD558\uACE0 \uC2F6\uC5B4\uC694",
    checked: needCopy,
    onChange: () => setNeedCopy(!needCopy)
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    full: true,
    iconRight: "send",
    onClick: () => setSent(true)
  }, "\uC8FC\uBB38\uC11C \uBCF4\uB0B4\uAE30"))));
}
window.OrderForm = OrderForm;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/OrderForm.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Portfolio.jsx
try { (() => {
/* global React */
const DS_PF = window.HeyDPageDesignSystem_d9d450;
function Portfolio() {
  const {
    Badge,
    Card
  } = DS_PF;
  const cats = ["전체", "IR", "제안서", "소개서", "발표"];
  const [cat, setCat] = React.useState("전체");
  // color-block "cover" tiles stand in for real PPT thumbnails (recreation placeholders)
  const items = [{
    title: "시리즈A 투자 유치 IR",
    tag: "IR",
    pages: "32p",
    cover: "linear-gradient(135deg, var(--blue-400), var(--brand-main))",
    fg: "#fff"
  }, {
    title: "프랜차이즈 가맹 제안서",
    tag: "제안서",
    pages: "28p",
    cover: "linear-gradient(135deg, #9aabf4, var(--sub-400))",
    fg: "#fff"
  }, {
    title: "SaaS 회사 소개서 (국문)",
    tag: "소개서",
    pages: "18p",
    cover: "var(--surface-brand-soft)",
    fg: "var(--brand-main)"
  }, {
    title: "컨퍼런스 발표 자료",
    tag: "발표",
    pages: "40p",
    cover: "linear-gradient(135deg, var(--point-300), var(--point-400))",
    fg: "#053b32"
  }, {
    title: "브릿지 라운드 피치덱",
    tag: "IR",
    pages: "24p",
    cover: "var(--gray-900)",
    fg: "#fff"
  }, {
    title: "제품 출시 소개서",
    tag: "소개서",
    pages: "16p",
    cover: "linear-gradient(135deg, var(--blue-300), var(--blue-500))",
    fg: "#fff"
  }];
  const shown = cat === "전체" ? items : items.filter(i => i.tag === cat);
  return /*#__PURE__*/React.createElement("section", {
    id: "portfolio",
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "104px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-end",
      flexWrap: "wrap",
      gap: 20,
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(window.SectionHead, {
    label: "PORTFOLIO",
    title: "\uACB0\uACFC\uB85C \uC99D\uBA85\uD569\uB2C8\uB2E4",
    desc: "\uD5E4\uC774\uB514\uAC00 \uC9C1\uC811 \uC644\uC131\uD55C \uCD5C\uADFC \uD504\uB85C\uC81D\uD2B8\uC785\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      marginBottom: 6
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    onClick: () => setCat(c),
    style: {
      padding: "9px 16px",
      borderRadius: "var(--r-pill)",
      fontSize: 14,
      fontWeight: 600,
      cursor: "pointer",
      transition: "all .14s var(--ease-out)",
      background: cat === c ? "var(--brand-main)" : "transparent",
      color: cat === c ? "#fff" : "var(--text-muted)",
      border: cat === c ? "1px solid var(--brand-main)" : "1px solid var(--border-default)"
    }
  }, c)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 22
    }
  }, shown.map(it => /*#__PURE__*/React.createElement(Card, {
    key: it.title,
    variant: "default",
    padding: 0,
    hover: true,
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "16/10",
      background: it.cover,
      display: "flex",
      alignItems: "flex-end",
      padding: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: it.fg,
      fontWeight: 800,
      fontSize: 19,
      letterSpacing: "-0.02em",
      lineHeight: 1.2
    }
  }, it.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "neutral"
  }, it.tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-faint)",
      fontWeight: 500
    }
  }, it.pages))))));
}
window.Portfolio = Portfolio;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Portfolio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* global React */
const DS_S = window.HeyDPageDesignSystem_d9d450;
function SectionHead({
  label,
  title,
  desc,
  center
}) {
  const {
    SectionLabel
  } = DS_S;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      alignItems: center ? "center" : "flex-start",
      textAlign: center ? "center" : "left",
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    tone: "brand",
    rule: !center
  }, label), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      fontWeight: 800,
      letterSpacing: "-0.025em",
      lineHeight: 1.15,
      color: "var(--text-strong)"
    }
  }, title), desc && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      color: "var(--text-muted)",
      lineHeight: 1.6,
      maxWidth: 620
    }
  }, desc));
}
window.SectionHead = SectionHead;
function Services() {
  const {
    FeatureCard
  } = DS_S;
  const items = [{
    icon: "trending-up",
    title: "투자 유치 · IR",
    tone: "brand",
    body: "심사역을 설득하는 스토리라인과 데이터 시각화로 다음 라운드를 준비합니다."
  }, {
    icon: "store",
    title: "가맹 제안서",
    tone: "sub",
    body: "점주 모집을 위한 브랜드 매력과 수익 구조를 명확하게 전달합니다."
  }, {
    icon: "building-2",
    title: "회사 소개서",
    tone: "brand",
    body: "기업의 신뢰와 전문성을 담은 국·영문 회사 소개 자료."
  }, {
    icon: "package",
    title: "제품 · 서비스 소개",
    tone: "brand",
    body: "복잡한 기능도 한눈에. 고객이 이해하는 언어로 재구성합니다."
  }, {
    icon: "graduation-cap",
    title: "발표 · 강연 자료",
    tone: "sub",
    body: "무대 위에서 빛나는 발표용 슬라이드. 청중의 시선을 붙잡습니다."
  }, {
    icon: "sparkles",
    title: "브랜드 문서 리디자인",
    tone: "point",
    body: "기존 자료를 브랜드 톤에 맞춰 완성도 높게 다듬어 드립니다."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "service",
    style: {
      maxWidth: "var(--container)",
      margin: "0 auto",
      padding: "104px 32px"
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: true,
    label: "WHAT WE MAKE",
    title: "\uC5B4\uB5A4 \uBB38\uC11C\uB4E0, \uC804\uBB38\uAC00\uC758 \uC644\uC131\uB3C4\uB85C",
    desc: "\uD5E4\uC774\uB514 \uD398\uC774\uC9C0\uB294 \uACB0\uACFC\uB85C \uC99D\uBA85\uD558\uB294 \uBB38\uC11C\uB97C \uB9CC\uB4ED\uB2C8\uB2E4. \uC790\uC8FC \uC758\uB8B0\uB418\uB294 \uC791\uC5C5\uB4E4\uC785\uB2C8\uB2E4."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 20
    }
  }, items.map(it => /*#__PURE__*/React.createElement(FeatureCard, {
    key: it.title,
    icon: it.icon,
    title: it.title,
    tone: it.tone
  }, it.body))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.IconTile = __ds_scope.IconTile;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

__ds_ns.ChoiceChip = __ds_scope.ChoiceChip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.StatCard = __ds_scope.StatCard;

})();
