import { Inter, Open_Sans } from "next/font/google";
import React from "react";

const page = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        width: "100%",
        height: "100%",
        backgroundColor: "#FAFAFA",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          justifyContent: "center",
          alignItems: "center",
          flexShrink: 0,
          padding: "177px 0px",
          height: "100%",
          width: "auto",
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            alignSelf: "stretch",
            justifyContent: "space-between",
            height: "100%",
            width: "auto",
            padding: "24px 24px 32px 24px",
            flexShrink: 0,
            borderRight: "#1F1F22",
            backgroundColor: "#09090A",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "40px 0px",
              alignSelf: "stretch",
              gap: 44,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div>
                <img src="/white.png" alt="picture" />
              </div>
              <div>
                <p
                  style={{
                    width: "150px",
                    height: "auto",
                    fontFamily: "Open_Sans",
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#EFEFEF",
                  }}
                >
                  Name
                </p>
                <p
                  style={{
                    width: "150px",
                    height: "auto",
                    fontFamily: "Open_Sans",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#C0BFBD",
                  }}
                >
                  name@email.com
                </p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "auto",
                width: "218px",
                padding: "16px",
                gap: 10,
                borderRadius: "6px",
                backgroundColor: "#1F1F22",
              }}
            >
              <div
                style={{
                  display: "flex",
                  height: "24px",
                  width: "186px",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <img src="/search.png" alt="picture" />
                <input
                  style={{
                    backgroundColor: "#1F1F22",
                    border: "none",
                    margin: "-8px",
                  }}
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px",
                  gap: 10,
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "186px",
                    height: "24px",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <img src="/home.png" alt="picture" />
                  <p
                    style={{
                      color: "#EFEFEF",
                      fontFamily: "Open_Sans",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "22.4px",
                    }}
                  >
                    Accounts
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px",
                  gap: 10,
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "186px",
                    height: "24px",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <img src="/analytics.png" alt="picture" />
                  <p
                    style={{
                      color: "#EFEFEF",
                      fontFamily: "Open_Sans",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "22.4px",
                    }}
                  >
                    Analytics
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: "16px",
                  gap: 10,
                  borderRadius: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "186px",
                    height: "24px",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <img src="/settings.png" alt="picture" />
                  <p
                    style={{
                      color: "#EFEFEF",
                      fontFamily: "Open_Sans",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "22.4px",
                    }}
                  >
                    Settings
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "62px 0px",
              gap: 8,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: "16px",
                gap: 10,
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "24px",
                  width: "186px",
                  gap: 16,
                }}
              >
                <img src="/logout.png" alt="picture" />
                <p
                  style={{
                    color: "#EFEFEF",
                    fontFamily: "Open_Sans",
                    fontSize: "16px",
                    fontWeight: 400,
                    lineHeight: "22.4px",
                  }}
                >
                  Logout
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              color: "#000000",
              fontFamily: "Inter",
              fontSize: "40px",
              fontWeight: 700,
              margin: "84px",
            }}
          >
            Revelation Journal
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 36,
            marginLeft: "84px",
            marginTop: "-53px",
            height: "100%",
            width: "100%",
            flexShrink: 0,
            borderRadius: "5px",
            backgroundColor: "#EEE",
          }}
        >
          <p
            style={{
              height: "19px",
              flexShrink: 0,
              color: "#000000",
              fontFamily: "Inter",
              padding: "20px",
              fontSize: "20px",
              fontWeight: 700,
              paddingLeft: "43px",
            }}
          >
            Account Name
          </p>
          <div
            style={{
              display: "flex",
              alignContent: "flex-start",
              alignItems: "flex-start",
              width: "85%",
              height: "auto",
              marginLeft: "20px",
              gap: 28,
              flexShrink: 0,
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                minWidth: "200px",
                gap: 8,
                padding: "24px",
                flex: "1 0 0",
                borderRadius: "6px",
                backgroundColor: "#FFF",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <p
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Todays Profit
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    rowGap: "8px",
                    borderRadius: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      color: "#00CC76",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "36px",
                    }}
                  >
                    $2,234
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 4,
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    color: "#1C1C1C",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  -0.03%
                </p>
                <img src="/arrowfall.png" alt="picture" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                minWidth: "200px",
                gap: 8,
                padding: "24px",
                flex: "1 0 0",
                borderRadius: "6px",
                backgroundColor: "#FFF",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <p
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Todays Profit
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    rowGap: "8px",
                    borderRadius: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      color: "#00CC76",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "36px",
                    }}
                  >
                    $2,234
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 4,
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    color: "#1C1C1C",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  -0.03%
                </p>
                <img src="/arrowfall.png" alt="picture" />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "space-between",
                minWidth: "200px",
                gap: 8,
                padding: "24px",
                flex: "1 0 0",
                borderRadius: "6px",
                backgroundColor: "#FFF",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    borderRadius: "8px",
                    flex: "1 0 0",
                    alignSelf: "stretch",
                  }}
                >
                  <p
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Todays Profit
                  </p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "space-between",
                    alignSelf: "stretch",
                    rowGap: "8px",
                    borderRadius: "8px",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      color: "#00CC76",
                      fontFamily: "Inter",
                      fontSize: "24px",
                      fontWeight: 600,
                      lineHeight: "36px",
                    }}
                  >
                    $2,234
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 4,
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter",
                    color: "#1C1C1C",
                    fontSize: "12px",
                    fontWeight: 400,
                    lineHeight: "18px",
                  }}
                >
                  -0.03%
                </p>
                <img src="/arrowfall.png" alt="picture" />
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 28,
              width: "40%",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "40%",
                height: "auto",
                padding: "24px",
                alignItems: "center",
                justifyContent: "flex-start",
                flexDirection: "column",
                gap: 16,
                flex: "1 0 0",
                borderRadius: "6px",
                backgroundColor: "#FFF",
                boxShadow: "rgba(0, 0, 0, 0.10)",
                marginLeft: "20px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Deposit
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    The initial account balance
                  </p>
                </div>
                <p
                  style={{
                    color: "#111827",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  $100,000
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Current Balance
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    Vue Js, Tailwind
                  </p>
                </div>
                <p
                  style={{
                    color: "#111827",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  $102,234
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Total Profit
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    Vue Js, Tailwind
                  </p>
                </div>
                <p
                  style={{
                    color: "#00CC76",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  $2,234
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Total Profit Percentage
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    Vue Js, Tailwind
                  </p>
                </div>
                <p
                  style={{
                    color: "#00CC76",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  2.23%
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    LasT Updated
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    The initial account balance
                  </p>
                </div>
                <p
                  style={{
                    color: "#111827",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  21 January 2023
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Broker
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    React and Bootstrap Framework
                  </p>
                </div>
                <p
                  style={{
                    color: "#111827",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  8Cap Demo 1
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Account Type
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    Bootstrap Framework
                  </p>
                </div>
                <p
                  style={{
                    color: "#111827",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Prop Firm Phase 1
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  alignSelf: "stretch",
                  padding: "9px 0px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    flex: "1 0 0",
                  }}
                >
                  <p
                    style={{
                      color: "#111827",
                      fontFamily: "Inter",
                      fontSize: "16px",
                      fontWeight: 6600,
                      lineHeight: "24px",
                    }}
                  >
                    Platform
                  </p>
                  <p
                    style={{
                      color: "#6B7280",
                      fontFamily: "Inter",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "18px",
                    }}
                  >
                    Tailwind, React
                  </p>
                </div>
                <p
                  style={{
                    color: "#111827",
                    textAlign: "right",
                    fontFamily: "Inter",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px",
                  }}
                >
                  Meta Trader 5
                </p>
              </div>
              <div
                style={{
                  width: "641px",
                  height: "1px",
                  backgroundColor: "#E5E7EB",
                }}
              ></div>
            </div>
          </div>
          <div>
            <div
              style={{
                marginLeft: "20px",
              }}
            >
              <p
                style={{
                  color: "#111827",
                }}
              >
                Daily
              </p>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                gap: "2%",
              }}
            >
              <div
                style={{
                  marginLeft: "20px",
                  fontFamily: "Inter",
                  display: "flex",
                  padding: "18px",
                  width: "40%",
                  height: "1050px",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  flexShrink: 0,
                  borderRadius: "6px",
                  backgroundColor: "#FFF",
                  boxShadow: "rgba(0, 0, 0, 0.10)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    width: "626px",
                    padding: "10px 0px",
                    alignContent: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 88,
                    flexWrap: "wrap",
                    fontFamily: "Inter",
                    fontSize: "20px",
                    fontWeight: 400,
                    color: "#000",
                  }}
                >
                  <p>Date</p>
                  <p>Trades</p>
                  <p>Result</p>
                  <p>Win Rate</p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  flexShrink: 0,
                  gap: 28,
                  width: "12%",
                  height: "245px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    minWidth: "200px",
                    width: "100%",
                    height: "auto",
                    padding: "24px",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: 8,
                    flex: "1 0 0",
                    borderRadius: "6px",
                    backgroundColor: "#FFF",
                  }}
                >
                  <p
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Win Rate
                  </p>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                      rowGap: 8,
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    }}
                  >
                    <p
                      style={{
                        color: "#1C1C1C",
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "36px",
                      }}
                    >
                      80%
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        gap: 4,
                        borderRadius: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter",
                          color: "#1C1C1C",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        -0.03%
                      </p>
                      <img src="/arrowfall.png" alt="picture" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  flexShrink: 0,
                  gap: 28,
                  width: "12%",
                  height: "245px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    minWidth: "200px",
                    width: "100%",
                    height: "auto",
                    padding: "24px",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: 8,
                    flex: "1 0 0",
                    borderRadius: "6px",
                    backgroundColor: "#FFF",
                  }}
                >
                  <p
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Average Risk Reward
                  </p>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                      rowGap: 8,
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    }}
                  >
                    <p
                      style={{
                        color: "#1C1C1C",
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "36px",
                      }}
                    >
                      1:2R
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        gap: 4,
                        borderRadius: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter",
                          color: "#1C1C1C",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        -0.03%
                      </p>
                      <img src="/arrowfall.png" alt="picture" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignContent: "flex-start",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  flexShrink: 0,
                  gap: 28,
                  width: "12%",
                  height: "245px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    minWidth: "200px",
                    width: "100%",
                    height: "auto",
                    padding: "24px",
                    alignItems: "flex-start",
                    flexDirection: "column",
                    gap: 8,
                    flex: "1 0 0",
                    borderRadius: "6px",
                    backgroundColor: "#FFF",
                  }}
                >
                  <p
                    style={{
                      color: "#1C1C1C",
                      fontFamily: "Inter",
                      fontSize: "14px",
                      fontWeight: 600,
                      lineHeight: "20px",
                    }}
                  >
                    Expectancy
                  </p>
                  <div
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "space-between",
                      rowGap: 8,
                      alignSelf: "stretch",
                      flexWrap: "wrap",
                      borderRadius: "8px",
                    }}
                  >
                    <p
                      style={{
                        color: "#1C1C1C",
                        fontFamily: "Inter",
                        fontSize: "24px",
                        fontWeight: 600,
                        lineHeight: "36px",
                      }}
                    >
                      $1,234
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignContent: "center",
                        alignItems: "center",
                        gap: 4,
                        borderRadius: "8px",
                        flexWrap: "wrap",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter",
                          color: "#1C1C1C",
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "18px",
                        }}
                      >
                        -0.03%
                      </p>
                      <img src="/arrowfall.png" alt="picture" />
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: 20,
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        padding: "24px",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 8,
                        borderRadius: "6px",
                        backgroundColor: "#FFF",
                        flex: "1 0 0",
                        minWidth: "200px",
                        height: "auto",
                      }}
                    >
                      <p
                        style={{
                          fontFamily: "Inter",
                          fontSize: "14px",
                          fontWeight: 600,
                          lineHeight: "20px",
                          color: "#1C1C1C",
                        }}
                      >
                        Profit Factor
                      </p>

                      <div
                        style={{
                          width: "100%",
                          height: "auto",
                          display: "flex",
                          alignContent: "center",
                          alignItems: "center",
                          justifyContent: "space-between",
                          rowGap: 8,
                          alignSelf: "stretch",
                          flexWrap: "wrap",
                          borderRadius: "8px",
                        }}
                      >
                        <p
                          style={{
                            color: "#1C1C1C",
                            fontFamily: "Inter",
                            fontSize: "24px",
                            fontWeight: 600,
                            lineHeight: "36px",
                          }}
                        >
                          $1,234
                        </p>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          alignContent: "center",
                          alignItems: "center",
                          gap: 4,
                          borderRadius: "8px",
                          flexWrap: "wrap",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "Inter",
                            color: "#1C1C1C",
                            fontSize: "12px",
                            fontWeight: 400,
                            lineHeight: "18px",
                          }}
                        >
                          -0.03%
                        </p>
                        <img src="/arrowfall.png" alt="picture" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                color: "#000000",
                fontFamily: "Inter",
                fontSize: "20px",
                fontWeight: 700,
              }}
            >
              Detailed Stats
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Winning Trades
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#1C1C1C",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    52
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                flexDirection: "row",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Winning Long Trades
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#1C1C1C",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    53
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Winning Short Trades
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#1C1C1C",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    5
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Average Winning Trade
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#00CC76",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    $1,231
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Losing Trades
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#1C1C1C",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    52
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Losing Long Trades
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#1C1C1C",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    32
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Losing Short Trades
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#1C1C1C",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    3
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                marginTop: "20px",
                display: "flex",
                height: "116px",
                width: "22%",
                marginLeft: "20px",
                alignContent: "flex-start",
                alignItems: "flex-start",
                gap: 28,
                flexShrink: 0,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  minWidth: "200px",
                  padding: "24px",
                  gap: 8,
                  borderRadius: "6px",
                  flex: "1 0 0",
                  backgroundColor: "#FFF",
                }}
              >
                <p
                  style={{
                    color: "#1C1C1C",
                    fontFamily: "Inter",
                    fontSize: "14px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  Average Losing Trade
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignContent: "center",
                    alignItems: "center",
                    rowGap: "8px",
                    alignSelf: "stretch",
                    flexWrap: "wrap",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Inter",
                      color: "#E30000",
                      fontSize: "24px",
                      lineHeight: "36px",
                      fontWeight: 600,
                    }}
                  >
                    $500
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      alignContent: "center",
                      borderRadius: "8px",
                      gap: 4,
                      flexWrap: "wrap",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "Inter",
                        color: "#1C1C1C",
                        fontSize: "12px",
                        lineHeight: "18px",
                        fontWeight: 400,
                      }}
                    >
                      -0.03%
                    </p>
                    <img src="/arrowfall.png" alt="picture" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
